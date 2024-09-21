const User = require("../models/user");

async function getAllUser(req, res) {
  try {
    const allUser = await User.find({});
    return res.status(200).json({ allUser });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function handleSignIn(req, res) {
  try {
    const { name, email, msg } = req.body;
    console.log(req.body);
    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: "all fields are require",
      });
    }

    const newUser = await User.create({
      name,
      email,
      msg,
    });

    return res.status(200).json({
      success: true,
      message: "user created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}


module.exports = { handleSignIn, getAllUser };
