/* FILE: 28_filtro_pari_dispari.js
   LIVELLO: Manipolazione Array
   OBIETTIVO: Separare numeri pari e dispari in due liste diverse.
*/

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pari = [];
const dispari = [];

for (let numero of input) {
    // L'operatore % (modulo) da il resto della divisione
    if (numero % 2 === 0) {
        pari.push(numero);
    } else {
        dispari.push(numero);
    }
}

console.log("Pari:", pari);
console.log("Dispari:", dispari);