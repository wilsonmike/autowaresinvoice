const express = require("express");
const autowares = express.Router();
const pool = require("./connection");

//api routes including pg data

//AutoWares Data
autowares.get('/amazon', function(req,res) {
    let query = `select * from amazon`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})


module.exports = autowares; 