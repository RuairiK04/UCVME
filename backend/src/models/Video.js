const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    videoUrl: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

module.exports = mongoose.model('Video', videoSchema);
