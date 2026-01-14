/* FILE: 22_ricerca_lineare.js
   LIVELLO: Algoritmo Base
   OBIETTIVO: Trovare un elemento scorrendo tutto (metodo "forza bruta").
*/

const studenti = ["Mario", "Luigi", "Anna", "Paola"];
const cercato = "Anna";
let trovato = false;
let posizione = -1;

for (let i = 0; i < studenti.length; i++) {
    console.log(`Controllo indice ${i}: ${studenti[i]}...`);
    
    if (studenti[i] === cercato) {
        trovato = true;
        posizione = i;
        break; // Interrompe il ciclo appena lo trova (ottimizzazione)
    }
}

if (trovato) {
    console.log(`Trovato '${cercato}' alla posizione ${posizione}!`);
} else {
    console.log("Elemento non presente.");
}