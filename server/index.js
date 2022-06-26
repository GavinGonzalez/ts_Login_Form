let express = require('express')
let app = express()
let cookieParser = require("cookie-parser")
let {createToken}= require("../server/JWT")
let cors = require("cors");

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());

app.get('/', function(req, res) {
    res.send("hello this is from the server")
});

app.post("/signin", function(req, res) {
    const pwd = req.body.pwd;
    const email = req.body.email;
    console.log("server ", email);
    res.cookie(createToken(4));
});

app.listen(3001, function() {
    console.log("server is listening on port 3000")
});