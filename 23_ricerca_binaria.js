/* FILE: 23_ricerca_binaria.js
   LIVELLO: Algoritmo Avanzato (Stato dell'arte)
   OBIETTIVO: Trovare un dato istantaneamente dimezzando l'area di ricerca.
   REQUISITO: L'array DEVE essere già ordinato.
*/

const numeriOrdinati = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 56;

console.log("Cerco il numero:", target);

let inizio = 0;
let fine = numeriOrdinati.length - 1;
let trovatoIndex = -1;

while (inizio <= fine) {
    // Calcola il punto medio (Math.floor toglie la virgola)
    let medio = Math.floor((inizio + fine) / 2);
    let valoreMedio = numeriOrdinati[medio];

    console.log(`Controllo tra indice ${inizio} e ${fine}. Medio(${medio}) vale ${valoreMedio}`);

    if (valoreMedio === target) {
        trovatoIndex = medio;
        break; // Trovato!
    }

    if (valoreMedio < target) {
        // Se il valore al centro è troppo piccolo, cerco a DESTRA
        inizio = medio + 1;
    } else {
        // Se il valore al centro è troppo grande, cerco a SINISTRA
        fine = medio - 1;
    }
}

console.log("Trovato all'indice:", trovatoIndex);