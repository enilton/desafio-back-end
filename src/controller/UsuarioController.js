const mongoose = require("mongoose");

module.exports = {   
    
    async criar(req,res){
        let usuario = req.body; 
       usuario = await Usuario.create(usuario);           
       return res.json(usuario);    
    },

  
};
