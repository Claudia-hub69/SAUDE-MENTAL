const express = require('express');
const router = express.Router();

router.get('/usuarios', (req, res) => {
  res.send('Lista de usuários');
});

module.exports = router;
