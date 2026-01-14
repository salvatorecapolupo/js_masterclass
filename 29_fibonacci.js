/* FILE: 29_fibonacci.js
   LIVELLO: Algoritmo Matematico Famoso
   OBIETTIVO: Generare la sequenza dove ogni numero è somma dei due precedenti.
   Sequenza: 0, 1, 1, 2, 3, 5, 8, 13...
*/

const quantiNumeri = 10;
let serie = [0, 1]; // Primi due fissi

for (let i = 2; i < quantiNumeri; i++) {
    // Il nuovo numero è la somma del precedente (i-1) e del pre-precedente (i-2)
    let nuovoNumero = serie[i - 1] + serie[i - 2];
    serie.push(nuovoNumero);
}

console.log("Sequenza di Fibonacci:", serie);