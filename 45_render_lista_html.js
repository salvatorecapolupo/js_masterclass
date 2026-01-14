/* FILE: 45_render_lista_html.js
   LIVELLO: Web + API Integration
   FONTE: TPSIT_5_RESTful_API (Esercizio 7 - Parte 1)
   OBIETTIVO: Scaricare una lista e mostrarla in HTML (simulato).
   
   HTML Richiesto: <ul id="lista-post"></ul>
*/

async function caricaLista() {
    // 1. Scarica array di post (ne prendiamo solo 5 per brevità con slice)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    const primi5 = posts.slice(0, 5);

    // 2. Simulazione DOM (se siamo nel browser)
    if (typeof document !== 'undefined') {
        const ul = document.getElementById("lista-post");
        ul.innerHTML = ""; // Pulisce lista

        primi5.forEach(post => {
            const li = document.createElement("li");
            li.innerText = post.title;
            li.style.cursor = "pointer";
            
            // Aggiungiamo un attributo dati per uso futuro
            li.dataset.id = post.id; 
            
            ul.appendChild(li);
        });
        console.log("Lista renderizzata nel browser.");
    } else {
        console.log("--- Lista Post Scaricata ---");
        primi5.forEach(p => console.log("- " + p.title));
    }
}

caricaLista();