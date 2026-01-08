const express = require("express");
const router = express.Router();
const educationController = require("../controllers/educationController");

const authMiddleware = require("../middleware/authMiddleware");

// Create
router.post("/",authMiddleware, educationController.createEducation);
// Delete
router.delete("/:id",authMiddleware, educationController.deleteEducation);
// Update
router.put("/:id",authMiddleware, educationController.updateEducation);

// Read all
router.get("/", educationController.getAllEducation);

// Read one
router.get("/:id", educationController.getEducationById);



module.exports = router;
