import { createClient } from '@supabase/supabase-js';
import { questions } from './src/lib/data/questions.ts';

const url = 'https://kjorxtwgcvbzyjikadab.supabase.co';
const key = 'sb_publishable_nAFVwUBc_SKVgBAogroBXQ_6BT5qZTI';

const supabase = createClient(url, key);

async function extractAndParse() {
    console.log("Haalt resultaten op uit Supabase...");
    
    const { data: responses, error } = await supabase
        .from('responses')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);

    if (error) {
        console.error("Fout bij ophalen:", error);
        return;
    }

    if (!responses || responses.length === 0) {
        console.log("Geen reacties gevonden in de database.");
        return;
    }

    console.log(`\n=== LAATSTE ${responses.length} REACTIES ===\n`);

    responses.forEach((response, index) => {
        const date = new Date(response.created_at).toLocaleString('nl-NL');
        console.log(`\n---------------------------------------------------------`);
        console.log(`REACTIE #${index + 1} (Datum: ${date})`);
        console.log(`Stats - Belangrijk: ${response.total_important} | Overgeslagen: ${response.total_skipped} | Duur: ${Math.round(response.duration_ms / 1000)}s`);
        console.log(`---------------------------------------------------------\n`);
        
        const answers = response.answers || {};
        const answeredKeys = Object.keys(answers);
        
        if (answeredKeys.length === 0) {
            console.log("Geen antwoorden ingevuld (waarschijnlijk meteen op Afronden geklikt).\n");
            return;
        }

        let currentPhase = '';

        questions.forEach(q => {
            const answer = answers[q.id];
            
            // Verberg vragen die niet beantwoord of overgeslagen zijn
            if (!answer || answer.rating === 'skip') {
                return; 
            }

            if (q.phase !== currentPhase) {
                console.log(`\n[ FASE: ${q.phase.toUpperCase()} ]`);
                currentPhase = q.phase;
            }

            let ratingText = answer.rating === 'important' ? "BELANGRIJK" : answer.rating;
            let remarkText = answer.remark ? ` (Opmerking: "${answer.remark}")` : '';

            const optionsText = answer.selectedOptions?.length
                ? ` → ${answer.selectedOptions.join(', ')}`
                : '';

            console.log(`- Vraag: "${q.text}"`);
            console.log(`  ${ratingText}${optionsText}${remarkText}`);
        });
        console.log("");
    });
}

extractAndParse();
