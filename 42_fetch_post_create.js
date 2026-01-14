/* FILE: 42_fetch_post_create.js
   LIVELLO: API Network
   FONTE: TPSIT_5_RESTful_API (Esercizio 2 - Inserimento)
   OBIETTIVO: Inviare nuovi dati al server (POST).
*/

const endpoint = "https://jsonplaceholder.typicode.com/posts";

const nuovoArticolo = {
    title: "Imparare JavaScript nel 2025",
    body: "JS è diventato il linguaggio più importante del web...",
    userId: 101
};

async function inviaDati() {
    console.log("Invio dati in corso...");

    const risposta = await fetch(endpoint, {
        method: 'POST', // Importante: Specifichiamo il verbo HTTP
        body: JSON.stringify(nuovoArticolo), // Convertiamo l'oggetto JS in stringa
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    const datiConfermati = await risposta.json();
    
    // Il server di test risponde con l'oggetto creato e un ID assegnato (es. 101)
    console.log("Server ha risposto:", datiConfermati);
}

inviaDati();