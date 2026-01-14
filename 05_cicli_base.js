/* FILE: 05_cicli_base.js
   LIVELLO: Principiante
   FONTE: guida_JS-1.pdf (Capitolo 1.4)
   
   OBIETTIVO: Ripetere operazioni con il ciclo FOR e WHILE.
*/

console.log("--- Ciclo FOR (contiamo fino a 5) ---");
// Struttura: (inizio; condizione; incremento)
for (let i = 1; i <= 5; i++) {
    console.log("Contatore:", i);
}

console.log("--- Ciclo WHILE (finché la condizione è vera) ---");
let batteria = 3;
while (batteria > 0) {
    console.log("Batteria al " + batteria + "% - Uso il telefono...");
    batteria--; // Decrementa di 1
}
console.log("Telefono spento.");