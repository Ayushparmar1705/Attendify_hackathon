const db = require("mysql2");
const conn = db.createConnection({
    host: "localhost",
    database: "Attendance",
    password: "Ayush#2004",
    user: "root",
})

module.exports = conn;