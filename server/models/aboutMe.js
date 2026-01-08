// models/AboutMe.js
const mongoose = require("mongoose");

const aboutMeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profession: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  socialLinks: {
    linkedin: { type: String, required: false },
    github: { type: String, required: false },
    leetcode: { type: String, required: false },
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("AboutMe", aboutMeSchema);
