'use strict';

const Router = require('koa-router');
const childRouter = new Router();
const body = require('koa-body')();
const checkToken = require('../token/check');

const indexCtrl = require('../controllers/index');
const userCtrl = require('../controllers/user');
const articleCtrl = require('../controllers/article');
const commentCtrl = require('../controllers/comment');
const categoryCtrl = require('../controllers/category');

// user
childRouter.get('/admin/user/list', body, checkToken, userCtrl.checkAdmin, userCtrl.showList);

// article
childRouter.get('/admin/article/new', body, checkToken, userCtrl.checkAdmin, articleCtrl.showNew);
childRouter.get('/admin/article/update/:id', body, checkToken, userCtrl.checkAdmin, articleCtrl.showUpdate);
childRouter.post('/admin/article', body, checkToken, userCtrl.checkAdmin, articleCtrl.savePoster, articleCtrl.save);
childRouter.get('/admin/article/list', body, checkToken, userCtrl.checkAdmin, articleCtrl.showList);

// category
childRouter.get('/admin/category/new', body, checkToken, userCtrl.checkAdmin, categoryCtrl.new);
childRouter.post('/admin/category', body, checkToken, userCtrl.checkAdmin, categoryCtrl.save);
childRouter.get('/admin/category/list', body, checkToken, userCtrl.checkAdmin, categoryCtrl.list);

module.exports = childRouter;
