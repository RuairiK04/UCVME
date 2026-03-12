const router = require('express').Router();
const { protect } = require('../middleware/auth.middleware');
const { uploadVideo: uploadVideoMiddleware } = require('../middleware/upload.middleware');
const { uploadVideo, getVideo, deleteVideo } = require('../controllers/video.controller');

router.post('/:id', protect, uploadVideoMiddleware.single('video'), uploadVideo);
router.get('/:id', getVideo);
router.delete('/:id', protect, deleteVideo);

module.exports = router;
