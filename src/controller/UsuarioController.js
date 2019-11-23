const mongoose = require("mongoose");
const Usuario = mongoose.model('Usuario');
const bcrypt = require('bcryptjs');



module.exports = {   
    
    async criar(req,res){

        const usuario = req.body;              

        const usuarioExistente = await Usuario.findOne({
            email : usuario.email
        });          

        if (usuarioExistente) {
            return res.status(400).json({error: 'Já existe um usuário com esse e-mail'});
        }

        if (usuario.senha){
            usuario.hash_senha = await bcrypt.hash(usuario.senha, 8);
        }

       Usuario.create(usuario);
       delete usuario.senha;
       return res.json(usuario);
    },  

    async buscarTodos(req, res) {
        const usuarios = await Usuario.find({});
        return res.json(usuarios);
      },
};
