/* FILE: 03_operatori_condizioni.js
   LIVELLO: Principiante
   FONTE: guida_JS-1.pdf (Capitolo 1.3)
   
   OBIETTIVO: Prendere decisioni con IF ed ELSE.
*/

let voto = 7;

console.log("Il voto è:", voto);

// Condizione semplice
if (voto >= 6) {
    console.log("Esito: Promosso!");
} else {
    console.log("Esito: Bocciato.");
}

// Operatori di confronto:
// ==  (confronta solo il valore)
// === (confronta valore E tipo, consigliato!)
// !=  (diverso)

let numeroSegreto = "5";

if (numeroSegreto === 5) {
    console.log("Uguale identico (numero)");
} else if (numeroSegreto == 5) {
    console.log("Uguale nel valore (ma è una stringa!)");
}