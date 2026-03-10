const router = require('express').Router();
const { protect } = require('../middleware/auth.middleware');
const { getReviews, submitReview } = require('../controllers/review.controller');

router.get('/:id', getReviews);
router.post('/:id', protect, submitReview);

module.exports = router;
