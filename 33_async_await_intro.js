/* LIVELLO 3: ASYNC / AWAIT
   OBIETTIVO: Sintassi moderna per gestire le attese.
   FONTE: Dispensa Teoria JS
*/

function attesa(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function operazioneLunga() {
    console.log("Inizio calcolo complesso...");
    
    // La parola chiave 'await' mette in pausa questa funzione (e solo questa)
    await attesa(3000); // Aspetta 3 secondi
    
    console.log("Calcolo finito!");
}

operazioneLunga();