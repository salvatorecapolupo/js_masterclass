/* FILE: 27_palindroma.js
   LIVELLO: Logica
   OBIETTIVO: Capire se una parola si legge uguale al contrario.
*/

function verificaPalindroma(testo) {
    // 1. Pulizia (tutto minuscolo)
    testo = testo.toLowerCase();
    
    // 2. Calcolo inversa (metodo rapido array)
    // split('') -> trasforma in array di lettere
    // reverse() -> inverte array
    // join('') -> riunisce in stringa
    let inversa = testo.split('').reverse().join('');
    
    return testo === inversa;
}

console.log("anna è palindroma?", verificaPalindroma("Anna")); // true
console.log("casa è palindroma?", verificaPalindroma("casa")); // false
console.log("i topi non avevano nipoti?", verificaPalindroma("itopinonavevanonipoti")); // true (senza spazi)