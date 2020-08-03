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

    var sql = "insert into customers (name, address) values ('Company Inc','Highway 37')";
    conn.query(sql, function(err, result) {
        if(err) throw err;
        console.log("1 row inserted");
    })
})