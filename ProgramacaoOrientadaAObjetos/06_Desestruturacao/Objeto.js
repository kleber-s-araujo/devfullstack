let pessoa = {nome: "Kleber Araujo", idade: 31};
let {idade: aIdade, nome, peso: oPeso=90} = pessoa;

console.log("O nome é: "  + nome)
console.log("A idade é: " + aIdade)
console.log("O peso é: "  + oPeso)