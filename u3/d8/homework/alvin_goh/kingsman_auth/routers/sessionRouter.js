const express = require("express");
const sessionController = require("../controllers/sessionController");
const router = express.Router();

////////////////////////////////
// Sessions New Routes - Login Page
////////////////////////////////
router.get("/new", sessionController.newSession);
////////////////////////////////
// Sessions POST Routes - Login Authentication
////////////////////////////////
router.post("/", sessionController.createSession);
////////////////////////////////
// Sessions POST Routes - Login Authentication
////////////////////////////////
router.delete("/", sessionController.deleteSession);

module.exports = router;
