/* FILE: 02_variabili_tipi.js
   LIVELLO: Principiante
   FONTE: dispensa_teoria_JS.pdf (Pagina 1)
   
   OBIETTIVO: Capire la differenza tra let, const e i tipi di dati.
*/

// 'let' si usa per valori che possono cambiare nel tempo
let nomeUtente = "Mario";
let punteggio = 0;

console.log("Inizio:", nomeUtente, "Punti:", punteggio);

// Modifichiamo i valori
punteggio = 10;
console.log("Dopo il gioco:", nomeUtente, "Punti:", punteggio);

// 'const' si usa per valori che NON devono cambiare
const PIGRECO = 3.14;
const scuola = "ITIS Di Vittorio";

// scuola = "Liceo"; // <-- Questo genererebbe un ERRORE!

// Tipi di dati principali:
let stringa = "Testo";
let numero = 42;
let booleano = true; // o false

console.log("Tipo di 'numero':", typeof numero);