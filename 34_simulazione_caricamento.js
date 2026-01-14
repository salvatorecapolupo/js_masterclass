/* LIVELLO 3: SIMULAZIONE CARICAMENTO
   OBIETTIVO: Esercizio specifico della dispensa (simulare loading dati).
   LOGICA: Mostra "Caricamento...", aspetta, mostra "Fatto".
*/

const datiFinti = ["Utente A", "Utente B", "Utente C"];

async function scaricaDatiSimulati() {
    console.log("⏳ Caricamento in corso...");

    // Simuliamo un ritardo di rete di 2 secondi
    await new Promise(r => setTimeout(r, 2000));

    console.log("✅ Dati caricati:", datiFinti);
}

scaricaDatiSimulati();