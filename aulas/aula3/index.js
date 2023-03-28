// run: node index.js

function doSomething(value) {
    if (value == 0)
    return 0;
    else
    return value+doSomething(value-1);
}

console.log(doSomething(3));

///

function testeProva(valor) {
if (((valor>15)&&(valor<18))||(valor>20)) {
    console.log('trecho executado' + valor);
}
}

testeProva(18);
testeProva(19);
testeProva(20);
testeProva(21);
