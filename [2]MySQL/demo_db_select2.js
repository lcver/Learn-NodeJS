var mysql = require('mysql');

var conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Lucver1092",
    database:"learning_nodejs"
});

conn.connect(function(err) {
    if(err) throw err;

    conn.query("Select name, address from customers", function(err, result, fields) {
        if(err) throw err;
        // console.log(result);
        
        console.log(result[1].name);
        // menampilkan name pada rows 1
    })
})