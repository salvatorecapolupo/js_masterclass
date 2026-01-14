/* LIVELLO 3: TIMEOUT BASE
   OBIETTIVO: Capire che il codice non viene eseguito tutto subito.
*/

console.log("1. Inizio operazione");

// setTimeout accetta una funzione e un tempo in millisecondi
setTimeout(() => {
    console.log("2. Messaggio apparso dopo 2 secondi!");
}, 2000);

console.log("3. Fine script (ma il timeout arriverà dopo!)");