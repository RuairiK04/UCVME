const Video = require('../models/Video');
const cloudinary = require('../config/cloudinary');

const uploadVideo = async (req, res, next) => {
  try {
    if (req.user._id.toString() !== req.params.id) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No video file provided' });
    }

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'ucvme/videos', resource_type: 'video' },
        (error, result) => (error ? reject(error) : resolve(result))
      );
      stream.end(req.file.buffer);
    });

    // Destroy old Cloudinary asset and DB record if one exists
    const existing = await Video.findOne({ userId: req.params.id });
    if (existing) {
      await cloudinary.uploader.destroy(existing.cloudinaryPublicId, { resource_type: 'video' });
      await existing.deleteOne();
    }

    const video = await Video.create({
      userId: req.params.id,
      videoUrl: result.secure_url,
      cloudinaryPublicId: result.public_id,
    });

    res.status(201).json({ success: true, message: 'Video uploaded', data: { video } });
  } catch (err) {
    next(err);
  }
};

const deleteVideo = async (req, res, next) => {
  try {
    if (req.user._id.toString() !== req.params.id) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }

    const video = await Video.findOne({ userId: req.params.id });
    if (!video) return res.status(404).json({ success: false, message: 'No video found for this user' });

    await cloudinary.uploader.destroy(video.cloudinaryPublicId, { resource_type: 'video' });
    await video.deleteOne();

    res.json({ success: true, message: 'Video deleted' });
  } catch (err) {
    next(err);
  }
};

const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findOne({ userId: req.params.id });
    if (!video) return res.status(404).json({ success: false, message: 'No video found for this user' });

    res.json({ success: true, message: 'Video retrieved', data: { video } });
  } catch (err) {
    next(err);
  }
};

module.exports = { uploadVideo, getVideo, deleteVideo };
