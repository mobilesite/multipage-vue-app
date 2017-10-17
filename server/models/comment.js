'use strict';

const mongoose = require('../database/mongoose');
const commentSchema = require('../schemas/comment');
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
