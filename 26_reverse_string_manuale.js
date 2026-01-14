/* FILE: 26_reverse_string_manuale.js
   LIVELLO: Logica (Manipolazione Stringhe)
   OBIETTIVO: Invertire una parola SENZA usare .reverse().
*/

let parola = "AMBULANZA";
let parolaInversa = "";

// Ciclo che parte dall'ultima lettera e va indietro fino alla prima
for (let i = parola.length - 1; i >= 0; i--) {
    parolaInversa += parola[i];
}

console.log("Originale:", parola);
console.log("Inversa:", parolaInversa);