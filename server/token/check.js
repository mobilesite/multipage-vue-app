/**
 * 校验token
 */
'use strict';

const jwt = require('jsonwebtoken');
const respond = require('../utils/respond');
const err = require('../config/error');
const config = require('../config/main');
const secret = config.secret;

module.exports = async (ctx, next) => {
    /**
     *
     请求时，token会出现在ctx.request.header下的authorization中，格式为：Bearer Token
     例如，下面这个authorization中，xxxxx就是Bearer，而空格后面那一大串内容就是token了
     'xxxxx ecccccccJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzxxxxiwiaWF0IjoxNDk0NDA1MDg4LCJleHAiOjE0OTQ0MDUwODh9.57iy3sL9TG0MTXBS7Xr6SS0QGRZObrivUloy-12xxgt'
     */
    const authorization = ctx.get('Authorization');
    if (!authorization) {
        //请求头中没有Authorization
        respond(ctx, 401, {
            code: err.noToken.code,
            msg: err.noToken.msg
        });
        ctx.redirect('/signin');
        next();
    }
    const token = authorization.split(' ')[1];
    try {
        //先单独检查token是否过期：
        const decoded = jwt.decode(token, secret);
        // 解出来形式如下：
        // { userId: '1234567890', iat: 2394403412, exp: 1984405243 }
        if(decoded.exp <= new Date()/1000){
            respond(ctx, 401, {
                code: err.tokenExpired.code,
                msg: err.tokenExpired.msg
            });
            ctx.redirect('/signin');
            next();
            return;
        }

        // 如果token过期或验证失败，下面这个语句都将抛出错误
        let tokenContent = await jwt.verify(token, secret);
    } catch (err) {
        //token不合法
        ctx.app.error({
            name: 'tokenInvalid',
            message: 'token不合法'
        });

        respond(ctx, 401, {
            code: err.tokenInvalid.code,
            msg: err.tokenInvalid.msg
        });
        ctx.redirect('/signin');
        next();
    }

    await next();
};

