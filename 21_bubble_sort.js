/* FILE: 21_bubble_sort.js
   LIVELLO: Algoritmo Classico
   OBIETTIVO: Ordinare un array dal più piccolo al più grande.
   LOGICA: "Le bolle più leggere (numeri piccoli) salgono in cima".
*/

let numeri = [23, 1, 45, 2, 8];
console.log("Disordinato:", numeri);

let scambiato;
let passi = 0;

// Ripeti finché non ci sono più scambi da fare
do {
    scambiato = false;
    // Ciclo interno: scorre l'array
    for (let i = 0; i < numeri.length - 1; i++) {
        // Se il numero attuale è MAGGIORE del successivo
        if (numeri[i] > numeri[i + 1]) {
            // SCAMBIO (Swap)
            let temp = numeri[i];
            numeri[i] = numeri[i + 1];
            numeri[i + 1] = temp;
            
            scambiato = true; // Segnaliamo che abbiamo fatto un movimento
        }
    }
    passi++;
} while (scambiato);

console.log("Ordinato:", numeri);
console.log("Passaggi effettuati:", passi);