const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",        // Put your MySQL password here
    database: "manpower"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("✅ MySQL Connected Successfully");

    connection.query("SELECT DATABASE() AS db", (err, result) => {
        console.log("Connected Database:", result);
    });

    connection.query("SHOW TABLES", (err, result) => {
        console.log("Tables:", result);
    });
});

module.exports = connection;