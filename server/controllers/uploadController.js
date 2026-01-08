const cloudinary = require("../config/cloudinary");

exports.uploadImage = async (req, res) => {
  try {
    // 🔥 DEBUG CHECK
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "portfolio-skills",
    });

    res.status(200).json({
      url: result.secure_url,
    });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({ message: "Image upload failed" });
  }
};
