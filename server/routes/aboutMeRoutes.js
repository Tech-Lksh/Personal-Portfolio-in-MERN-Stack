const express = require("express");
const router = express.Router();
const aboutMeController = require("../controllers/aboutMeContoller");
const authMiddleware = require("../middleware/authMiddleware");

// Public route to get About Me
router.get("/", aboutMeController.getAboutMe);

// Admin-only route to update About Me
router.put("/", authMiddleware, aboutMeController.updateAboutMe);

module.exports = router;
