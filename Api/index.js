const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
const cors = require('cors');
app.use(express.json());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:5173',
}));

var con = mysql.createConnection({
    host: "localhost",
    port: "3006",
    user: "root",
    password: "root",
    database: "crsdb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});

// get put methods here
app.get('/test',function(req,res){
    console.log('intest');
    res.json('test ok');
});

app.post('/login-auth',function(req,res){
    const {email, password, table} = req.body;
    var q;
    if(table==='candidate')
        q="select * from candidate where email = ? AND password = ?;";
    else 
        q="select * from company where recruitersemail = ? AND password = ?;"
    con.query(q, [email, password], function(err, result){
        if(err) throw err;
        if(result.length>0) {
            res.send(result);
            console.log(result);
        }
        else{
            res.send({message: "Wrong"});
        }
        
    });
});

var server = app.listen(5000, function(){
    console.log("server running");
});