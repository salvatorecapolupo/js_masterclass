/* FILE: 50_app_finale_completa.js
   LIVELLO: PROGETTO FINALE (BOSS)
   FONTE: Sintesi di tutti i PDF
   OBIETTIVO: Una Classe JavaScript che gestisce un mini-social network.
*/

class SocialNetworkApp {
    constructor(apiUrl) {
        this.api = apiUrl;
        this.cache = []; // Variabile per salvare i dati localmente
    }

    // Inizializzazione
    async init() {
        console.log("🚀 App avviata.");
        await this.refreshData();
    }

    // Scarica e aggiorna cache
    async refreshData() {
        try {
            console.log("Aggiornamento dati...");
            const response = await fetch(this.api);
            this.cache = await response.json();
            console.log(`Dati aggiornati: ${this.cache.length} post in memoria.`);
            this.stampaTitoliRecenti();
        } catch (error) {
            console.error("Errore init:", error);
        }
    }

    // Logica di visualizzazione (Algoritmo di filtro semplice)
    stampaTitoliRecenti() {
        console.log("--- ULTIMI 3 POST ---");
        // Usiamo slice (Array base) e map (Array funzionale)
        this.cache.slice(0, 3).forEach((post, i) => {
            console.log(`#${i+1} [${post.id}]: ${post.title.substring(0, 20)}...`);
        });
    }

    // Funzione di ricerca (Algoritmo lineare su array)
    cercaPostPerParolaChiave(keyword) {
        console.log(`\n🔍 Cerco post contenenti: "${keyword}"`);
        const risultati = this.cache.filter(post => post.title.includes(keyword));
        
        if (risultati.length > 0) {
            console.log(`Trovati ${risultati.length} risultati.`);
        } else {
            console.log("Nessun post trovato.");
        }
    }
}

// ESECUZIONE
const myApp = new SocialNetworkApp('https://jsonplaceholder.typicode.com/posts');

// Usiamo una IIFE async per avviare
(async () => {
    await myApp.init();
    myApp.cercaPostPerParolaChiave("qui"); // "qui" è parte di 'quia', parola latina comune in lorem ipsum
})();