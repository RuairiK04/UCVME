const router = require('express').Router();
const { protect } = require('../middleware/auth.middleware');
const { uploadVideo: uploadVideoMiddleware } = require('../middleware/upload.middleware');
const { uploadVideo, getVideo } = require('../controllers/video.controller');

router.post('/:id', protect, uploadVideoMiddleware.single('video'), uploadVideo);
router.get('/:id', getVideo);

module.exports = router;
