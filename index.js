const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//DATABASE{
//DEV
const mongoDBURL = 'mongodb://usuarioapi:usuarioapi99@ds157857.mlab.com:57857/desafio-back-end-republica-interativa-dev';
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true});
//}

//MAIN APP{
  app.use(cors());
  app.use(express.json());
  app.use('/api', require('./src/routes'));
  
  
  var port = process.env.PORT || 3001;
  app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port: " + port);
  });
  //}