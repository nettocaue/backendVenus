const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');
const multer = require('multer');

// Configuração do Multer para upload de imagem
const upload = multer({ dest: 'uploads/' });

// Rota para obter todos os produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Rota para criar um novo produto
router.post('/', upload.single('imagem'), async (req, res) => {
  const { nome, valor, valorAntigo } = req.body;
  const imagem = req.file.filename;

  try {
    const novoProduto = await Produto.create({ nome, imagem, valor, valorAntigo });
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
