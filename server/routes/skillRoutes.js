// routes/skillRoutes.js
const express = require("express");
const router = express.Router();
const skillController = require("../controllers/skillController");
const authMiddleware = require("../middleware/authMiddleware");

// Admin-only routes (create, update, delete)
router.post("/", authMiddleware, skillController.createSkill);
router.put("/:id", authMiddleware, skillController.updateSkill);
router.delete("/:id", authMiddleware, skillController.deleteSkill);

// Public routes (read-only)
router.get("/", skillController.getSkills);
router.get("/:id", skillController.getSkillById);

module.exports = router;
