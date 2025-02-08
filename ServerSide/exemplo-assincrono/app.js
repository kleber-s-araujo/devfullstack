const fs = require('fs');

// Lê o arquivo de forma assíncrona
fs.readFile('exemplo.tx', 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }
  console.log('Conteúdo do arquivo:', data);
});

console.log('Lendo o arquivo...'); 