# 用Koa开发Web服务端

## Koa2

Koa需要支持ES2015和async function的node v7.6.0或更高版本。在node 7.6版本以下，如果你想在koa里使用async functions，推荐babel转码（具体配置见下面这个Koa2文档）。

文档：[https://github.com/guo-yu/koa-guide](https://github.com/guo-yu/koa-guide)

一个 Koa Application（以下简称 app）由一系列 generator 中间件组成。按照编码顺序在栈内依次执行。什么是 generator 中间件呢？

在Koa1中就是一个用`function *`声明的generator函数：

```
function *(){
  //some codes here
}
```

而在Koa2中，一个中间件除了可以是上面这种形式外，还可以是下面这样一个函数：

```
function(context, next) {
  //some codes here
}
```

Koa2 支持以下三种中间件函数：

```
// common function
app.use((ctx, next) => {
    const start = new Date();
    return next().then(() => {
        const ms = new Date() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    });

});

// async function
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// generator function
.use(co.wrap(function *(ctx, next) {
    const start = new Date();
    yield next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}));

```

## koa-router

文档：[https://github.com/alexmingoia/koa-router](https://github.com/alexmingoia/koa-router)

## nodemon——修改node.js代码后，自动重启服务器的程序

在服务出错时可以直接输入`rs`命令进行重启，而不用先结束服务再去重启，非常的方便。

文档：[https://github.com/remy/nodemon](https://github.com/remy/nodemon)


## 启动

（1）启动数据库服务：

```
cd d:\mongodb\bin
.\mongod.exe --dbpath="d:\mongodb\data\db"
```

（2）启动服务器：

```
cd server
nodemon app.js
```

