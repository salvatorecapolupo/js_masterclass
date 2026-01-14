/* FILE: 12_dom_manipolazione.js
   LIVELLO: Web Base
   FONTE: guida_JS-1.pdf (Capitolo 3.1)
   OBIETTIVO: Modificare l'HTML tramite JS.
   
   NOTA: Questo codice va eseguito collegato a una pagina HTML.
   Esempio HTML: <h1 id="titolo">Vecchio Titolo</h1>
*/

// Simuliamo l'ambiente browser se eseguiamo con Node (solo per evitare crash)
if (typeof document !== 'undefined') {

    // 1. Selezionare un elemento
    const titolo = document.getElementById("titolo");

    // 2. Leggere il contenuto
    console.log("Testo attuale:", titolo.innerText);

    // 3. Modificare il contenuto
    titolo.innerText = "Nuovo Titolo Inserito da JS!";
    
    // 4. Modificare lo stile
    titolo.style.color = "red";
    titolo.style.fontSize = "30px";

} else {
    console.log("Questo file deve essere collegato a un file .html per funzionare realmente.");
}