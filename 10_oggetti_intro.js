/* FILE: 10_oggetti_intro.js
   LIVELLO: Principiante
   FONTE: guida_JS-1.pdf (Capitolo 4 - JSON e Oggetti)
   
   OBIETTIVO: Rappresentare entità complesse con proprietà.
*/

// Un oggetto rappresenta una singola entità con più caratteristiche
const studente = {
    nome: "Giulia",
    cognome: "Bianchi",
    eta: 18,
    frequentante: true,
    indirizzo: {
        citta: "Roma",
        cap: "00100"
    }
};

// Accesso alle proprietà (Dot notation)
console.log("Studente:", studente.nome + " " + studente.cognome);
console.log("Città:", studente.indirizzo.citta);

// Modifica proprietà
studente.eta = 19;
console.log("Nuova età:", studente.eta);

// Aggiunta proprietà dinamica
studente.classe = "5E";
console.log(studente);