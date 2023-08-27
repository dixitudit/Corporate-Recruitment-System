const express = require('express');

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
var mysql = require('mysql');
const cors = require('cors');

app.use(cors({
    credentials:true,
    origin: 'https://127.0.0.1:5173',
}));

var con = mysql.createConnection({
    host: "localhost",
    port: "3006",
    user: "root",
    password: "hellomysql",
    database: "crsdb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});

// get put methods here
app.get('/',function(req,res){

});

var server = app.listen(5000, function(){
    console.log("server running");
});