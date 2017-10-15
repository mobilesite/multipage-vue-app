'use strict';

module.exports.index = function (ctx, next) {
    ctx.response.body = `
  Welcome to index!
  
  下面通过ctx上挂在的API打印一些request中包含的信息：
  url: ${ctx.url}
  method: ${ctx.method}
  header: ${jsonFormat(ctx.header, {
        type: 'space',
        size: 4
    })}
  fresh: ${ctx.fresh}
  stale: ${ctx.stale}
  host: ${ctx.host}
  path: ${ctx.path}
  querystring: ${ctx.querystring}
  search: ${ctx.search}
  type: ${ctx.req.type}
  query: ${ctx.req.query}
  protocol: ${ctx.protocol}
  secure: ${ctx.secure}
  ip: ${ctx.ip}
  ips: ${jsonFormat(ctx.ips)}
  subdomains: ${jsonFormat(ctx.subdomains)}
  
  判断Content-Type：
  is('html'): ${ctx.is('html')}
  is('text/html'): ${ctx.is('text/html')}
  is('application/json'): ${ctx.is('application/json')}
  is('image/*'): ${ctx.is('image/*')}
  
  判断Accept：
  accepts('html'): ${ctx.accepts('html')}
  accepts('text/html'): ${ctx.accepts('text/html')}
  accepts('application/json'): ${ctx.accepts('application/json')}
  accepts('image/png'): ${ctx.accepts('image/png')}
  `;
}
