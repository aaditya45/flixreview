const express=require('express');
const app=express();
const cors = require('cors');
var http=require('http');
const bodyParser=require('body-parser');
const server=http.createServer(app);
const dbConnection=require('./DBConnection/dbConnection');
const movieAPI=require('./api/movieAPI')();
const reviewAPI=require('./api/reviewAPI')();
require('dotenv').config()

let port=process.env.PORT ||8080
server.listen(port,async()=>{
    await dbConnection();
    app.use(cors());
    app.use(bodyParser.json());
    app.use('/api/movies/',movieAPI);
    app.use('/api/reviews/',reviewAPI);

})
