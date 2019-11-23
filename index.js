const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require("require-dir");
const dataBaseInfo = require('./src/config/database');

const app = express();
requireDir("./src/model");


//DATABASE{
mongoose.connect(dataBaseInfo.mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true});
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