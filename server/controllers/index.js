'use strict';

const err = require('../config/error');
const respond = require('../utils/respond');
const Article = require('../models/article');
const Category = require('../models/category');

/**
 * ----------------- 页面的操作 --------------
 */

// show index page
module.exports.index = async (ctx) => {
    const categories = await Category
        .find({})
        .populate({
            path: 'articles',
            select: 'title poster',
            options: { limit: 5 }
        })
        .exec();

    ctx.render('index', {
        title: '首页',
        categories: categories
    });
}

// show search page
module.exports.search = async (ctx) => {
    const categoryId = ctx.req.query.category.id;
    const q = ctx.req.query.q;
    const page = parseInt(ctx.req.query.p, 10) || 0;
    const count = 10;
    const index = page * count;

    if (categoryId) {
        const categories = await Category
            .find({_id: categoryId})
            .populate({
                path: 'articles',
                select: 'title poster'
            })
            .exec();
        const category = categories[0] || {};
        const articles = category.articles || [];
        const results = articles.slice(index, index + count);

        ctx.render('search', {
            title: '搜索结果列表',
            keyword: category.name,
            currentPage: (page + 1),
            query: 'categoryid=' + categoryId,
            totalPage: Math.ceil(articles.length / count),
            articles: results
        });
    } else {
        const articles = await Article.find({title: new RegExp(q + '.*', 'i')}).exec();
        const results = articles.slice(index, index + count);

        ctx.render('search', {
            title: '搜索结果列表页面',
            keyword: q,
            currentPage: (page + 1),
            query: 'q=' + q,
            totalPage: Math.ceil(articles.length / count),
            articles: results
        });
    }
}
