// function_example.js

// Função simples que retorna a soma de dois números
function soma(a, b) {
    return a + b;
}

// array_example.js
function arrayExample() {
    // Criando um array de números
    const numeros = [1, 2, 3, 4, 5];

    // Acessando elementos do array
    console.log("Primeiro elemento:", numeros[0]);
    console.log("Tamanho do array:", numeros.length);

    // Iterando sobre o array com for
    console.log("Iterando sobre o array com for:");
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }

    // Adicionando um elemento ao final do array
    numeros.push(6);
    console.log("Array após adicionar 6:", numeros);

    // Removendo o último elemento do array
    numeros.pop();
    console.log("Array após remover o último elemento:", numeros);
}
// object_example.js

function objectExample() {


    // Criando um objeto pessoa
    const pessoa = {
        nome: "João",
        idade: 25,
        cidade: "São Paulo",
    };

    // Acessando propriedades do objeto
    console.log("Nome:", pessoa.nome);
    console.log("Idade:", pessoa.idade);
    console.log("Cidade:", pessoa.cidade);

    // Modificando uma propriedade do objeto
    pessoa.idade = 26;
    console.log("Idade após modificar:", pessoa.idade);

    // Adicionando uma nova propriedade ao objeto
    pessoa.profissao = "Desenvolvedor";
    console.log("Objeto após adicionar profissão:", pessoa);

    // Deletando uma propriedade do objeto
    delete pessoa.cidade;
    console.log("Objeto após deletar cidade:", pessoa);
}

// Chamando aa funções

console.log("Resultado da soma:", soma(5, 3));
arrayExample();
objectExample();
