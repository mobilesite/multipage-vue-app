'use strict';

module.exports = (ctx, status, body) => {

    if (body.data === undefined) {
        body.data = null;
    }

    ctx.status = status;
    ctx.body = body;
};
