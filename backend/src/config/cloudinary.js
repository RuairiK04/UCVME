const cloudinary = require('cloudinary').v2;

// CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name is read automatically
// but we also support explicit vars as fallback
if (!process.env.CLOUDINARY_URL) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

module.exports = cloudinary;
