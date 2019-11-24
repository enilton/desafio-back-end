const mongoose = require('mongoose');
const Usuario = require("./Usuario");

const TarefaSchema = new  mongoose.Schema ({ 
    
    nome: {
        type: String,
        required: true,
        select: true,
    },
    
    descricao:{
        type: String,
        required: true,
        select: true,
    },   

    dt:{
        type: Date,
        required: true,       
        select: true,
    },

    stConclusao:{
        type: Boolean,       
        select: true,
    },  
    
    stCancelamento:{
      type: Boolean,     
      select: true,
    },  

    usuario: {
        type: mongoose.Schema.ObjectId,
        ref: Usuario
    }
    
});

module.exports = mongoose.model("Tarefa",TarefaSchema);
