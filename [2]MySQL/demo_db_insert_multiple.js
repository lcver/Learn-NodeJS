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

    var sql = "insert into customers (name, address) values ?";

    var values = [
        ['Doe','Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];

    conn.query(sql, [values], function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: "+result.affectedRows);
        /** Result Object
         * 
         * fieldCount
         * affectedRows
         * insertId
         * serverStatus
         * warningCount
         * message
         * protocol41
         * changeRows
         * 
         */
    })
})