const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const http = require('http');



const app = express();


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public/')));



const PORT = 8080;
const server = http.createServer(app);
server.listen(PORT, () => console.log(`listening on port ${PORT}...`));

module.exports = app