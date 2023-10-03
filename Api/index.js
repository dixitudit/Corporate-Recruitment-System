const express = require('express');

const app = express();

var bodyParser = require('body-parser');

var mysql = require('mysql');

const cors = require('cors');

const bcrypt = require('bcryptjs');

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
// app.get('/test',function(req,res){
//     // console.log('intest');
//     // res.json('test ok');
//     res.redirect('/login');
// });

app.post('/signup-recruiter', function(req,res){
    const {name, email, password, logo, about, mobNo, type, website} = req.body;
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync());
    var q = 'insert into company values(NULL,?,?,?,NULL,?,?,?,?,NULL,NULL)';

    con.query(q, [email,hash,name,about,mobNo,type,website], function(err,result){
        if(err) throw err;
        
        res.json({redirect:'/login'});
    });
})



app.post('/login-auth',function(req,res){
    const {email, password, table} = req.body;
    var q;
    if(table==='candidate')
        q="select * from candidate where email = ?;";
    else 
        q="select * from company where recruitersemail = ?;"
    con.query(q, [email], function(err, result){
        if(err) throw err;
        if(result.length>0) {
            const isRightPass=bcrypt.compareSync(password,result[0].Password);
            if(isRightPass==true){
                console.log(result[0].Password);
                res.send(result);
            }
            else
                res.send({message: "Wrong Pass"});
            
        }
        else{
            res.send({message: "Wrong Email"});
        }
        
    });
});

var server = app.listen(5000, function(){
    console.log("server running");
});


