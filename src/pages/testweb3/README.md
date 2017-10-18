## 启动一个测试节点

```
geth --rpc  --rpcaddr="localhost" --rpcport="8545" --rpccorsdomain "*"
```
rpccorsdomain是解决类似下面这样的跨域问题：

  Failed to load http://localhost:8545/: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present

或者：

```
geth removedb    #要先删除原有的数据，要不然下一句会执行失败
geth --datadir "~/work/testweb3" --dev
geth init ~/work/testweb3/genesis.json
geth --ws  --wsaddr="localhost" --wsport="8545" --wsorigins "*" --wsapi="eth,net,web3,db" --dev
```

--ws                   开启 WS-RPC 服务

--wsaddr value         WS-RPC 服务地址(默认: "localhost")

--wsport value         WS-RPC 服务端口 (默认: 8546)

--wsapi value          WS-RPC 提供的API(默认: "eth,net,web3")

--wsorigins value      接受websocket请求的源地址

更多关于geth的选项参见：

http://gi1.cn/topics/966

http://blog.csdn.net/CHENYUFENG1991/article/details/53458175?locationNum=7&fps=1

## 通过geth来配置以太坊私有链，是学习以太坊的入门步骤。而其中，如何配置genesis.json，又是最关键的一步。如果在其中产生错误，有些会导致无法初期化私有链，有些却会导致在以后的学习过程中发生各种莫名其妙的错误。

但是，现在网上能找到的配置内容，很多只适用于v1.4之前的版本，甚至连geth自身在github上的genesis.json，其中的chainId配置，也有问题。

基于笔者自身实践，以下genesis.json可以适用于现在的geth版本(v1.6.6）

{
  "config": {
     "chainId": 10,
     "homesteadBlock": 0,
     "eip155Block": 0,
     "eip158Block": 0
  },
  "alloc"      : {},
  "coinbase"   : "0x0000000000000000000000000000000000000000",
  "difficulty" : "0x02000000",
  "extraData"  : "",
  "gasLimit"   : "0x2fefd8",
  "nonce"      : "0x0000000000000042",
  "mixhash"    : "0x0000000000000000000000000000000000000000000000000000000000000000",
  "parentHash" : "0x0000000000000000000000000000000000000000000000000000000000000000",
  "timestamp"  : "0x00"
}

常遇到的几个错误：

Fatal: invalid genesis file: missing 0x prefix for hex data：这个错误信息意思很明白，就是你的json文件中，对于16进制数据，需要加上0x前缀

Fatal: invalid genesis file: hex string has odd length: 从v1.6开始，设置的十六进制数值，不能是奇数位， 比如不能是0x0，而应该是0x00。

Fatal: failed to write genesis block: genesis has no chain configuration ：这个错误信息，就是说，你的json文件中，缺少config部分。看到这个信息，我们不需要把geth退回到v1.5版本，而是需要加上config部分。

Error: invalid sender undefined: 这个错误不会导致初始化失败，但是会在以后的转账（eth.sendTransaction），或者部署智能合约的时候产生。解决方法就是chainId 不能设置为0。 如果你完全按照github上给的官方配置文件，就会产生这个错误。


注意：

config下的chainId不能设置为0，否则在转账（eth.sendTransaction）的时候会产生如下错误：

     eth.sendTransaction({from: acc0, to: acc1, value: amount})
     Error: invalid sender
         at web3.js:3104:20
         at web3.js:6191:15
         at web3.js:5004:36
         at <anonymous>:1:1

## 创建account

```
geth console   #进入geth命令行模式
eth.accounts   #查看现有账户
personal.newAccount("milon")  #创建一个账户，括号里面的参数是密码
personal.newAccount("dennis")  #创建一个账户
personal.newAccount("voli")  #创建一个账户
personal.newAccount("wml")  #创建一个账户

```

##

```
personal.unlockAccount(eth.accounts[1])   #输入密码解锁账户
amount = web3.toWei(0.0000001,'ether')
eth.sendTransaction({from:eth.accounts[1],to:eth.accounts[0],value:amount})
```

## 配置ihost

127.0.0.1 www.test.com

127.0.0.1 static.test.com

##


