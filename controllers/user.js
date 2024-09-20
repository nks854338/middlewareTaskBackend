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
    const { name, email, password, profilePic } = req.body;
    console.log(req.body);
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "all fields are require",
      });
    }

    const user = await User.findOne({ email, password });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "user exiest please user another email",
      });
    }

    const newUser = await User.create({
      name,
      email,
      password,
      profilePic,
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

async function handleLogin(req, res) {
  try {
    const {email, password} = req.body;
    const user = User.findOne({email, password});

    if(!user){
        return res.status(400).json({
            success: false,
            message: "user can't exist",
        });
    }

    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: "all fields are require",
        });
    }
    if(user){
        return res.status(500).json({
            success: true,
            message: 'loggined successfully',
          });
    }

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = { handleSignIn, handleLogin, getAllUser };
