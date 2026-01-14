/* FILE: 48_gestione_crud_ui.js
   LIVELLO: Struttura Applicativa
   FONTE: TPSIT_5_RESTful_API (Esercizio 10 - Parte 1)
   OBIETTIVO: Impostare le funzioni per i bottoni dell'interfaccia.
*/

// Questo file conterrebbe la logica di collegamento ai bottoni HTML
// <button onclick="leggi()">LEGGI</button>
// <button onclick="aggiungi()">AGGIUNGI</button> ...

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const app = {
    leggi: async () => {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log("READ: Dati letti", data.length);
    },
    
    aggiungi: async () => {
        const res = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify({title: 'Nuovo', userId: 1})
        });
        console.log("CREATE: Status", res.status);
    },
    
    elimina: async (id) => {
        const res = await fetch(API_URL + "/" + id, { method: 'DELETE' });
        console.log("DELETE: Status", res.status);
    }
};

// Test rapido
app.leggi();