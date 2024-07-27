const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  imagem: { type: String, required: true },
  valor: { type: Number, required: true },
  valorAntigo: { type: Number }
});

module.exports = mongoose.model('Produto', produtoSchema);
