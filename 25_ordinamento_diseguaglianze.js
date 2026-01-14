/* FILE: 25_ordinamento_diseguaglianze.js
   LIVELLO: Algoritmo Tricky
   FONTE: Dispensa "5E ordinare le diseguaglianze.pdf" (Pagina 10)
   OBIETTIVO: Ordinare i numeri finché non rispettano i segni.
*/

let nums = [3, 8, 1, 5, 2];
let segni = ["<", ">", "<", ">"]; 

console.log("Inizio:", nums);

// Usiamo una variante del Bubble Sort.
// Ripetiamo il ciclo tante volte quanti sono gli elementi per sicurezza.
for (let k = 0; k < nums.length; k++) {
    
    // Scorre le coppie e i segni
    for (let i = 0; i < segni.length; i++) {
        let deveScambiare = false;

        // CASO 1: Segno < ma numero sinistro MAGGIORE
        if (segni[i] === "<" && nums[i] > nums[i+1]) {
            deveScambiare = true;
        }
        
        // CASO 2: Segno > ma numero sinistro MINORE
        if (segni[i] === ">" && nums[i] < nums[i+1]) {
            deveScambiare = true;
        }

        if (deveScambiare) {
            // Swap
            let temp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = temp;
        }
    }
}

console.log("Risultato:", nums); 
// Output atteso: [1, 8, 2, 5, 3] che rispetta < > < >