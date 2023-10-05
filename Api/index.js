const express = require('express');

const app = express();

const multer  = require('multer');

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
    password: "hellomysql",
    database: "crsdb"
});

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
});


const store = multer.memoryStorage();
const upload = multer({storage: store})

app.post('/signup-recruiter', upload.single('logo'), function(req, res){

    // console.log(req.body.name);
    // console.log(req.files);
    const imageBuffer = req.file.buffer;
    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
    var q = 'insert into company values(NULL,?,?,?,?,?,?,?,?,NULL,NULL)';

    con.query(q, [req.body.email,hash,req.body.name,imageBuffer,req.body.about,req.body.mobNo,req.body.type,req.body.website], function(err,result){
        if(err) throw err;
        console.log('recruiter added');
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


