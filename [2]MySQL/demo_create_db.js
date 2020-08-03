var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Lucver1092"
});

conn.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    conn.query("Create database learning_nodejs", function(err, result) {
        if(err) throw err;
        console.log("Database created!");
    })
});