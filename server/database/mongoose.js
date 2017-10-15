'use strict';

const mongoose = require('mongoose');

//使用原生的Promise代替mongoose内部的Promise，防止Mongoose: mpromise 错误
mongoose.Promise = global.Promise;

module.exports = mongoose;
