const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/user", userController.register);
router.get("/login", userController.protect, userController.login);

module.exports = router;
