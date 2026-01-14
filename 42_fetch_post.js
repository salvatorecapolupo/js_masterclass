/* LIVELLO 4: FETCH POST
   OBIETTIVO: Inviare dati al server (simulazione creazione post).
   FONTE: Esercizio 2 (TPSIT)
*/

const nuovoPost = {
    title: 'Lezione JavaScript',
    body: 'Stiamo imparando le chiamate API.',
    userId: 1
};

async function pubblicaPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // Specifica che stiamo INVIANDO dati
        body: JSON.stringify(nuovoPost), // Convertiamo l'oggetto JS in stringa JSON
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const dati = await response.json();
    console.log("Risposta del server (confermato):", dati);
}

pubblicaPost();