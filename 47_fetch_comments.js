/* FILE: 47_fetch_comments.js
   LIVELLO: API Nesting
   FONTE: TPSIT_5_RESTful_API (Esercizio 8)
   OBIETTIVO: Scaricare i commenti RELATIVI a un post specifico.
*/

const postId = 1;
const urlCommenti = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

fetch(urlCommenti)
    .then(r => r.json())
    .then(commenti => {
        console.log(`Trovati ${commenti.length} commenti per il post ${postId}.`);
        
        // Esempio: stampiamo le email di chi ha commentato
        commenti.forEach(c => {
            console.log(`📩 ${c.email}: ${c.name}`);
        });
    })
    .catch(err => console.error(err));