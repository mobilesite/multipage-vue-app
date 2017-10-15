'use strict';

const mongoose = require('../database/mongoose');
const model = mongoose.model;
const commentSchema = require('../schemas/comment');
const Comment = model('Comment', commentSchema);

module.exports = Comment;
