var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Lucver1092",
    database:"learning_nodejs"
});

conn.connect(function(err) {
    if(err) throw err;
    var sql = "insert into customers (name,address) values ('Michelle','Blue Village 1')";
    conn.query(sql, function(err, result) {
        if(err) throw err;
        console.log("1 record inserted, ID: "+result.insertId);
    })
})