'use strict';

const err = require('../config/error');
const respond = require('../utils/respond');
const Article = require('../models/article');
const Category = require('../models/category');
const Comment = require('../models/comment');
const _ = require('underscore');
const fs = require('fs');
const path = require('path');

/**
 * ----------------- 数据库的操作 --------------
 */

// save article
module.exports.save = async (ctx) => {
    const articleObj = ctx.req.body.article;
    const id = articleObj._id;
    let newArticle;

    if (ctx.req.poster) {
        articleObj.poster = ctx.req.poster;
    }

    if (id) {
        const article = await Article.findById(id).exec();

        newArticle = _.extend(article, articleObj);

        await newArticle.save().exec();

        ctx.redirect(`/article/${article._id}`);
    } else {
        newArticle = new Article(articleObj);

        const categories = articleObj.categories;
        const article = await newArticle.save().exec();

        for(let i in categories) {
            const category = await Category.findById(categories[i]).exec();
            category.articles.push(article._id);
            await category.save().exec();
        }
        ctx.redirect('/article/' + article._id);
    }
};

// delete article
module.exports.del = async (ctx) => {
    const id = ctx.query.id;

    if (id) {
        await Article.findOneAndRemove({_id: id}).exec();
        respond(ctx, 200, {
            code: err.success.code,
            msg: err.success.code
        });
    } else {
        respond(ctx, 200, {
            code: err.parameterError.code,
            msg: err.parameterError.msg
        });
    }
};

// save poster
// 上传海报/封面图
module.exports.savePoster = async (ctx, next) => {
    const posterData = ctx.req.files.uploadPoster;
    const filePath = posterData.path;
    const originalFilename = posterData.originalFilename;

    if (originalFilename) {
        fs.readFile(filePath, function(err, data) {
            const timestamp = Date.now();
            const type = posterData.type.split('/')[1];
            const poster = timestamp + '.' + type;
            const newPath = path.join(__dirname, '../../', '/public/upload/' + poster);

            fs.writeFile(newPath, data, (err) => {
                req.poster = poster;
                next();
            });
        })
    } else {
        next();
    }
};

/**
 * ----------------- 页面的操作 --------------
 */

// new article page
module.exports.showNew = async (ctx) => {
    const categories = await Category.find({}).exec();

    await ctx.render('article_edit', {
        title: '新建文章',
        categories: categories,
        article: {}
    })
};

// update article page
module.exports.showUpdate = async (ctx) => {
    const id = ctx.req.params.id;

    if (id) {
        const article = await Article.findById(id).exec();
        const categories = await Category.find({}).exec();

        await ctx.render('article_edit', {
            title: '编辑文章',
            article: article,
            categories: categories
        });
    }
};

// article list page
module.exports.showList = async (ctx) => {
    const articles = await Article.find({}).populate('categories', 'name').exec();

    await ctx.render('article_list', {
        title: '文章列表',
        layout: false,
        articles: articles
    });
};

// article detail page
module.exports.showDetail = async (ctx) => {
    const id = ctx.query.id;
    await Article.update({_id: id}, {$inc: {pv: 1}}).exec();

    const article = await Article.findById(id).exec();
    const comments = await Comment
        .find({article: id})
        .populate('from', 'name')                  //通过from这一关联字段，填充进来name
        .populate('reply.from reply.to', 'name')   //对reply.from reply.to这两个关联字段，都填充进来name
        .exec();

    await ctx.render('article_detail', {
        title: '文章详情页',
        article: article,
        comments: comments
    });
};


