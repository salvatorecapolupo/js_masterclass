/* FILE: 44_fetch_delete.js
   LIVELLO: API Network
   FONTE: TPSIT_5_RESTful_API (Esercizio 6 - Eliminazione)
   OBIETTIVO: Cancellare una risorsa (DELETE).
*/

const idDaCancellare = 5;

async function eliminaPost() {
    console.log(`Tento di eliminare il post ${idDaCancellare}...`);

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${idDaCancellare}`, {
        method: 'DELETE'
    });

    console.log("Stato risposta:", res.status); // 200 = OK

    if (res.ok) {
        console.log("Eliminazione avvenuta con successo (simulata).");
    }
}

eliminaPost();