/* FILE: 19_distributore_resti.js
   LIVELLO: Algoritmo Intermedio (Greedy)
   OBIETTIVO: Calcolare le monete di resto (algoritmo "simpatico" richiesto).
*/

function dammiIlResto(centesimi) {
    // Tagli in centesimi (2€, 1€, 50c...)
    const moneteDisponibili = [200, 100, 50, 20, 10, 5, 2, 1];
    let resto = {};
    
    console.log(`Devo dare ${centesimi} centesimi di resto...`);

    for (let taglio of moneteDisponibili) {
        if (centesimi >= taglio) {
            // Quante monete di questo taglio ci stanno?
            let numeroMonete = Math.floor(centesimi / taglio);
            
            // Salvo nel risultato
            resto[taglio + "c"] = numeroMonete;
            
            // Sottraggo dal totale ancora da dare (operatore modulo o sottrazione)
            centesimi = centesimi % taglio;
        }
    }
    return resto;
}

// Test: resto di 3 euro e 87 centesimi
console.log(dammiIlResto(387));