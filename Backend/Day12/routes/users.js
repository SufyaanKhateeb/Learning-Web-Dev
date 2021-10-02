var express = require('express');
var router = express.Router();

//using postgres without sequalize
const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345678',
  port: 5432
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM "Users"', (err,result) => {
    if(err) {
      throw err;
    }
    res.status(200).json(result);
  })
});

module.exports = router;
