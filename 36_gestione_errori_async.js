/* LIVELLO 3: TRY / CATCH
   OBIETTIVO: Gestire errori quando le cose vanno male (es. server down).
*/

async function connessioneRischiosa() {
    try {
        console.log("Tento la connessione...");
        
        // Simuliamo un lancio di moneta: 50% successo, 50% errore
        let successo = Math.random() > 0.5;
        
        if (!successo) {
            throw new Error("Server non raggiungibile!");
        }

        console.log("Connessione riuscita!");
        
    } catch (errore) {
        // Qui catturiamo l'errore senza far crashare tutto il programma
        console.error("ERRORE RILEVATO:", errore.message);
    } finally {
        console.log("Operazione conclusa (indipendentemente dall'esito).");
    }
}

connessioneRischiosa();