/**
 * 创建token
 */

'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config/main');
const secret = config.secret; //todo 这是加密密钥，待修改

//登录时：核对用户名和密码成功后，应将用户的id作为JWT Payload的一个属性
module.exports = (userId) => {
    const content = {
        userId: userId
    }; //要加密的内容
    const secret = 'paianblog';
    const expiresIn = 60*60*24;      //过期时间，这里设置为24小时。那么decode这个token的时候得到的过期时间为：创建token的时间 + 这里设置的值

    const token = jwt.sign(content, secret, {
        expiresIn: expiresIn
    });

    return token;
};
