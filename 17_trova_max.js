/* FILE: 17_trova_max.js
   LIVELLO: Algoritmo Base
   OBIETTIVO: Trovare il valore massimo senza usare Math.max.
*/

const valori = [12, 45, 7, 88, 23, 88];
// Assumiamo che il primo sia il massimo provvisorio
let maxProvvisorio = valori[0];

console.log("Cerco il massimo in:", valori);

for (let i = 1; i < valori.length; i++) {
    // Se trovo un numero più grande del mio max attuale...
    if (valori[i] > maxProvvisorio) {
        // ...aggiorno il campione!
        maxProvvisorio = valori[i];
    }
}

console.log("Il numero più grande è:", maxProvvisorio);