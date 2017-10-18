'use strict';

const Router = require('koa-router');
const childRouter = new Router({
    prefix: '/admin'
});
const body = require('koa-body')();
const checkToken = require('../token/check');

const indexCtrl = require('../controllers/index');
const userCtrl = require('../controllers/user');
const articleCtrl = require('../controllers/article');
const commentCtrl = require('../controllers/comment');
const categoryCtrl = require('../controllers/category');

// user
childRouter.get('/user/list', body, checkToken, userCtrl.checkAdmin, userCtrl.showList);

// article
childRouter.get('/article/new', body, checkToken, userCtrl.checkAdmin, articleCtrl.showNew);
childRouter.get('/article/update/:id', body, checkToken, userCtrl.checkAdmin, articleCtrl.showUpdate);
childRouter.post('/article', body, checkToken, userCtrl.checkAdmin, articleCtrl.savePoster, articleCtrl.save);
childRouter.get('/article/list', body, checkToken, userCtrl.checkAdmin, articleCtrl.showList);

// category
childRouter.post('/category', body, checkToken, userCtrl.checkAdmin, categoryCtrl.showArticle);

module.exports = childRouter;
