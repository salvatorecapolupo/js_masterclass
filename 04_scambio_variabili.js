/* FILE: 04_scambio_variabili.js
   LIVELLO: DSA Base (Richiesta Utente)
   
   OBIETTIVO: Scambiare il contenuto di due variabili usando una variabile d'appoggio.
   È la base per algoritmi di ordinamento come il Bubble Sort.
*/

let bicchiereA = "Acqua";
let bicchiereB = "Vino";

console.log("PRIMA DELLO SCAMBIO:");
console.log("A:", bicchiereA);
console.log("B:", bicchiereB);

// ALGORITMO DI SWAP
// 1. Salviamo il contenuto di A in una variabile temporanea (temp)
let temp = bicchiereA;

// 2. Mettiamo il contenuto di B dentro A (ora A vale "Vino")
bicchiereA = bicchiereB;

// 3. Mettiamo il contenuto della temp (che era "Acqua") dentro B
bicchiereB = temp;

console.log("--- SWAP ---");
console.log("DOPO LO SCAMBIO:");
console.log("A:", bicchiereA); // Ora è Vino
console.log("B:", bicchiereB); // Ora è Acqua