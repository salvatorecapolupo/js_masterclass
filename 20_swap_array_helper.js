/* FILE: 20_swap_array_helper.js
   LIVELLO: DSA Helper
   OBIETTIVO: Creare una funzione riutilizzabile per lo scambio (per bubble sort).
*/

const carte = ["Asso", "Due", "Tre", "Re"];

// Funzione che scambia due elementi di un array dati i loro indici
function scambia(array, indiceA, indiceB) {
    console.log(`Scambio ${array[indiceA]} con ${array[indiceB]}...`);
    
    let temp = array[indiceA];
    array[indiceA] = array[indiceB];
    array[indiceB] = temp;
}

console.log("Mazzo originale:", carte);

// Scambiamo il primo ("Asso", indice 0) con l'ultimo ("Re", indice 3)
scambia(carte, 0, 3);

console.log("Mazzo dopo scambio:", carte);