/*nome: Maria Eduarda Freitas*/

const teclado = require (`prompt-sync`)();

let nUm: number = parseFloat (teclado(`Digite o primeiro numero`));
let nDois: number = parseFloat (teclado(`Digite o segundo numero`));
let nTres: number = parseFloat (teclado(`Digite o terceiro numero`));
let nQuatro: number = parseFloat (teclado(`Digite o quarto numero`));
let nCinco: number = parseFloat (teclado(`Digite o quinto numero`));
let nSeis: number = parseFloat (teclado(`Digite o sexto numero`));
let nSete: number = parseFloat (teclado(`Digite o setímo numero`));
let nOito: number = parseFloat (teclado(`Digite o oitavo numero`));
let nNove: number = parseFloat (teclado(`Digite o nono numero`));
let nDez: number = parseFloat (teclado(`Digite o decímo numero`));

let media: number = (nUm+nDois+nTres+nQuatro+nCinco+nSeis+nSete+nOito+nNove+nDez)/10;

console.log(`Média é ${media}`);


