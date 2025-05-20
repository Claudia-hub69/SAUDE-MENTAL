const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('API do Projeto Saúde Mental');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
