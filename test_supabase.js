import { createClient } from '@supabase/supabase-js';

const url = 'https://kjorxtwgcvbzyjikadab.supabase.co';
const key = 'sb_publishable_nAFVwUBc_SKVgBAogroBXQ_6BT5qZTI';

const supabase = createClient(url, key);

async function test() {
    console.log("Testing connection...");
    try {
        const { data, error } = await supabase.from('responses').select('*').limit(1);
        if (error) {
            console.error("Supabase select error:", JSON.stringify(error, null, 2));
        } else {
            console.log("Select success! Data:", data);
        }
        
        console.log("\nTesting insert...");
        const { error: insertError } = await supabase.from('responses').insert({
            answers: {},
            total_important: 0,
            total_skipped: 0,
            total_remarks: 0,
            duration_ms: 0
        });
        if (insertError) {
            console.error("Insert error:", JSON.stringify(insertError, null, 2));
        } else {
            console.log("Insert success!");
        }
    } catch (e) {
        console.error("Caught exception:", e);
    }
}

test();
