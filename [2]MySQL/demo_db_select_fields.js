var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Lucver1092",
    database:"learning_nodejs"
});

conn.connect(function(err) {
    if(err) throw err;
    conn.query("select name, address from customers", function(err, result, fields) {
        if(err) throw err;
        console.log(fields);
    })
})