var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Lucver1092",
    database:"learning_nodejs"
});

conn.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    var sql = "Create table customers (id int not null, nama varchar(255), address varchar(255))";
    conn.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Table created!");
    })
})