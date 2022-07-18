let mysql = require("mysql");

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "gavin887@Z",
    database: "login_system"
});


module.exports = con;