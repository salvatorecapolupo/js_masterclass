/* FILE: 46_fetch_dettaglio_onclick.js
   LIVELLO: Web + API
   FONTE: TPSIT_5_RESTful_API (Esercizio 7 - Parte 2)
   OBIETTIVO: Cliccare su un post e caricare i suoi dettagli.
*/

// Funzione che verrebbe chiamata al click di un elemento della lista precedente
async function mostraDettaglio(id) {
    console.log("Caricamento dettaglio ID:", id);
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    if (typeof document !== 'undefined') {
        const divDettaglio = document.getElementById("dettaglio");
        divDettaglio.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
    } else {
        console.log("DETTAGLIO:", post.body);
    }
}

// Simuliamo un click sull'ID 3
mostraDettaglio(3);