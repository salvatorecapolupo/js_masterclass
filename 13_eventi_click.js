/* FILE: 13_eventi_click.js
   LIVELLO: Web Base
   FONTE: dispensa_teoria_JS.pdf (Pagina 4 - Event Listener)
   OBIETTIVO: Reagire alle azioni dell'utente.
   
   HTML necessario: <button id="btn">Cliccami</button>
*/

if (typeof document !== 'undefined') {
    const bottone = document.getElementById("btn");

    // Aggiungiamo un "ascoltatore" (listener) per l'evento 'click'
    bottone.addEventListener("click", function() {
        alert("Hai cliccato il bottone!");
        console.log("Click rilevato.");
    });
    
    // Versione con Arrow Function (più moderna)
    // bottone.addEventListener("click", () => console.log("Click!"));
} else {
    console.log("Esegui questo codice dentro un browser.");
}