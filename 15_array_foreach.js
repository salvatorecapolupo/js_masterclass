/* FILE: 15_array_foreach.js
   LIVELLO: Intermedio
   FONTE: guida_JS-1.pdf (Iterazione moderna)
   OBIETTIVO: Usare forEach al posto del ciclo for classico.
*/

const prezzi = [10, 20, 50, 5];

console.log("--- Listino Prezzi ---");

// forEach accetta una funzione che viene eseguita PER OGNI elemento
prezzi.forEach((prezzo, indice) => {
    // Calcoliamo l'IVA al volo
    let conIva = prezzo * 1.22;
    console.log(`Prodotto ${indice + 1}: € ${prezzo} (con IVA: € ${conIva.toFixed(2)})`);
});

// È più pulito e leggibile del for(let i=0; i<...)