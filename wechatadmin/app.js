/**
 * Created by milon on 2017/10/10.
 */
'use strict'
var Koa = require('koa');
var sha1 = require('sha1');
var config = {
  wechat: {
    appID: 'wxd26c47e9fef261b8',
    appSecret: '7c80e41cebbec2394dd44b374ae5b590',
    token: 'paian'
  }
}

var app = new Koa();
app.use(function *(next){
  console.log(this.query)

  var token = config.wechat.token;

  var signature = this.query.signature;
  var nonce = this.query.nonce;
  var echostr = this.query.echostr;
  var timestamp = this.query.timestamp;

  var str = [token, timestamp, nonce].sort().join('');
  var sha = sha1(str);

  if(sha === signature){
    this.body = echostr + '';
  } else {
    this.body = 'wrong';
  }
})

app.listen(8000);
console.log('listening: 8000');
