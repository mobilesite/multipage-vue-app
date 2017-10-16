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

// index
childRouter.get('/', body, indexCtrl.showIndex);
childRouter.get('/search', body, indexCtrl.showSearch);

// user
childRouter.post('api/user/register', body, userCtrl.register);
childRouter.post('api/user/signin', body, userCtrl.sign);
childRouter.post('api/user/logout', body, userCtrl.register);
childRouter.post('api/user/del', body, checkToken, userCtrl.sign);
childRouter.get('api/user/my', body, checkToken, userCtrl.my);

// article
childRouter.delete('/api/article/list', body, checkToken, userCtrl.checkAdmin, articleCtrl.del);

// comment
childRouter.post('api/user/comment', body, checkToken, commentCtrl.save);

module.exports = childRouter;
