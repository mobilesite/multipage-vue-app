/**
 * API路由映射
 * 自动对routes/目录下的.js文件进行扫描，将扫出来的每一个文件模块中抛出中的方法进行路由映射
 *
 * 转换规则形如：
 * User.prototype.index         -> get:/user/index
 * User.prototype.post_index    -> post:/user/index
 * User.prototype.put_index     -> put:/user/index
 * User.prototype.delete_index  -> delete:/user/index
 * User.prototype.index_param   -> get:/user/index/:param
 *
 * 其中，每个模块中抛出的方法以_来分隔method、action、param，即写成method_action_param的形式。
 */

'use strict';

const fs = require('fs');

module.exports = router => {
    const routesPath = __dirname;
    const methods = ['get', 'post', 'put', 'delete'];

    fs.readdirSync(routesPath).forEach(file => {
        if (file === 'main.js' || !(/\.js$/.test(file))) {
            return;
        }

        const routeObj = require(`${routesPath}/${file}`);
        const baseRouteName = file.replace(/\.js$/, '');

        for (let key in routeObj) {
            let methodIndex = 0;
            let method = '';
            let action = '';
            let param = '';
            let urlInfo = key.split('_');

            if (urlInfo.length === 1) {
                method = methods[methodIndex];
                action = key;
            } else if (urlInfo.length === 2) {
                if (!urlInfo[0]) {
                    continue;
                }
                methodIndex = methods.indexOf(urlInfo[0]);
                if (methodIndex === -1) {
                    method = methods[0];
                    action = urlInfo[0];
                    param = `:${urlInfo[1]}`;
                } else {
                    method = urlInfo[0];
                    action = urlInfo[1];
                }
            } else if (urlInfo.length === 3) {
                method = urlInfo[0];
                action = urlInfo[1];
                param = `:${urlInfo[2]}`;
            }

            console.log(`自动进行路由映射的结果：[/${method}]${baseRouteName}/${action}/${param}`);
            console.log('' + routeObj[key])
            router[method](`/${baseRouteName}/${action}/${param}`, routeObj[key]);
        }
    })
};
