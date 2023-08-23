const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./config/connectDB');
connectDB(); //database connection
const swaggerUi = require("swagger-ui-express");
const {apiDocumentation} = require("./docs/apidoc");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocumentation));

//set the template engine
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false })); //for form data
app.use(bodyParser.json()); //forvparsing json data

//routes
app.use('/', require('./routes/todoRoutes'));


mongoose.connection.once('open', () => {
console.log('Database connection successful !');
        app.listen(PORT, () => {
          console.log(`Server listening on PORT ${PORT}`);
        });
    
})


// let http = require('http');

// let server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey, techies');
// });

// server.listen(3000, '127.0.0.1', () => {
//     console.log('listening to port 3000');
// });