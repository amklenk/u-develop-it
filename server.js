const mysql = require('mysql2');
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "ZoeJames1920@",
        database: "election"
    },
    console.log("Connected to the election database.")
);

//database
//call to retrieve candidates data
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});
//call to get a single candidate
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) =>{
    if(err){
        console.log(err);
    }
    console.log(row);
});
//call to delete a candidate
// db.query(`DELETE FROM candidates where id = ?`, 1, (err, result) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(result);
// });
//call to create a candidate
const sql = `INSERT INTO candidates  (id, first_name, last_name, industry_connected)
            VALUES (?,?,?,?)`;

const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err){
        console.log(err);
    }
    console.log(result);
});

//express
//this is what happens when a request is not found
app.use((req, res) => {
res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})