/* FILE: 41_fetch_get_simple.js
   LIVELLO: API Network
   FONTE: TPSIT_5_RESTful_API (Esercizio 1)
   OBIETTIVO: Scaricare dati da un server (GET).
*/

const URL = "https://jsonplaceholder.typicode.com/posts/1";

console.log("Richiedo dati al server...");

fetch(URL)
    .then(response => {
        // Controlliamo se la risposta è OK (status 200-299)
        if (!response.ok) {
            throw new Error("Errore di rete: " + response.status);
        }
        return response.json(); // Trasformiamo lo stream di byte in Oggetto JSON
    })
    .then(post => {
        console.log("--- DATI RICEVUTI ---");
        console.log("Titolo:", post.title);
        console.log("ID:", post.id);
    })
    .catch(errore => {
        console.error("Qualcosa è andato storto:", errore);
    });