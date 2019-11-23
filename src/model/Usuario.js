const mongoose = require('mongoose');

const UsuarioSchema = new  mongoose.Schema ({

    nome: {
        type: String,
        required: true,
        select: true,
    },

    email: {
        type: String,
        required: true,
        select: true,
    },

    senha: {
        select: false,
    },

    hash_senha: {
        type: String,
        required: true,
        select: true,
    },

});

module.exports = mongoose.model('Usuario',UsuarioSchema);