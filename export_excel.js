import { createClient } from '@supabase/supabase-js';
import { questions } from './src/lib/data/questions.ts';
import { writeFileSync } from 'fs';

const url = 'https://kjorxtwgcvbzyjikadab.supabase.co';
const key = 'sb_publishable_nAFVwUBc_SKVgBAogroBXQ_6BT5qZTI';

const supabase = createClient(url, key);

function escapeCsv(value) {
    const str = String(value ?? '');
    if (str.includes(';') || str.includes('"') || str.includes('\n')) {
        return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
}

async function exportToExcel() {
    console.log('Ophalen van responses uit Supabase...');

    const { data: responses, error } = await supabase
        .from('responses')
        .select('*')
        .order('created_at', { ascending: true });

    if (error) {
        console.error('Fout:', error);
        return;
    }

    if (!responses?.length) {
        console.log('Geen responses gevonden.');
        return;
    }

    console.log(`${responses.length} responses gevonden. CSV wordt gemaakt...`);

    // Kolommen: Datum | Duur | per vraag: rating + gekozen opties | Opmerkingen
    const header = [
        'Respondent',
        'Datum',
        'Duur (sec)',
        ...questions.flatMap(q => [
            `${q.id} - belangrijk?`,
            `${q.id} - gekozen`
        ]),
        'Opmerkingen'
    ];

    const rows = responses.map((response, i) => {
        const answers = response.answers || {};
        const date = new Date(response.created_at).toLocaleString('nl-NL');
        const duration = Math.round((response.duration_ms || 0) / 1000);

        // Verzamel opmerkingen
        const remarks = questions
            .filter(q => answers[q.id]?.remark)
            .map(q => `${q.id}: ${answers[q.id].remark}`)
            .join(' | ');

        return [
            i + 1,
            date,
            duration,
            ...questions.flatMap(q => {
                const answer = answers[q.id];
                if (!answer) return ['', ''];
                return [
                    answer.rating === 'important' ? 'ja' : 'nee',
                    answer.selectedOptions?.join(', ') ?? ''
                ];
            }),
            remarks
        ];
    });

    // CSV met ; als scheidingsteken (Excel NL-standaard)
    const csv = [
        header.map(escapeCsv).join(';'),
        ...rows.map(row => row.map(escapeCsv).join(';'))
    ].join('\n');

    // BOM toevoegen zodat Excel UTF-8 herkent
    const bom = '\uFEFF';
    writeFileSync('antwoorden.csv', bom + csv, 'utf-8');

    console.log(`\nKlaar! Bestand opgeslagen als: antwoorden.csv`);
    console.log(`${responses.length} respondenten x ${questions.length} vragen`);
    console.log('\nOpen het bestand in Excel (dubbelklik of Bestand > Openen)');
}

exportToExcel();
