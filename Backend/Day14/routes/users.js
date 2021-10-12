var express = require('express');
var router = express.Router();
const { SEQUELIZE_DATABASE, SEQUELIZE_USERNAME, SEQUELIZE_PASSWORD, SEQUELIZE_HOST, SEQUELIZE_DIALECT } = require('../config');

//using postgres without sequalize
const Pool = require('pg').Pool;

const pool = new Pool({
  user: SEQUELIZE_USERNAME,
  host: SEQUELIZE_HOST,
  database: SEQUELIZE_DATABASE,
  password: SEQUELIZE_PASSWORD,
  port: 5432
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  pool.query('SELECT * FROM "User"', (err,result) => {
    if(err) {
      throw err;
    }
    res.status(200).json(result);
  })
});

module.exports = router;
