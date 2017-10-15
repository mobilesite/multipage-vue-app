'use strict';

const article = require('../models/article');
const user = require('../models/user');
const router = require('koa-router')();
const body = require('koa-body')();

const list = {
    reg: async ctx => {
        const params = ctx.request.body;
        const userName = params.name;

        if (!(await user.thereIs(userName))) {
            await user.addUser(userName, params.password);
            ctx.session.name = userName;
            ctx.redirect('/');
        } else {
            ctx.redirect('/reg');
        }
    },
    login: async ctx => {
        const params = ctx.request.body;
        const userName = params.name;

        if (await user.pswRight(userName, params.password)) {
            ctx.session.name = userName;
            ctx.redirect('/');
        } else {
            ctx.redirect('/login');
        }
    },
    logout: async ctx => {
        ctx.session = null;
        ctx.redirect('/login');
    },
    regRender: async ctx => {
        await ctx.render('/register', {title: '用户注册'});
    },
    loginRender: async ctx => {
        await ctx.render('/login', {title: '用户登录', layout: false});
    },
    indexRender: async ctx => {
        await ctx.render('/index', {title: '首页'});
    },
    myRender: async ctx => {
        if (await user.thereIs(ctx.session.name)) {
            await ctx.render('/my', {title: '我的'});
        } else {
            ctx.redirect('/');
        }
    },
    articleRender: async ctx => {
        const title = ctx.query.title;
        const docs = await article.find({title});
        await ctx.render('/article', {title: '文章', name: title, article: docs[0].text});
    }
};

router
    .get('/', body, list.indexRender)
    .get('/login', body, list.loginRender)
    .post('/login', body, list.login)
    .get('/my', body, list.myRender)
    .get('/article', body, list.articleRender);

module.exports = router;
