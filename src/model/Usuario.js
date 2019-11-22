const mongoose = require('mongoose');

const UsuarioSchema = new  mongoose.Schema ({

    nome: {
        type: String,
        required: true,
        select: true,
    }
    
});

module.exports = mongoose.model('Usuario',UsuarioSchema);