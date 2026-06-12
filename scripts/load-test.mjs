// Load test: simuleert N gelijktijdige inzendingen naar responses_v10.
// Gebruik: node scripts/load-test.mjs [aantal]
// Testrijen zijn herkenbaar aan remark = 'LOAD_TEST_DELETE_ME' en worden
// na afloop handmatig uit de database verwijderd.

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const CONCURRENT_USERS = Number(process.argv[2] ?? 40);
const TEST_MARKER = 'LOAD_TEST_DELETE_ME';

function readEnv() {
	const envPath = resolve(dirname(fileURLToPath(import.meta.url)), '../.env');
	const lines = readFileSync(envPath, 'utf8').split('\n');
	const env = {};
	for (const line of lines) {
		const match = line.match(/^([A-Z_]+)=(.*)$/);
		if (match) env[match[1]] = match[2].trim().replace(/^["']|["']$/g, '');
	}
	return env;
}

function buildTestPayload(userIndex) {
	const answers = {};
	const timings = {};
	for (let q = 1; q <= 36; q++) {
		answers[`q${q}`] = { value: String((userIndex + q) % 5 + 1) };
		timings[`q${q}`] = 2000 + ((userIndex * q) % 4000);
	}
	return {
		answers,
		duration_ms: 5 * 60 * 1000,
		question_timings: timings,
		remark: TEST_MARKER,
		age_category: '25-34',
		is_raad_van_advies: false,
		situation: 'load-test'
	};
}

async function submitOnce(url, anonKey, userIndex) {
	const start = performance.now();
	try {
		const response = await fetch(`${url}/rest/v1/responses_v10`, {
			method: 'POST',
			headers: {
				apikey: anonKey,
				Authorization: `Bearer ${anonKey}`,
				'Content-Type': 'application/json',
				Prefer: 'return=minimal'
			},
			body: JSON.stringify(buildTestPayload(userIndex))
		});
		const ms = performance.now() - start;
		if (!response.ok) {
			const body = await response.text();
			return { ok: false, ms, error: `HTTP ${response.status}: ${body.slice(0, 200)}` };
		}
		return { ok: true, ms };
	} catch (err) {
		return { ok: false, ms: performance.now() - start, error: String(err) };
	}
}

const env = readEnv();
const url = env.VITE_PUBLIC_SUPABASE_URL;
const anonKey = env.VITE_PUBLIC_SUPABASE_ANON_KEY;
if (!url || !anonKey) {
	console.error('VITE_PUBLIC_SUPABASE_URL of VITE_PUBLIC_SUPABASE_ANON_KEY ontbreekt in .env');
	process.exit(1);
}

console.log(`Load test: ${CONCURRENT_USERS} gelijktijdige inzendingen naar ${url}`);
const overallStart = performance.now();
const results = await Promise.all(
	Array.from({ length: CONCURRENT_USERS }, (_, i) => submitOnce(url, anonKey, i))
);
const totalMs = performance.now() - overallStart;

const succeeded = results.filter((r) => r.ok);
const failed = results.filter((r) => !r.ok);
const latencies = succeeded.map((r) => r.ms).sort((a, b) => a - b);
const percentile = (p) => latencies[Math.min(latencies.length - 1, Math.floor((p / 100) * latencies.length))];

console.log('');
console.log(`Gelukt:    ${succeeded.length}/${CONCURRENT_USERS}`);
console.log(`Mislukt:   ${failed.length}/${CONCURRENT_USERS}`);
if (latencies.length) {
	console.log(`Snelste:   ${Math.round(latencies[0])} ms`);
	console.log(`Mediaan:   ${Math.round(percentile(50))} ms`);
	console.log(`95e perc.: ${Math.round(percentile(95))} ms`);
	console.log(`Traagste:  ${Math.round(latencies[latencies.length - 1])} ms`);
}
console.log(`Totaal:    ${Math.round(totalMs)} ms voor de hele batch`);
for (const f of failed) {
	console.log(`FOUT: ${f.error}`);
}
process.exit(failed.length ? 1 : 0);
