const User = require('../models/User');
const cloudinary = require('../config/cloudinary');

const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-passwordHash');
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    res.json({ success: true, message: 'Profile retrieved', data: { user } });
  } catch (err) {
    next(err);
  }
};

const updateProfile = async (req, res, next) => {
  try {
    if (req.user._id.toString() !== req.params.id) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }

    const { bio, skills, education } = req.body;
    const updates = {};
    if (bio !== undefined) updates.bio = bio;
    if (skills !== undefined) updates.skills = skills;
    if (education !== undefined) updates.education = education;

    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    }).select('-passwordHash');

    if (!user) return res.status(404).json({ success: false, message: 'User not found' });

    res.json({ success: true, message: 'Profile updated', data: { user } });
  } catch (err) {
    next(err);
  }
};

const uploadProfilePic = async (req, res, next) => {
  try {
    if (req.user._id.toString() !== req.params.id) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file provided' });
    }

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'ucvme/images', resource_type: 'image' },
        (error, result) => (error ? reject(error) : resolve(result))
      );
      stream.end(req.file.buffer);
    });

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { profilePic: result.secure_url },
      { new: true }
    ).select('-passwordHash');

    res.json({ success: true, message: 'Profile picture updated', data: { profilePic: user.profilePic } });
  } catch (err) {
    next(err);
  }
};

module.exports = { getProfile, updateProfile, uploadProfilePic };
