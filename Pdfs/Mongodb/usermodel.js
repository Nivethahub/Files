// models/User.ts

// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String, // hashed password assumed
//   sessionToken: String, // Unique per session
  browserFingerprint: String, // Unique browser info
});
module.exports = mongoose.model('User', userSchema);
// export default mongoose.model('User', userSchema);
