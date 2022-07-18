let express = require('express')
let app = express()
let cookieParser = require("cookie-parser")
let createToken = require("../server/JWT")
let cors = require("cors");
let db = require("./db")



//let db = require("./db/dbConnection")

//const crypto = require ("crypto");
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

app.use(express.urlencoded({

    extended: true

}));


/*
app.use(session({

    name: "user",

    cookie: {

        httpOnly: false

    },

    secret: 'secret',

    resave: false,

    saveUninitialized: false,

    genid: function(req) {

        return crypto.randomUUID();

    }

}));

*/


let sessionData = {}
/*

const jwt = createJwt(

                {

                "alg": "HS256",

                "typ": "JWT"

                }, {

                "id": result[0].id

                }, 

                "secret")

            res.send(jwt)

*/

/*express.json parses the HTTP request body.

It assembled the chunks containing your

form data, then created this body object for you

and filled it with your form data.



a. express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());



b. express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

*/

app.listen(3001, () => {
    console.log("server has started on port 3001")
})

app.get('/', function (req, res) {

    
    res.send("hh");

});


app.post("/location", function(req, res) {
    let lat = req.body.lat;
    let lng = req.body.lng;

    res.cookie("location", {lat, lng});
    console.log("location sent: ", lat)
    res.status(200).json({msg: "cookie sent"})
})



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



