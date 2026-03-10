const multer = require('multer');

const storage = multer.memoryStorage();

const uploadImage = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (/^image\/(jpeg|png|webp|jpg)$/.test(file.mimetype)) cb(null, true);
    else cb(new Error('Only jpg, png, webp images allowed'), false);
  },
});

const uploadVideo = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
  fileFilter: (req, file, cb) => {
    if (/^video\/(mp4|quicktime|webm|x-msvideo)$/.test(file.mimetype)) cb(null, true);
    else cb(new Error('Only mp4, mov, webm, avi videos allowed'), false);
  },
});

module.exports = { uploadImage, uploadVideo };
