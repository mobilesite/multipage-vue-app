'use strict';

const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const jsonFormat = require('json-format');
const logger = require('koa-logger');
const onerror = require('koa-onerror');
const staticServe = require('koa-static');
const session = require('koa-session');
const gzip = require('koa-gzip');
const path = require('path');
const render = require('koa-ejs');
const frontendRouter = require('./routes/frontend');
const adminRouter = require('./routes/admin');
const apiRouter = require('./routes/api');

app.keys = ['secrethere'];

const CONFIG = {
    key: 'paianblog',
    maxAge: 86400000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false
};

render(app, {
    root: path.join(__dirname, 'views'),
    layout: '__layout',
    viewExt: 'html',
    cache: false,
    debug: true
});

//装载子路由
router.use(frontendRouter.routes(), frontendRouter.allowedMethods());
router.use('/admin', adminRouter.routes(), adminRouter.allowedMethods());
router.use('/api', apiRouter.routes(), apiRouter.allowedMethods());

//日志
app.use(logger());
//进行错误输出
onerror(app);

app
    .use(gzip())
    .use(session(CONFIG, app))
    .use(staticServe(__dirname + '/public'))
    .use(router.routes())                      //加载路由中间件
    .use(router.allowedMethods());

app.listen(80);

//其实也可以在多个端口启动同一个应用
console.log('listening on port 80');
