'use strict';

module.exports = {
    success: {
        code: 0,
        msg: '操作成功'
    },
    parameterError: {
        code: 101,
        msg: '参数错误'
    },
    usernameExisted: {
        code: 201,
        msg: '用户名已存在'
    },
    usernameNotExist: {
        code: 202,
        msg: '用户名不存在'
    },
    passwordNotMatch: {
        code: 211,
        msg: '密码错误'
    },
    noToken: {
        code: 221,
        msg: '未登陆禁止访问'
    },
    tokenExpired: {
        code: 222,
        msg: 'token已失效'
    },
    tokenInvalid: {
        code: 223,
        msg: 'token不合法'
    }
}
