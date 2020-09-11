const mongoose = require("mongoose");
const User = mongoose.model("User");
const sha256 = require("js-sha256");
const jwt = require("jwt-then");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  //  const emailRegex = /@gmail.com|@hotmail.com/;

  // if(emailRegex.test(email)) throw "Email is not supported";
  //   if (password.length < 6) throw "passowrd is too short (min. 6 characters)";

  const emailExist = await User.findOne({
    email,
  });
  if (emailExist) throw "email already exist, please sign in";

  const user = new User({
    name,
    email,
    password: sha256(password + process.env.SALT),
  });

  await user.save();

  res.json({
    message: `${name} registered successfully`,
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password: sha256(password + process.env.SALT),
  });

  if (!user) throw "Please register first";

  const token = await jwt.sign({ id: user.id }, process.env.SECRET);

  res.json({
    message: "User signed in successfully!!!!",
    token,
  });
};
