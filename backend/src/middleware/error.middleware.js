const errorHandler = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message || 'Server error';

  if (err.name === 'ValidationError') {
    status = 400;
    message = Object.values(err.errors).map((e) => e.message).join(', ');
  } else if (err.name === 'CastError') {
    status = 400;
    message = `Invalid id: ${err.value}`;
  } else if (err.code === 11000) {
    status = 409;
    const field = Object.keys(err.keyValue)[0];
    message = `${field} already exists`;
  }

  res.status(status).json({ success: false, message });
};

module.exports = errorHandler;
