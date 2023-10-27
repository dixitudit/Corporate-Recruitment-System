const express = require('express');

const app = express();

const multer  = require('multer');

var mysql = require('mysql');

const cors = require('cors');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const secretKey = 'skill magnet SECRET KEY';

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
const upload = multer({storage: store});


app.get('/userName', (req,res)=>{
    const token = req.header('Authorization').split(' ')[1];
    try{
        const decode = jwt.verify(token,secretKey);
        var q;
        if(decode.role==='candidate')
            q="select Name from candidate where id = ?;";
        else if(decode.role==='company')
            q="select Name from company where id = ?;"
        else
            q="select Name from admin where id = ?;"
        con.query(q,[decode.id], function(err,result){
            if(err) throw err;
            res.json({userName:result[0].Name.split(' ')[0], role:decode.role});
        });
    }
    catch (error){
        throw error;
    }
})


app.post('/signup-recruiter', upload.single('logo'), function(req, res){

    const imageBuffer = req.file.buffer;
    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
    var q = 'insert into company values(NULL,?,?,?,?,?,?,?,?,NULL,NULL)';

    con.query(q, [req.body.email,hash,req.body.name,imageBuffer,req.body.about,req.body.mobNo,req.body.type,req.body.website], function(err,result){
        if(err) throw err;
        console.log('recruiter added');
        res.json({redirect:'/login'});
    });
})


app.post('/signup-candidate', upload.single('resume'), function(req, res){

    const imageBuffer = req.file.buffer;
    const hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
    var q = 'insert into candidate values(NULL,?,?,?,?,?,?,?,?,?)';


    con.query(q, [req.body.email,hash,req.body.name,req.body.qualification,req.body.address,req.body.dob,imageBuffer,req.body.mobNo,req.body.experiance], function(err,result){
        if(err) throw err;
        con.query("select id from candidate where Email=?;",[req.body.email],function(error,results){
            if(error) throw error;
            console.log(results[0].id);

            req.body.skills.split(",").forEach(element => {
                con.query("SELECT Skill_ID FROM skills_set where SkillName = ?;",[element],function(er,resu){
                    if(er) throw er;
                    con.query("Insert into can_skill_set values(?,?);",[resu[0].Skill_ID,result[0].id],function(e,r){
                        if(e) throw e;
                        console.log("candidate skill added");
                    })
                })
            });
        })

        res.json({redirect:'/login'});
        console.log('candidate added');

    });
})

app.post('/login-auth',function(req,res){
    const {email, password, table} = req.body;
    var q;
    if(table==='candidate')
        q="select * from candidate where email = ?;";
    else if(table==='company')
        q="select * from company where recruitersemail = ?;"
    else
        q="select * from admin where Email_ID = ?;"
    con.query(q, [email], function(err, result){
        if(err) throw err;
        if(result.length>0) {
            const isRightPass=bcrypt.compareSync(password,result[0].Password);
            if(isRightPass==true){
                const user = {};
                user.id=result[0].id;
                user.role=table;
  
                //token generation
                const token = jwt.sign(user, secretKey,{});
                res.json({token, redirect:'/',});
                console.log("logged in");
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


