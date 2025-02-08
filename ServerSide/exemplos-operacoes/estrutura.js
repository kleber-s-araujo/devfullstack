// if_else_example.js

const temperature = 25;

if (temperature > 30) {
  console.log("Está muito quente lá fora!");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("O clima está agradável.");
} else {
  console.log("Está um pouco frio.");
}

// for_example.js

for (let i = 1; i <= 5; i++) {
    console.log(`Iteração ${i}`);
  }
  
// while_example.js

let count = 1;

while (count <= 5) {
  console.log(`Iteração ${count}`);
  count++;
}


// forEach_example.js

const numbers = [1, 2, 3, 4, 5];

console.log("Usando forEach para iterar sobre o array:");
numbers.forEach((number) => {
  console.log(number);
});


