# 🚀 Progresso_JS_50: Da Zero a Hero in 50 Step

Questo repository contiene un percorso didattico completo di **50 campioni di codice JavaScript**, sviluppati in progressione di difficoltà.
Il progetto è stato creato per coprire interamente i concetti di programmazione strutturata, asincrona e di rete, basandosi rigorosamente sulle dispense scolastiche di riferimento.

---

## 📚 Fonti e Materiale Didattico

Il codice rispetta le specifiche tecniche e gli algoritmi descritti nei seguenti documenti:
1.  **guida_JS-1.pdf**: Sintassi base, cicli, funzioni e manipolazione DOM.
2.  **dispensa_teoria_JS.pdf**: Gestione asincrona (`setTimeout`, `Promise`, `async/await`).
3.  **5E ordinare le diseguaglianze.pdf**: Logica algoritmica avanzata (Ordinamento vincolato).
4.  **TPSIT_5_RESTful_API.pdf**: Integrazione di rete, Fetch API e architettura REST.

---

## 📂 Struttura del Progetto

I 50 file sono divisi in 5 livelli logici che guidano lo studente dai concetti base fino alla creazione di una mini-applicazione completa.

### 🟢 Livello 1: Le Fondamenta (Files 01-10)
*Concetti base: Variabili, Tipi di dati, Operatori, Cicli semplici.*

* `01_hello_world.js` - Output console e primi passi.
* `02_variabili_tipi.js` - Differenze tra `let`, `const`, `var`.
* `03_operatori_condizioni.js` - Logica condizionale `if/else`.
* `04_scambio_variabili.js` - **[DSA]** Algoritmo di Swap con variabile `temp`.
* `05_cicli_base.js` - Loop `for` e `while`.
* `06_array_base.js` - Creazione e accesso ai vettori.
* `07_array_loop.js` - Iterazione e somma elementi.
* `08_funzioni_standard.js` - Dichiarazione funzioni classiche.
* `09_funzioni_arrow.js` - Sintassi ES6 Arrow Functions.
* `10_oggetti_intro.js` - Strutture dati JSON semplici.

### 🔵 Livello 2: DOM & Primi Algoritmi (Files 11-20)
*Interazione con la pagina web e logica intermedia.*

* `11_media_voti_oggetto.js` - Calcoli matematici su oggetti complessi.
* `12_dom_manipolazione.js` - Modifica dinamica HTML (`innerText`, stili).
* `13_eventi_click.js` - Gestione Event Listener.
* `14_creazione_dinamica.js` - `createElement` e `appendChild`.
* `15_array_foreach.js` - Iterazione moderna funzionale.
* `16_somma_numeri.js` - Pattern accumulatore.
* `17_trova_max.js` - Ricerca del massimo in un array.
* `18_trova_min.js` - Ricerca del minimo.
* `19_distributore_resti.js` - **[Greedy]** Algoritmo per il calcolo delle monete di resto.
* `20_swap_array_helper.js` - Funzioni helper per manipolazione array.

### 🟠 Livello 3: Computer Science & Logica (Files 21-30)
*Algoritmi di ordinamento, ricerca e problemi "tricky".*

* `21_bubble_sort.js` - **[Sort]** Ordinamento a bolle (Stato dell'arte didattico).
* `22_ricerca_lineare.js` - Scansione sequenziale.
* `23_ricerca_binaria.js` - **[Search]** Ricerca logaritmica su array ordinati (O(log n)).
* `24_verifica_diseguaglianze.js` - Controllo vincoli `<` e `>`.
* `25_ordinamento_diseguaglianze.js` - **[Tricky]** Soluzione al problema PDF "5E" (Sort vincolato).
* `26_reverse_string_manuale.js` - Manipolazione stringhe senza metodi nativi.
* `27_palindroma.js` - Logica di verifica stringhe.
* `28_filtro_pari_dispari.js` - Separazione dati in array distinti.
* `29_fibonacci.js` - Generazione sequenze matematiche.
* `30_trasformazione_dati.js` - Mapping e pulizia dati (`.map`).

### 🟣 Livello 4: Asincronia e Simulazioni (Files 31-40)
*Gestione del tempo e delle attese (Fonte: Dispensa Teoria JS).*

* `31_timeout_base.js` - Introduzione al `setTimeout`.
* `32_promise_concetto.js` - Creazione e gestione `Promise`.
* `33_async_await_syntax.js` - Sintassi moderna asincrona.
* `34_simulazione_loading.js` - Esercizio "Caricamento Dati" (dal PDF).
* `35_conto_alla_rovescia.js` - Uso di `setInterval`.
* `36_try_catch_errori.js` - Gestione robusta degli errori.
* `37_fetch_simulata.js` - Mocking di chiamate API locali.
* `38_dom_async_update.js` - Aggiornamento UI dopo attesa.
* `39_promise_race.js` - Gestione timeout richieste.
* `40_promise_all_intro.js` - Parallelismo base.

### 🔴 Livello 5: API RESTful & Progetto Finale (Files 41-50)
*Networking reale e applicazione CRUD (Fonte: TPSIT RESTful API).*

* `41_fetch_get_simple.js` - Chiamata HTTP GET.
* `42_fetch_post_create.js` - Invio dati (POST).
* `43_fetch_put_update.js` - Modifica risorse (PUT).
* `44_fetch_delete.js` - Eliminazione risorse (DELETE).
* `45_render_lista_html.js` - Visualizzazione dinamica dati API.
* `46_fetch_dettaglio_onclick.js` - Navigazione Master-Detail.
* `47_fetch_comments.js` - API Nesting (Post -> Commenti).
* `48_gestione_crud_ui.js` - Struttura interfaccia gestionale.
* `49_fetch_parallela_async.js` - **[Advanced]** Fetch parallela Utenti/Post (Esercizio 9).
* `50_app_finale_completa.js` - **[BOSS]** Classe `SocialNetworkApp` completa.

---

## 🛠️ Come Eseguire il codice

### Prerequisiti
* **Node.js** installato (per eseguire i file da terminale).
* Un **Browser** (Chrome/Firefox) per i file che manipolano il DOM.

### Esecuzione
Apri il terminale nella cartella del progetto:

```bash
# Esempio: Eseguire il Bubble Sort
node 21_bubble_sort.js

# Esempio: Eseguire la simulazione API
node 49_fetch_parallela_async.js
