'use strict';

const err = require('../config/error');
const respond = require('../utils/respond');
const Comment = require('../models/comment');
const _ = require('underscore');
const fs = require('fs');
const path = require('path');

/**
 * ----------------- 数据库的操作 --------------
 */

// save comment
module.exports.save = async (ctx) => {
    const comment = ctx.req.body.comment;
    const articleId = comment.article;

    if (comment.cid) {
        const newComment = await Comment.findById(comment.cid).exec();
        const reply = {
            from: comment.from,
            to: comment.to,
            content: comment.content
        };
        newComment.replies.push(reply);
        await newComment.save().exec();
        ctx.redirect('/article/' + articleId);
    } else {
        const newComment = new Comment(comment);
        await newComment.save().exec();
        ctx.redirect('/article/' + articleId);
    }
};
