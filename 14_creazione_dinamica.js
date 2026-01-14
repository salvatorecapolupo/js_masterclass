/* FILE: 14_creazione_dinamica.js
   LIVELLO: Web Intermedio
   FONTE: guida_JS-1.pdf (Capitolo 3.2)
   OBIETTIVO: Creare elementi HTML che non esistevano.
   
   HTML: <ul id="lista"></ul>
*/

if (typeof document !== 'undefined') {
    const lista = document.getElementById("lista");
    const coseDaFare = ["Studiare JS", "Fare la spesa", "Allenarsi"];

    // Per ogni elemento dell'array...
    coseDaFare.forEach(impegno => {
        // 1. Creiamo un nuovo tag <li>
        const nuovoElemento = document.createElement("li");
        
        // 2. Riempiamo il testo
        nuovoElemento.innerText = impegno;
        
        // 3. "Appendiamo" (attacchiamo) l'elemento alla lista genitore
        lista.appendChild(nuovoElemento);
    });
} else {
    console.log("Richiede browser.");
}