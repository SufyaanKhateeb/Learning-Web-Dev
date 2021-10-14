const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const { SECRET } = require("../config");

const userRegister = async (userDets, role, res) => {
    try {
        let usernameNotTaken = await validateUsername(userDets.username);
        if (!usernameNotTaken) {
            return res
                .status(400)
                .send({ msg: "Username already exists", success: false });
        }

        let emailNotTaken = await validateEmail(userDets.email);
        if (!emailNotTaken) {
            return res
                .status(400)
                .send({ msg: "Email already exists", success: false });
        }

        const password = await bcrypt.hash(userDets.password, 12);
        const newUser = new User({
            ...userDets,
            password,
            role,
        });
        await newUser.save();
        return res
            .status(201)
            .send({
                msg: "User created successfully",
                success: true,
                user: newUser,
            });
    } catch (err) {
        return res
            .status(500)
            .send({ msg: "Error creating user", success: false });
    }
};

const userLogin = async (userCreds, role, res) => {
    let { username, password } = userCreds;
    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(404).send({
            msg: "User does not exist, invalid credentials.",
            success: false,
        });
    }
    if (user.role !== role) {
        return res.status(403).send({
            msg: "User does not have access to this resource.",
            success: false,
        });
    }
    let isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
        let token = jwt.sign(
            {
                user_id: user._id,
                role: user.role,
                username: user.username,
                email: user.email,
            },
            SECRET,
            {
                expiresIn: "7 days",
            }
        );
        let result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token: token,
            expiresIn: 168,
        };
        return res.status(200).send({
            msg: "User logged in successfully",
            success: true,
            ...result
        });
    } else {
        return res
            .status(403)
            .send({ msg: "Invalid credentials", success: false });
    }
};

const userAuth = passport.authenticate("jwt", { session: false });

const checkRole = (roles) => (req, res, next) => {
    console.log(req.user);
    if (!roles.includes(req.user.role)) {
        next();
    } else {
        res.status(403).send("Unauthorized");
    }
};

const validateEmail = async (email) => {
    let user = await User.findOne({ where: { email } });
    if (user) {
        return false;
    } else {
        return true;
    }
};

const validateUsername = async (username) => {
    let user = await User.findOne({ where: { username } });
    if (user) {
        return false;
    } else {
        return true;
    }
};

const serializeUser = (user) => {
    return {
        _id: user._id,
        role: user.role,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
    };
};

module.exports = {
    userRegister,
    userLogin,
    userAuth,
    checkRole,
    serializeUser,
    validateEmail,
};
