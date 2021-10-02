var express = require('express');
var router = express.Router();
const registerInitialCheck = require('../middlewares/registerChecks');
const register = require('../controllers/register')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/** 
* @requires {email, password, confirmPassword } - req.body
* @description
* Security, Performance and Edge cases
* level - 1
* email validate - string
* password validate
* password == confirm
* level - 2
* JS / SQl 
* level - 3
* check if email already exists
* password hash
* email lowercase (convert email to lowercase)
* save
*/
router.post('/register', registerInitialCheck, register)

module.exports = router;
