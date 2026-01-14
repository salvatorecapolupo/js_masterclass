/* FILE: 11_media_voti_oggetto.js
   LIVELLO: Intermedio
   FONTE: guida_JS-1.pdf (Capitolo 4.3)
   OBIETTIVO: Lavorare con oggetti complessi e calcoli matematici.
*/

const pagella = {
    nome: "Mario Rossi",
    voti: [6, 7.5, 8, 5, 9, 6.5]
};

console.log("Calcolo media per:", pagella.nome);

let somma = 0;
// Ciclo per sommare tutti i voti
for (let i = 0; i < pagella.voti.length; i++) {
    somma += pagella.voti[i];
}

const media = somma / pagella.voti.length;

// toFixed(2) arrotonda a 2 cifre decimali
console.log("Media calcolata:", media.toFixed(2));

if (media >= 6) {
    console.log("Esito: Promosso");
} else {
    console.log("Esito: Rimandato");
}