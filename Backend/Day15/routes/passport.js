const express = require('express');
var router = express.Router();

const {
    userAuth,
    userLogin,
    checkRole,
    userRegister,
    serializeUser,
} = require("../utils/Auth");

//user registration route
router.post("/register-user", async (req, res) => {
    await userRegister(req.body, "user", res);
});

//admin registration route
router.post("/register-admin", async (req, res) => {
    await userRegister(req.body, "admin", res);
});

//superadmin registration route
router.post("/register-super-admin", async (req, res) => {
    await userRegister(req.body, "superadmin", res);
});

//user login route
router.post("/login-user", async (req, res) => {
    await userLogin(req.body, "user", res);
});

//admin login route
router.post("/login-admin", async (req, res) => {
    await userLogin(req.body, "admin", res);
});
//superadmin login route
router.post("/login-super-admin", async (req, res) => {
    await userLogin(req.body, "superadmin", res);
});
//profile route
router.post("/profile", userAuth, async (req, res) => {
    return res.json(serializeUser(req.user));
});

//users protected route
router.get(
    "/user-protectd",
    userAuth,
    checkRole(["user"]),
    async (req, res) => {
        return res.json("Hello User");
    }
);
//admin protected route
router.get(
    "/admin-protectd",
    userAuth,
    checkRole(["admin"]),
    async (req, res) => {
        return res.json("Hello Admin");
    }
);
//super protected route
router.get(
    "/super-protectd",
    userAuth,
    checkRole(["super"]),
    async (req, res) => {
        return res.json("Hello Super");
    }
);

module.exports = router;