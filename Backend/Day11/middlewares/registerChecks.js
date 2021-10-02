const { emailValidate, passwordValidate } = require("../utils/validate");

/**
 * level - 1
 * email validate - string
 * password validate
 * password == confirm
 */

const registerInitialCheck = async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  console.log(email, password, confirmPassword);
  console.log(
    typeof email === "string",
    typeof password === "string",
    typeof confirmPassword === "string",
    emailValidate(email),
    passwordValidate(password),
    password === confirmPassword
  );
  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length >= 8 &&
    emailValidate(email) &&
    passwordValidate(password) &&
    password === confirmPassword
  ) {
    await next();
  } else {
    res.status(401).send("Initial check fail!!!");
  }
};

module.exports = registerInitialCheck;
