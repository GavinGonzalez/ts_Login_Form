let express = require('express')
let app = express()

app.get('/', function(req, res) {
    res.send("hello this is from the server")
})

let  server = app.listen(3000, function() {
    console.log("server is listening on port 3000")
});