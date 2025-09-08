const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const conn = require("./dbConfig/dbConfig");

app.post("/admin/signup", (req, res) => {
    const data = req.body;
    const sql = "INSERT INTO admin_signup(name,email,password) VALUES(?,?,?)";
    conn.query(sql, [data.name, data.email, data.password], (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        }
        else {

            return res.status(200).send({ message: "Admin created succesfully" });
        }
    });

})
app.get("/admin/login", (req, res) => {
    const data = req.body;
    const sql = "SELECT * FROM admin_signup WHERE email = ? AND password = ?";
    conn.query(sql, [data.email, data.password], (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        }
        else {
            if(result.length>0)
            {
                
            }
            return res.status(200).send({ message: result.id });
        }
    });

})


app.listen(5000);