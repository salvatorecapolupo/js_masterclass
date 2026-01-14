/* FILE: 30_trasformazione_dati.js
   LIVELLO: Preparazione API
   OBIETTIVO: Simulare la trasformazione di dati che arrivano dal server.
   Scenario: Abbiamo prezzi in dollari, vogliamo euro formattati.
*/

const prodottiUSA = [
    { nome: "Laptop", prezzoUSD: 1000 },
    { nome: "Mouse", prezzoUSD: 20 },
    { nome: "Monitor", prezzoUSD: 150 }
];

const tassoCambio = 0.92; // 1 USD = 0.92 EUR

// map crea un NUOVO array modificando ogni elemento
const prodottiEuropa = prodottiUSA.map(prodotto => {
    return {
        nome: prodotto.nome,
        prezzoEUR: (prodotto.prezzoUSD * tassoCambio).toFixed(2) + " €",
        originale: prodotto.prezzoUSD
    };
});

console.log("Catalogo Europeo:", prodottiEuropa);