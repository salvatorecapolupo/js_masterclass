/* FILE: 16_somma_numeri.js
   LIVELLO: Algoritmo Base
   OBIETTIVO: Pattern "Accumulatore".
*/

const numeri = [10, 5, 2, 8, 7];
let totale = 0; // Accumulatore inizializzato a 0

console.log("Numeri:", numeri);

for (let n of numeri) {
    totale = totale + n;
    // Logica passo-passo
    // Passo 1: 0 + 10 = 10
    // Passo 2: 10 + 5 = 15... ecc
}

console.log("Totale somma:", totale);