/* FILE: 09_funzioni_arrow.js
   LIVELLO: Intermedio
   FONTE: guida_JS-1.pdf (Capitolo 2.2 - Funzioni anonime e arrow)
   
   OBIETTIVO: Sintassi moderna ES6, più concisa.
*/

// Funzione classica
function sommaClassica(a, b) {
    return a + b;
}

// Arrow Function (Funzione Freccia)
// Se c'è una sola istruzione, il return è implicito (senza graffe)
const sommaArrow = (a, b) => a + b;

console.log("Somma Classica:", sommaClassica(3, 4));
console.log("Somma Arrow:", sommaArrow(3, 4));

// Arrow function con corpo più complesso
const verificaPari = (n) => {
    if (n % 2 === 0) return "Pari";
    else return "Dispari";
};

console.log("7 è:", verificaPari(7));