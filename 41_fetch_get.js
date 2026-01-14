/* LIVELLO 4: FETCH GET SEMPLICE
   OBIETTIVO: Scaricare dati reali da un'API pubblica.
   FONTE: Esercizio 1 (TPSIT)
*/

// Usiamo JSONPlaceholder come indicato nelle dispense
const URL = "https://jsonplaceholder.typicode.com/posts/1";

fetch(URL)
    .then(response => response.json()) // Trasforma la risposta grezza in JSON
    .then(data => {
        console.log("Titolo del post:", data.title);
        console.log("Contenuto:", data.body);
    })
    .catch(error => console.error("Errore fetch:", error));