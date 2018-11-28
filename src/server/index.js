const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

app.use(bodyParser.json());
const PORT = 3000;

app.disable('x-powered-by');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req,res) => {
  res.setHeader('Content-Type','text/html');
  res.status(200).sendFile(path.join(__dirname,"../../build/index.html"));
});

app.get('/bundle.js', (req,res) => {
  res.setHeader('Content-Type','text/javascript');
  res.status(200).sendFile(path.join(__dirname,"../../build/bundle.js"));
});

//login






app.listen('3000',()=>console.log('listening on port: '+ PORT));