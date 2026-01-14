/* FILE: 08_funzioni_standard.js
   LIVELLO: Principiante
   FONTE: guida_JS-1.pdf (Capitolo 2.1)
   
   OBIETTIVO: Incapsulare logica riutilizzabile.
*/

// Definizione della funzione
function saluta(nome, orario) {
    if (orario < 12) {
        return "Buongiorno " + nome;
    } else {
        return "Buonasera " + nome;
    }
}

// Utilizzo (Chiamata) della funzione
let messaggio1 = saluta("Luca", 10);
let messaggio2 = saluta("Anna", 18);

console.log(messaggio1);
console.log(messaggio2);

// Funzione matematica semplice
function quadrato(n) {
    return n * n;
}
console.log("Il quadrato di 5 è:", quadrato(5));