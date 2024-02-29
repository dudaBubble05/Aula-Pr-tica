const teclado = require (`prompt-sync`)();

let idade: number = 0;
let salario: number = 0;
let totPessNaCond: number = 0;
let nPess: number = 1;

while (nPess <= 3){

    idade = parseInt(teclado(`Digite a idade do funcionário ${nPess}: `));
    salario = parseFloat(teclado(`Digite o salário do funcionário ${nPess}: `));
    console.log(``);

    if (idade < 30 && salario > 3000){
        totPessNaCond++;
        nPess++;
    }
    else{
        nPess++;
    }
}

console.log (``);
console.log(`o total de pessoas que atende a contição ${totPessNaCond}`);


