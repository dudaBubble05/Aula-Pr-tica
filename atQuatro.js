/*nome: Maria Eduarda Freitas*/
var teclado = require("prompt-sync")();
var fahrenheit = parseFloat(require("Digite a temperatura em \u00B0F: "));
var celsius = (5 / 9) * (fahrenheit - 32);
console.log("O valor da convers\u00E3o \u00E9: ".concat(celsius));
