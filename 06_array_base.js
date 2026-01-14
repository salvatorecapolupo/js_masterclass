/* FILE: 06_array_base.js
   LIVELLO: Principiante
   FONTE: dispensa_teoria_JS.pdf (Pagina 1)
   
   OBIETTIVO: Creare liste di dati.
*/

// Creazione array
let materie = ["Informatica", "Sistemi", "Matematica"];

console.log("Tutte le materie:", materie);

// Accesso agli elementi (l'indice parte da 0)
console.log("La prima materia è:", materie[0]); // Informatica
console.log("La terza materia è:", materie[2]); // Matematica

// Aggiungere elementi con PUSH
materie.push("Inglese");
console.log("Dopo push:", materie);

// Lunghezza array
console.log("Totale materie:", materie.length);