/* FILE: 18_trova_min.js
   LIVELLO: Algoritmo Base
   OBIETTIVO: Duale del trova_max.
*/

const temperature = [10, -2, 5, 0, -5, 12];
let minProvvisorio = temperature[0];

for (let temp of temperature) {
    if (temp < minProvvisorio) {
        minProvvisorio = temp;
    }
}

console.log("Temperatura minima registrata:", minProvvisorio);