let express = require('express');

let app = express();

let cors = require("cors");
let {createToken} = require("./JWT")

//let {createJwt, verifyToken} = require( "../jwts/gavJWT");

//let session = require("express-session")

//let genuuid = require('uuidv4')

let cookieParser = require("cookie-parser")

//let db = require("./db/dbConnection")

//const crypto = require ("crypto");
app.use(express.json());

app.use(cors({

    origin: ["http://localhost:3000"],

    methods: ["GET", "POST"],
    exposedHeaders: ["set-cookie"],

    credentials: true

}));

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

app.get('/', function (req, res) {

    
    res.send("hh");

});



app.post("/login",  function (req, res) {

    

    const email = req.body.email;

    const password = req.body.pwd;



    db.query("SELECT id FROM users WHERE email=? AND password=?", [email, password], (err, result) => {


    })

});





app.post("/signup", function(req, res) {



    const email = req.body.email;

    const password = req.body.pwd;


    req.session.email = email;

    req.session.password = password;

    res.send(req.session.email);

    

    /*

    db.query("SELECT id FROM users WHERE email=? AND password=?", [email, password], (err, result) => {


    });

    */

})


app.post("/submit", function(req, res) {



    const email = req.body.email;

    res.cookie("cookie", "hello")
    console.log("cookie sent")

})





app.post("/pre", function(req, res) {

    res.json(req.cookies)

})




var server = app.listen(3002, function () {

    console.log("server is listening on port 3001");

});



