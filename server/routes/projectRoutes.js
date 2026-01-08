const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware"); // tumhara admin check wala middleware

// Ye routes sirf admin ke liye protected hain
router.post("/", authMiddleware, projectController.createProject);
router.put("/:id", authMiddleware, projectController.updateProject);
router.delete("/:id", authMiddleware, projectController.deleteProject);

// Ye routes sab ke liye public hain
router.get("/", projectController.getProjects);
router.get("/:id", projectController.getProjectById);

module.exports = router;
