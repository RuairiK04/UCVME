const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const educationSchema = new mongoose.Schema(
  {
    institution: { type: String, required: true },
    qualification: { type: String, required: true },
    year: { type: Number },
  },
  { _id: true }
);

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    profilePic: { type: String },
    bio: { type: String },
    userType: { type: String, enum: ['student', 'casual', 'retired'], required: true },
    education: { type: [educationSchema], default: [] },
    skills: { type: [String], default: [] },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('passwordHash')) return next();
  this.passwordHash = await bcrypt.hash(this.passwordHash, 12);
  next();
});

userSchema.methods.comparePassword = function (plain) {
  return bcrypt.compare(plain, this.passwordHash);
};

module.exports = mongoose.model('User', userSchema);
