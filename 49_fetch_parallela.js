/* LIVELLO 4: FETCH PARALLELA (Esercizio 9)
   OBIETTIVO: Richiesta esplicita "Gestione asincrona avanzata".
   LOGICA: Scaricare Utenti e Post contemporaneamente per velocità.
*/

async function dashboardDati() {
    console.time("Tempo impiegato"); // Avvia cronometro

    // Lanciamo le due promesse INSIEME
    const p1 = fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());
    const p2 = fetch('https://jsonplaceholder.typicode.com/posts').then(r => r.json());

    // Promise.all aspetta che ENTRAMBE siano finite
    const [utenti, posts] = await Promise.all([p1, p2]);

    console.log(`Ho scaricato ${utenti.length} utenti e ${posts.length} post.`);
    console.timeEnd("Tempo impiegato"); // Ferma cronometro
}

dashboardDati();