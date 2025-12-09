const mongoose = require('mongoose');
// const { findOne } = require('./detailssignin');
const signup = new mongoose.Schema({
    First_Name: String,
        Last_Name: String,
        E_Mail: String,
        Password: String,
        Confirm_Password: String
})
const User = mongoose.model('signup',signup)
module.exports = User;
