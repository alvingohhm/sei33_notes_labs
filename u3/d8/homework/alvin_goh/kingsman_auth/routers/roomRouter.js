const express = require("express");
const roomController = require("../controllers/roomController");
const auth = require("../middlewares/auth");
const router = express.Router();
////////////////////////////////
// Rooms Index Routes
////////////////////////////////
router.get("/", auth, roomController.indexPageHandler);
////////////////////////////////
// Rooms New Routes - post message
////////////////////////////////
router.post("/new", roomController.postMessagePage);

module.exports = router;
