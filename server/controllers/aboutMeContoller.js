const AboutMe = require("../models/AboutMe");

// Get About Me details (public)
exports.getAboutMe = async (req, res) => {
  try {
    const aboutMe = await AboutMe.findOne();
    if (!aboutMe) return res.status(404).json({ message: "About Me not found" });
    res.json(aboutMe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update About Me (admin only)
exports.updateAboutMe = async (req, res) => {
  try {
    const aboutMe = await AboutMe.findOne();
    if (!aboutMe) {
      // Agar pehle se nahi hai toh naya create kar do
      const newAboutMe = new AboutMe(req.body);
      await newAboutMe.save();
      return res.status(201).json(newAboutMe);
    }
    // Agar pehle se hai toh update kar do
    Object.assign(aboutMe, req.body);
    await aboutMe.save();
    res.json(aboutMe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
