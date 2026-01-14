/* FILE: 01_hello_world.js
   LIVELLO: Principiante
   FONTE: guida_JS-1.pdf (Capitolo 1.1)
   
   OBIETTIVO: Il primo contatto con il linguaggio.
   La console è lo strumento principale per il debug.
*/

// Stampa un messaggio nella console del browser o del terminale
console.log("Ciao Mondo! Benvenuto nel corso JavaScript.");

// Esempio di operazione matematica diretta
console.log("Il risultato di 5 + 5 è:", 5 + 5);

//casi decisamente più tricky
console.log("1. Stringa + Numero (Concatenazione):", "5" + 5);      // "55"
console.log("2. Numero + Stringa (Concatenazione):", 5 + "5");      // "55"
console.log("3. Associatività SX->DX (Somma poi Stringa):", 5 + 5 + "5");  // "105"
console.log("4. Associatività SX->DX (Stringa 'infetta' tutto):", "5" + 5 + 5);  // "555"
console.log("5. Sottrazione (Forza la matematica):", "5" - 5);      // 0
console.log("6. Unario + (Converte stringa in numero):", +"5" + 5); // 10
console.log("7. Booleano true (Vale 1):", true + 5);                // 6
console.log("8. Null (Vale 0):", null + 5);                         // 5
console.log("9. Undefined (Non è un numero):", undefined + 5);      // NaN
console.log("10. Array vuoto (Diventa stringa vuota):", [] + 5);    // "5"

/* NOTA:
   Se esegui questo file con Node.js (da terminale), vedrai il testo.
   In un browser, useresti anche alert("Ciao");
*/
