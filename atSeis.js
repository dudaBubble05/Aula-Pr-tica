var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var totPessNaCond = 0;
var nPess = 1;
while (nPess <= 3) {
    idade = parseInt(teclado("Digite a idade do funcion\u00E1rio ".concat(nPess, ": ")));
    salario = parseFloat(teclado("Digite o sal\u00E1rio do funcion\u00E1rio ".concat(nPess, ": ")));
    console.log("");
    if (idade < 30 && salario > 3000) {
        totPessNaCond++;
        nPess++;
    }
    else {
        nPess++;
    }
}
console.log("");
console.log("o total de pessoas que atende a conti\u00E7\u00E3o ".concat(totPessNaCond));
