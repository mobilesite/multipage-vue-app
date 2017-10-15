'use strict';

const err = require('../config/error');
const respond = require('../utils/respond');
const Category = require('../models/category');

/**
 * ----------------- 数据库的操作 --------------
 */

// admin post movie
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

/**
 * ----------------- 页面的操作 --------------
 */

// show new category page
module.exports.showNew = async (ctx) => {
    ctx.render('category_edit', {
        title: '新建分类',
        category: {}
    });
};

// show edit category page
module.exports.showEdit = async (ctx) => {
    const categoryObj = ctx.req.body.category;
    const id = categoryObj._id;

    if (id) {
        const category = await Category.findById(id).exec();
        ctx.render('category_edit', {
            title: '分类编辑',
            category: category
        });
    }
};

// show category list page
module.exports.showList = async (ctx) => {
    const categories = await Category.getAll().exec();

    ctx.render('category_list', {
        title: '分类列表',
        categories: categories
    })
};


