// second.js

// Node packages
const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const express = require('express');
 
// Server constants
const hostname = '127.0.0.1';
const port = 3000;

// html file to serve
var upload_html = fs.readFileSync("/Users/colehlava/Documents/Code/WebRTC/NodeJS_Examples/second.html");

// @TODO: set path to scripts???
//var app = express();
//app.use(express.static(__dirname + '/public'));

// Create server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(upload_html);
    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

