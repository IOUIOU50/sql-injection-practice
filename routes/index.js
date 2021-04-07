const express = require('express');
const router = express.Router();
const mysql = require('mysql')

// DB Connection
const dbInfo = require('../db')
const db = mysql.createConnection(dbInfo)

db.connect()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login_ok', (req, res, next) => {
  res.render('login_ok')
})

// post
router.post('/login', (req, res, next) => {

  let id = req.body.id
  let pw = req.body.pw

  db.query(`select * from user where user_id='${id}' and user_pw='${pw}'`, (err, results) => {
    // error handler
    if (err) {
      console.log(err)
    } 

    // no error
    else {
      // login success
      if (results.length != 0) {
        res.redirect('/login_ok')
      }

      // login fail
      else {
        res.send(
          "<script>alert('회원정보가 없습니다.'); history.back();</script>"
        )
      }
    }
  })
})

module.exports = router;
