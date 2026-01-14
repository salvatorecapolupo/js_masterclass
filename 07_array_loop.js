/* FILE: 07_array_loop.js
   LIVELLO: Principiante
   FONTE: guida_JS-1.pdf (Iterazione Array)
   
   OBIETTIVO: Scorrere un array per elaborare ogni elemento.
*/

let voti = [4, 6, 8, 5, 7, 9];
let somma = 0;

console.log("Elenco voti:");

for (let i = 0; i < voti.length; i++) {
    // Stampiamo il voto corrente
    console.log("- Voto " + (i+1) + ": " + voti[i]);
    
    // Accumuliamo per la somma
    somma = somma + voti[i];
}

console.log("Somma totale:", somma);
console.log("Media:", somma / voti.length);