// calculos.mjs

// Função de soma
export const add = (a, b) => {
    return a + b;
  };
  
  // Função de subtração
  export const subtract = (a, b) => {
    return a - b;
  };
  
  // Função de multiplicação
  export const multiply = (a, b) => {
    return a * b;
  };
  
  // Função de divisão
  export const divide = (a, b) => {
    if (b === 0) {
      throw new Error("Não é possível dividir por zero.");
    }
    return a / b;
  };

  // Função para calcular as raízes da equação quadrática usando a fórmula de Bhaskara
export const bhaskara = (a, b, c) => {
    const delta = b ** 2 - 4 * a * c;
  
    if (delta < 0) {
      return "A equação não possui raízes reais.";
    } else if (delta === 0) {
      const root = -b / (2 * a);
      return `A equação possui uma raiz real: ${root}`;
    } else {
      const root1 = (-b + Math.sqrt(delta)) / (2 * a);
      const root2 = (-b - Math.sqrt(delta)) / (2 * a);
      return `A equação possui duas raízes reais: ${root1} e ${root2}`;
    }
  };
  