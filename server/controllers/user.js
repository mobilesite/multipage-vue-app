'use strict';

const err = require('../config/error');
const respond = require('../utils/respond');
const User = require('../models/user');
const sha1 = require('sha1'); //用于密码加密
const createToken = require('../token/create');

/**
 * ----------------- 数据库的操作 --------------
 */

//根据用户名查询用户
const find = async (username) => {
    const user = await User.findOne({ username }).exec();
    return user;
};

//注册
module.exports.register = async (ctx) => {
    //todo 完善所需的各种字段
    const user = new User({
        username: ctx.req.body.username,
        password: sha1(ctx.req.body.password), //加密密码
        token: createToken(this.username)      //创建token
    });
    const doc = await find(user.username).exec();

    if (doc) {
        //用户名已存在
        respond(ctx, 200, {
            code: err.usernameExisted.code,
            msg: err.usernameExisted.msg
        });
    } else {
        await user.save().exec();
        respond(ctx, 200, {
            code: err.success.code,
            msg: ''                   //注册成功
        });
    };
};

//登录
module.exports.login = async (ctx) => {
    //获取请求中的账号和密码
    const username = ctx.req.body.username;
    const password = sha1(ctx.req.body.password);
    const user = await find(username);

    if (!user) {
        respond(ctx, 200, {
            code: err.usernameNotExist.code,
            msg: err.usernameNotExist.msg
        });
    } else if (password === user.password) {
        //生成一个新的token
        const token = createToken(username);

        user.token = token;
        await user.save().exec();      //将新token更新至数据库

        respond(ctx, 200, {
            code: err.success.code,
            msg: '',                   //登陆成功
            data: {
                username,
                token
            }
        });
    } else {
        respond(ctx, 200, {
            code: err.passwordNotMatch.code,
            msg: err.passwordNotMatch.msg
        });
    }
};

//退出登陆
module.exports.logout = async (ctx) => {
    //获取请求中的账号和密码
    let username = ctx.req.body.username;

    let user = await find(username);
    if (!user) {
        respond(ctx, 200, {
            code: err.usernameNotExist.code,
            msg: err.usernameNotExist.msg
        });
    } else {
        user.token = '';
        await user.save().exec();      //清除token

        respond(ctx, 200, {
            code: err.success.code,
            msg: ''                   //退出成功
        });
    }
};

//删除某个用户
module.exports.del = async (ctx) => {
    const username = ctx.req.body.username;
    await User.findOneAndRemove({ username }).exec();

    respond(ctx, 200, {
        code: err.passwordNotMatch.code,
        msg: err.passwordNotMatch.msg
    });
};

//查询我的信息
module.exports.my = async (ctx) => {
    const username = ctx.req.body.username;
    const users = await User.find({username}).exec();
    let data;

    if (!users) {
        data = null;
    } else {
        data = users
    }

    respond(ctx, 200, {
        code: err.passwordNotMatch.code,
        msg: err.passwordNotMatch.msg,
        data
    });
};

/**
 * ----------------- 页面的操作 --------------
 */

// register
module.exports.showRegister = async (ctx) => {
    await ctx.render('register', {
        title: '用户注册',
        layout: false
    });
}

// sign in
module.exports.showSignin = async (ctx) => {
    console.log('' + ctx.render, 22222222222)
    await ctx.render('signin', {
        title: '登录',
        layout: false
    });
};

// my
module.exports.showMy = async (ctx) => {
    await ctx.render('my', {
        title: '我的',
        layout: false
    });
};

// list
// 获得所有用户信息
module.exports.showList = async (ctx) => {
    const users = await User.getAll().exec();

    await ctx.render('user_list', {
        title: '用户列表',
        layout: false,
        users: users
    });
};

/**
 * ----------------- 中间件 --------------
 */

// 必须是管理员
module.exports.checkAdmin = async (ctx, next) => {
    const username = ctx.req.body.username;
    const user = await User.find({username}).exec();

    if (user !=null && user.role <= 10) {
        ctx.redirect('/signin');
    }

    next();
};
