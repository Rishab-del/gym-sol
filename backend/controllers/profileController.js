const User = require("../models/User");

// GET Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// UPDATE Profile
exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};