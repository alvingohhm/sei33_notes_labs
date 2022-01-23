const express = require("express");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");
const router = express.Router();

////////////////////////////////
// Users New Routes - Signup Page
////////////////////////////////
router.get("/new", auth, userController.newUserPage);
////////////////////////////////
// Users POST Routes - Create User
////////////////////////////////
router.post("/", userController.createUser);
////////////////////////////////
// Users POST Routes - Create User
////////////////////////////////
router.get("/seed", userController.seedAgents);

module.exports = router;
