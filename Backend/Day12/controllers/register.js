const User = require("../models/mongo");
const bcrypt = require("bcrypt");
/**
 *
 * @param {*} req
 * @param {*} res
 * level - 3
 * check if email already exists
 * password hash
 * email lowercase (convert email to lowercase)
 */

const saltRounds = 10;
const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const alreadyExists = await User.findAll({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already registered");
    }
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({ email: email.toLowerCase(), password: hash, fullname: "sufyaan" });
    const savedUser = await newUser.save();
    // console.log(savedUser);
    res.status(201).send(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong')
  }
};

module.exports = register;
