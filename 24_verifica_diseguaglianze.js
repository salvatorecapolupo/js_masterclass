/* FILE: 24_verifica_diseguaglianze.js
   LIVELLO: Logica (Preparazione al PDF 5E)
   OBIETTIVO: Verificare se una sequenza rispetta i segni < e >.
*/

const numeri = [1, 8, 2, 5, 3];
const segni = ["<", ">", "<", ">"]; 
// Verifica: 1 < 8 (OK), 8 > 2 (OK), 2 < 5 (OK), 5 > 3 (OK)

let tuttoCorretto = true;

for (let i = 0; i < segni.length; i++) {
    let segno = segni[i];
    let a = numeri[i];
    let b = numeri[i+1];

    if (segno === "<") {
        if (!(a < b)) { // Se a NON è minore di b
            console.log(`Errore all'indice ${i}: ${a} non è minore di ${b}`);
            tuttoCorretto = false;
        }
    } else if (segno === ">") {
        if (!(a > b)) {
            console.log(`Errore all'indice ${i}: ${a} non è maggiore di ${b}`);
            tuttoCorretto = false;
        }
    }
}

if (tuttoCorretto) console.log("La sequenza rispetta perfettamente i segni!");
else console.log("La sequenza contiene errori.");