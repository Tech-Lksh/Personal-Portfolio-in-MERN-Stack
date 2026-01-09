const Project = require("../models/Project");

// Create new project
exports.createProject = async (req, res) => {
  try {
    const data = { ...req.body };

    // Agar image upload hua hai to uska Cloudinary URL daal do
    if (req.file) {
      data.image = req.file.path;
    }

    const project = new Project(data);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update project by ID
exports.updateProject = async (req, res) => {
  try {
    const data = { ...req.body };

    if (req.file) {
      data.image = req.file.path;
    }

    const project = await Project.findByIdAndUpdate(req.params.id, data, { new: true });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Rest controller functions stay same

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
