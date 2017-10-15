'use strict';

const mongoose = require('../database/db');
const model = mongoose.model;
const userSchema = require('../schemas/user');
const User = model('User', userSchema);

module.exports = User;
