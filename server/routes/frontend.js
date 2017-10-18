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
childRouter.get('', body, indexCtrl.showIndex);  //注意这里不能写/
childRouter.get('/search', body, indexCtrl.showSearch);

// user
childRouter.get('/register', body, userCtrl.showRegister);
childRouter.get('/signin', body, userCtrl.showSignin);
childRouter.get('/my', body, userCtrl.showMy);

// article
childRouter.get('/article/:id', body, articleCtrl.showDetail);

module.exports = childRouter;
