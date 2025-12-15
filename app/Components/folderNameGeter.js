const fs = require('fs');
const path = require('path');

// Caminho da pasta (pode alterar ou passar como argumento)
const dirPath = process.argv[2] || __dirname;

try {
  const files = fs.readdirSync(dirPath)
    .filter(file => fs.statSync(path.join(dirPath, file)).isFile()); // garante que são arquivos

  console.log(JSON.stringify(files, null, 2)); // imprime no formato de lista ['a', 'b', 'c']
} catch (err) {
  console.error('Erro ao listar arquivos:', err.message);
}
