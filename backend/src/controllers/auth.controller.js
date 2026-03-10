const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

const register = async (req, res, next) => {
  try {
    const { name, email, password, userType } = req.body;
    if (!name || !email || !password || !userType) {
      return res.status(400).json({ success: false, message: 'name, email, password and userType are required' });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ success: false, message: 'Email already registered' });

    const user = await User.create({ name, email, passwordHash: password, userType });
    const token = signToken(user._id);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: { token, user: { id: user._id, name: user.name, email: user.email, userType: user.userType } },
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = signToken(user._id);
    res.json({
      success: true,
      message: 'Login successful',
      data: { token, user: { id: user._id, name: user.name, email: user.email, userType: user.userType } },
    });
  } catch (err) {
    next(err);
  }
};

const getMe = (req, res) => {
  res.json({ success: true, message: 'Authenticated user', data: { user: req.user } });
};

module.exports = { register, login, getMe };
