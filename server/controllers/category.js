'use strict';

const err = require('../config/error');
const respond = require('../utils/respond');
const Category = require('../models/category');

/**
 * ----------------- 数据库的操作 --------------
 */

// save category
module.exports.save = async (ctx) => {
    const categoryObj = ctx.req.body.category;
    const id = categoryObj._id;
    let newCategory;

    if (id) {
        const category = await Category.findById(id).exec();
        newCategory = _.extend(category, categoryObj);
    } else {
        newCategory = new Category(categoryObj);
    }

    await newCategory.save().exec();
    ctx.redirect('/admin/category/list');
};

// get all category
module.exports.getAll = async (ctx) => {
    await Category.getAll().exec();
};

/**
 * ----------------- 页面的操作 --------------
 */

// show category list page
module.exports.showArticle = async (ctx) => {
    const categories = await Category.getAll().exec();

    await ctx.render('category_list', {
        title: '分类列表',
        layout: false,
        categories: categories
    })
};


