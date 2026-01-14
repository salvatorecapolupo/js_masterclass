/* FILE: 49_fetch_parallela_async.js
   LIVELLO: Advanced Async
   FONTE: TPSIT_5_RESTful_API (Esercizio 9 - Richiesta Specifica Utente)
   OBIETTIVO: Eseguire due fetch contemporaneamente e aspettare la fine di entrambe.
*/

async function dashboardStatistiche() {
    console.log("⏳ Inizio caricamento parallelo...");
    
    const start = Date.now();

    // 1. Lanciamo le promesse SENZA await (partono subito)
    const promessaUtenti = fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());
    const promessaPost = fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json());

    try {
        // 2. await Promise.all aspetta che TUTTO l'array sia risolto
        const [utenti, posts] = await Promise.all([promessaUtenti, promessaPost]);
        
        const tempo = Date.now() - start;
        console.log(`✅ Caricamento completato in ${tempo}ms`);
        
        console.log(`RISULTATO: Abbiamo ${utenti.length} utenti e ${posts.length} post nel sistema.`);
        
        // Logica combinata: Primo post scritto dal primo utente?
        console.log(`Primo utente: ${utenti[0].name}`);
        
    } catch (err) {
        console.error("Una delle due chiamate è fallita!", err);
    }
}

dashboardStatistiche();