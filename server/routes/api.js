'use strict';

const Router = require('koa-router');
const childRouter = new Router({
    prefix: '/api'
});
const body = require('koa-body')();
const checkToken = require('../token/check');

const indexCtrl = require('../controllers/index');
const userCtrl = require('../controllers/user');
const articleCtrl = require('../controllers/article');
const commentCtrl = require('../controllers/comment');
const categoryCtrl = require('../controllers/category');

// index


// user
childRouter.post('/user/register', body, userCtrl.register);
childRouter.post('/user/logout', body, userCtrl.logout);
childRouter.post('/user/del', body, checkToken, userCtrl.del);
childRouter.get('/user/my', body, checkToken, userCtrl.my);

// article
childRouter.delete('/api/article/list', body, checkToken, userCtrl.checkAdmin, articleCtrl.del);

// category
childRouter.get('/api/category/getAll', body, checkToken, userCtrl.checkAdmin, categoryCtrl.getAll);
childRouter.post('/api/category/save', body, checkToken, userCtrl.checkAdmin, categoryCtrl.save);

// comment
childRouter.post('api/user/comment', body, checkToken, commentCtrl.save);

module.exports = childRouter;
