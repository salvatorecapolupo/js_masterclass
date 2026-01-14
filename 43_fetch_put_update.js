/* FILE: 43_fetch_put_update.js
   LIVELLO: API Network
   FONTE: TPSIT_5_RESTful_API (Esercizio 5 - Aggiornamento)
   OBIETTIVO: Modificare una risorsa esistente (PUT).
*/

// Vogliamo modificare il post con ID 1
const urlModifica = "https://jsonplaceholder.typicode.com/posts/1";

const datiAggiornati = {
    id: 1,
    title: "TITOLO AGGIORNATO DAL CLIENT",
    body: "Contenuto sovrascritto.",
    userId: 1
};

fetch(urlModifica, {
    method: 'PUT', // PUT sovrascrive tutto l'oggetto
    body: JSON.stringify(datiAggiornati),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
})
.then(res => res.json())
.then(data => console.log("Oggetto aggiornato:", data));