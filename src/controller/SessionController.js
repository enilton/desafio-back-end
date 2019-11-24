const jwt = require('jsonwebtoken') ;
const bcrypt = require('bcryptjs');

const Usuario = require('../model/Usuario');
const authConfig = require('../config/auth');


module.exports = {   

  async criar(req,res) {

    const { email, senha } = req.body;    

    const usuario = await Usuario.findOne({
        email : email
    });

    if (!usuario) {
      return res.status(401).json({ error: 'usuário não existe '});
    }

    await bcrypt.compare(senha, usuario.hash_senha)
      .then(() => {         
        delete usuario.hash_senha;
         return res.json({
          usuario,            
          token: jwt.sign({id : usuario.id} , authConfig.secret, {
            expiresIn: authConfig.expiresIn,
          })
        })
      }).catch( error => {
        return res.status(401).json({ error: 'senha incorreta '});
      })  
  },

  

};

