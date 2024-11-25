// [ Declaração de Variáveis no JavaScript ]
//Const = Constante -> Uma vez que é definido o valor, este valor é immutável
const a = 10;
// a = 20; -> Esse comando vai dar exception
console.log('Const a é igual a ' + a);

//Let e Var = Aí sim são variáveis normais, a grande diferença é o escopo de cada uma
//Let é utilizada em blocos de códigos, como uma variável local 
//Var tem sua sobrevida para além daquele bloco em que foi definido
{
    let b = 10;
    var c = 15;
}

console.log('O Valor da var c é igual a ' + c);
// console.log('O Valor da let b é igual a ' + b); -> Este comando vai dar exception pois a variável declarada com let só existe dentro daquele bloco 