//require
const mysql = require("mysql2");

//middleware
const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "ZoeJames1920@",
      database: "election",
    },
    console.log("Connected to the election database.")
  );

module.exports = db;