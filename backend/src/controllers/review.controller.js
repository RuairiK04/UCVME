const Review = require('../models/Review');

const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ revieweeId: req.params.id })
      .populate('reviewerId', 'name')
      .sort({ createdAt: -1 });

    res.json({ success: true, message: 'Reviews retrieved', data: { reviews } });
  } catch (err) {
    next(err);
  }
};

const submitReview = async (req, res, next) => {
  try {
    if (req.user._id.toString() === req.params.id) {
      return res.status(400).json({ success: false, message: 'You cannot review yourself' });
    }

    const { content, rating } = req.body;
    if (!content || !rating) {
      return res.status(400).json({ success: false, message: 'content and rating are required' });
    }

    const review = await Review.create({
      reviewerId: req.user._id,
      revieweeId: req.params.id,
      content,
      rating,
    });

    res.status(201).json({ success: true, message: 'Review submitted', data: { review } });
  } catch (err) {
    next(err);
  }
};

module.exports = { getReviews, submitReview };
