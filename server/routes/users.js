var express = require("express");
var router = express.Router();
var fs = require("fs");
const sql = require('mysql');

//connection with database todos
const con = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'z10mz10m',
  database: "rom_market"
})

/* GET users listing. */

router.get('/', (req, res) => {
  let sql = `select * from user where username = '${req.query.user}'`
  con.query(sql, (err, result) => {
    if (err) { console.log(err); return; }
    res.send(result[0])
  })
})


router.post("/login", function (req, res) {
  let sql = `SELECT username,password,user_type
  FROM user 
  JOIN user_info 
  using(user_id)
  WHERE username = '${req.body.username}' and password = '${req.body.password}'`
  con.query(sql, (err, result) => {
    if (err) {console.log(err); res.status(405).send(JSON.stringify({ isOK: false, message: "One of the fields is incorrect." + err })) }
    console.log(req.body);
    if (result[0]) {
      res.status(200).send(JSON.stringify({ isOK: true, message: "login successfully" ,user_type: result[0].user_type}))
    }
    else {
      res.status(404).send(JSON.stringify({ isOK: false, message: "One of the fields is incorrect."}))
    }
  })
});


router.post("/register", function (req, res) {
  let sql = `select username from user where username = '${req.body.username}'`
  con.query(sql, (err, result) => {
    if (err) { console.log(err); return; }
    if (result[0]) {
      res.status(409).send(JSON.stringify({ isOK: false, message: "This user is already exists." }));
    }
    else if (req.body.username === "" || req.body.password === "" || req.body.email === "" || req.body.address === "" || req.body.firstName === "" || req.body.lastName === "") {
      res.status(406).send(JSON.stringify({ isOK: false, message: "One of the fields is Empty" }));
    }
    else {
      sql = `insert into user (first_name, last_name, username, email, phone_number) values ('${req.body.firstName}','${req.body.lastName}','${req.body.username}', '${req.body.email}', '${req.body.phoneNumber}')`;
      con.query(sql, (err, result) => {
        if (err) { console.log(err); res.status(422).send(JSON.stringify({ isOK: false, message: "There was an Error with one of the syntax, try again." })); }
        else {
          sql = `insert into user_info (user_id, password) values ('${result.insertId*1}','${req.body.password}')`;
          con.query(sql, (err, result) => {
            if (err) { console.log(err); res.status(406).send(JSON.stringify({ isOK: false, message: "There was an Error with one of the syntax, try again." })); }
            else res.status(200).send(JSON.stringify({ isOK: true, message: "Registerd successfully!" }));
          })
        }
      })
    }
  })
});

module.exports = router;