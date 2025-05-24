const receiveData = require("../models/Signup");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await receiveData.create({
      name,
      email,
      password,
    });

    res.status(201).json({ success: true, user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await receiveData.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({
      id: user._id,
      email: user.email,
    });

    res.status(200).json({ success: true, token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.labform = async (req, res) => {
  try {
    const users = await receiveData.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};