const mongoose = require('mongoose');
require("dotenv").config();

function connectToMongo(){
    var mongoURI=process.env.MONGO_URI;
    return mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log(`Connection Establish.`);
    }).catch(err=>console.error(err));
}
module.exports = connectToMongo;