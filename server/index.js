let express = require('express')
let app = express()
let cookieParser = require("cookie-parser")
let createToken = require("../server/JWT")
let cors = require("cors");
let db = require("./db")



app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

app.get('/', function(req, res) {
    res.send("hello this is from the server")
});

app.post("/login", function(req, res) {
    
    let email = req.body.email;
    let pwd = req.body.password;

    console.log(`from signin route: ${email}, ${pwd}`);

    db.query("SELECT * FROM users where email=? AND password=?", [email, pwd], (err, result) => {

        if(result.length > 0) {
            let token = createToken({payload: {username: result[0].username, email: result[0].email, loggedIn: true}}, "secret-key")
            console.log("ss: ", token)
            res.cookie("token", token);
            res.status(200).json({msg: "cookie sent"})
        } else {
            res.send("user already exists")
        }
    })
});

app.post("/signup", function(req, res) {

    let username = req.body.username;
    let email = req.body.email;
    let pwd = req.body.password;

    console.log(`${username},${email}, ${pwd}`);

    db.query("SELECT id FROM users where username=? OR email=? OR password=?", [username, email, pwd], (err, result) => {

        if(result.length == 0) {
                console.log("kell: "+JSON.stringify(result))
                db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, pwd], (err, result) => {
                
                if(err) {
                    console.log(err)

                } else {

                    let token = createToken({payload: {username, email, loggedIn: true}}, "secret-key")
                    console.log("styts: ", token)
                    res.cookie("token", token);
                    res.status(200).json({msg: "cookie sent"})
                
                }
            })
        } else {
            res.send("user already exists")
        }

    });
    
    /*
    let jwt = createToken({data: "hello this server"}, "key")
    res.cookie("jwt", jwt);
    res.status(200).json({msg: "cookie sent"})
    */
});

app.listen(3001, function() {
    console.log("server is listening on port 3000")
});