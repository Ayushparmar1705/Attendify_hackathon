// import the express library
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
// configuration file for database
const conn = require("./dbConfig/dbConfig");
// create the post api
app.post("/admin/signup", (req, res) => {
    // get the data from the body;
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
// create the api for get
app.get("/admin/login", (req, res) => {
    const data = req.body;
    const sql = "SELECT * FROM admin_signup WHERE email = ? AND password = ?";
    conn.query(sql, [data.email, data.password], (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        }
        else {
            if (result.length > 0) {

            }
            return res.status(200).send({ message: result.id });
        }
    });
    // 
})
// create the api for edit
app.put("/admin/addclass", (req, res) => {
    const data = req.body;
    const sql = "INSERT INTO Add_Class(admin_id , class_name) VALUES(?,?)";
    sql.query(sql, [data.admin_id, data.classname], (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        } else {
            return res.status(200).send({ message: result });
        }
    })
})


app.get("/admin/manageclass", (req, res) => {
    const data = req.body;
    const sql = "SELECT * FROM Add_Class";
    conn.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        }
        else {
            if (result.length > 0) {

            }
            return res.status(200).send({ message: result.id });
        }
    });
})
// create the api for the delete
app.delete("/admin/deleteclass/:id", (req, res) => {
    // get the id from the url
    const data = res.params;
    const sql = "DELETE FROM Add_class WHERE id = ?";
    sql.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        } else {
            return res.status(200).send({ message: "class deleted succesfully" });
        }
    })
})
app.delete("/admin/editclass/:id", (req, res) => {
    const data = req.body;
    const sql = "UPDATE Add_class WHERE id = ?";
    sql.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        } else {
            return res.status(200).send({ message: "class update succesfully" });
        }
    })
})

app.post("/admin/addteacher", (req, res) => {
    const data = req.body;
    const sql = "INSERT INTO Add_Class(admin_id , class_name) VALUES(?,?)";
    sql.query(sql, [data.admin_id, data.classname], (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        } else {
            return res.status(200).send({ message: result });
        }
    })
})



app.get("/admin/manageteacher", (req, res) => {
    const data = req.body;
    const sql = "SELECT * FROM Add_Teacher";
    conn.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        }
        else {
            if (result.length > 0) {

            }
            return res.status(200).send({ message: result.id });
        }
    });
})


app.delete("/admin/deleteteacher/:id", (req, res) => {
    const id = req.params;
    const sql = "DELETE FROM Add_Teacher WHERE id = ?";
    sql.query(sql, [id], (err, result) => {
        if (err) {
            return res.status({ message: err });
        } else {
            return res.status(200).send({ message: "Teacher record deleted succesfully" });
        }
    })
})


app.put("/admin/editteacher/:id", (req, res) => {
    const data = req.body;
    const sql = "UPDATE Add_Teacher set name = ? , email = ? , phone = ?"
    conn.query(sql, [data.name, data.email, data.phone], (err, result) => {
        if (err) {
            return res.status({ message: err })
        } else {
            return res.status({ message: result });
        }
    });

})


app.post("/admin/addsubject", (req, res) => {
    const data = req.body;
    const sql = "INSERT INTO subjects(subject_name) VALUES(?)";
    sql.query(sql, [data.class_name], (err, result) => {
        if (err) {
            return res.status(500).send({ message: err });
        }
        else {
            return res.status(200).send({ message: result });
        }
    })
})


// listen the server to 5000  
app.listen(5000);