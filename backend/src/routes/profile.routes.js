const router = require('express').Router();
const { protect } = require('../middleware/auth.middleware');
const { uploadImage } = require('../middleware/upload.middleware');
const { getProfile, updateProfile, uploadProfilePic } = require('../controllers/profile.controller');

router.get('/:id', getProfile);
router.put('/:id', protect, updateProfile);
router.post('/:id/pic', protect, uploadImage.single('image'), uploadProfilePic);

module.exports = router;
