'use strict';

const Router = require('koa-router');
const childRouter = new Router();
const body = require('koa-body')();
const checkToken = require('../token/check');

const indexCtrl = require('../app/controllers/index');
const userCtrl = require('../app/controllers/user');
const articleCtrl = require('../app/controllers/article');
const commentCtrl = require('../app/controllers/comment');
const categoryCtrl = require('../app/controllers/category');

// index
childRouter.get('/', body, indexCtrl.showIndex);
childRouter.get('/search', body, indexCtrl.showSearch);

// user
childRouter.get('/register', body, userCtrl.showRegister);
childRouter.get('/signin', body, userCtrl.showSignin);

// article
childRouter.get('/article/:id', body, articleCtrl.showDetail);

module.exports = childRouter;
