var mysql = require ('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "sys"

});

con.connect(function(err){
    if (err) throw err;
    console.log('Connected');
    var sql = "INSERT INTO Parents (Fname, Lname, Email, ChildID, Pass) VALUES ('" & textbox1.text & "', " & val(textbox2.text) & ", 'emiletabbakh@gmail.com', '40026', 'eatmyass')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('1 Record is insterted');
    });

});