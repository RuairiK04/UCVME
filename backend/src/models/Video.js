const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    videoUrl: { type: String, required: true },
    cloudinaryPublicId: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Video', videoSchema);
