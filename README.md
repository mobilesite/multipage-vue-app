# vh5

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install
npm i -g cross-env
npm i -g karma
```

# install JDK

从[http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)下载JDK进行安装。

安装成功后运行`java -version`，看安装是否成功。

如果提示命令出错，则有可能是因为环境变量没有配置，先进行环境变量配置。

# serve with hot reload at localhost:8080

`npm run dev` 或者 `sudo npm run dev`

# build for production with minification
`npm run build` 或者 `sudo npm run build`

# build for production and view the bundle analyzer report
`npm run build --report` 或者 `sudo npm run build --report`

# run unit tests
`npm run unit` 或者 `sudo npm run unit`

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# original project structure

```
.
├── build/                      # webpack config files
│   └── ...
├── config/
│   ├── index.js                # main project config
│   └── ...
├── src/
│   ├── main.js                 # app entry file
│   ├── App.vue                 # main app component
│   ├── components/             # ui components
│   │   └── ...
│   └── assets/                 # module assets (processed by webpack)
│       └── ...
├── static/                     # pure static assets (directly copied)
├── test/
│   └── unit/                   # unit tests
│   │   ├── specs/              # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e tests
│   │   ├── specs/              # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel config
├── .postcssrc.js               # postcss config
├── .eslintrc.js                # eslint config
├── .editorconfig               # editor config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```

### 生成后的vue-loader的options.json

```
{
  "loaders": {
    "css": [
      "vue-style-loader",
      {
        "loader": "css-loader",
        "options": {
          "minimize": false,
          "sourceMap": false
        }
      }
    ],
    "postcss": [
      "vue-style-loader",
      {
        "loader": "css-loader",
        "options": {
          "minimize": false,
          "sourceMap": false
        }
      }
    ],
    "less": [
      "vue-style-loader",
      {
        "loader": "css-loader",
        "options": {
          "minimize": false,
          "sourceMap": false
        }
      },
      {
        "loader": "less-loader",
        "options": {
          "sourceMap": false
        }
      }
    ],
    "sass": [
      "vue-style-loader",
      {
        "loader": "css-loader",
        "options": {
          "minimize": false,
          "sourceMap": false
        }
      },
      {
        "loader": "sass-loader",
        "options": {
          "indentedSyntax": true,
          "sourceMap": false
        }
      }
    ],
    "scss": [
      "vue-style-loader",
      {
        "loader": "css-loader",
        "options": {
          "minimize": false,
          "sourceMap": false
        }
      },
      {
        "loader": "sass-loader",
        "options": {
          "sourceMap": false
        }
      }
    ],
    "stylus": [
      "vue-style-loader",
      {
        "loader": "css-loader",
        "options": {
          "minimize": false,
          "sourceMap": false
        }
      },
      {
        "loader": "stylus-loader",
        "options": {
          "sourceMap": false
        }
      }
    ],
    "styl": [
      "vue-style-loader",
      {
        "loader": "css-loader",
        "options": {
          "minimize": false,
          "sourceMap": false
        }
      },
      {
        "loader": "stylus-loader",
        "options": {
          "sourceMap": false
        }
      }
    ]
  }
}
```

### 访问页面的地址

```
sudo npm run dev
```

然后地址栏输入:

http://localhost/home.html

配合 connect-history-api-fallback 的配置 以及 vue-router的配置之后，可以直接用：

http://localhost 访问 http://localhost/home.html
http://localhost/detail 访问 http://localhost/detail.html

一、目录结构

.happypack happypack打包是生成的目录
build  存放各种webpack打包的文件
config 主要是导出了一系列配置项，最主要的出口是config/index.js
dev    老项目的源码
dll    公共库打包过程中的文件
oldstatic   老项目通过老架构打包出来的代码，迁移到这里，目前新架构会暂时兼容它，把它拷贝到static对应的目录中
src    新架构源码
static 新架构生成的文件
test   测试目录


二、公共库的配置和打包：

在/config/common-lib-dependencies.js中修改公共库列表，这些公共库将通过dll来单独打包:

开发环境对应的dll打包命令是

```
npm run dll-dev
```

生产环境对应的dll打包命令是

```
npm run dll-build
```

配置完公共库之后，需要执行一次上述dll打包命令。

dll打包命令会将公共库打包到/dll/目录下，其中｀npm run dll-dev｀会打包到/dll/dev/下，而｀npm run dll-build｀会打包到/dll/prod/下，分别对应的是开发环境和生产环境。

虽然上述命令已经集成了将修改后的公共库配置打入项目各个页面的功能（详见package.json中，其中有 && sudo npm run dev 、 && sudo npm run build就是），但是需要注意的是/dll/目录只是一个过度性的目录，并非最终线上引用公共库打包文件的目录。


三、nginx的配置

配置两个地址，一个指向html，另一个指向附属的静态资源

```
server {
    listen       80;
    server_name  www.test.com;

    location / {
        root   /Users/dennis/work/newh5/static/html/;
        index  index.html;
    }

    location /wallet {
        root   /Users/dennis/work/newh5/static/html/;
        try_files $uri /wallet.html;
        index  wallet.html;
    }

    location /help {
        root   /Users/dennis/work/newh5/static/html/;
        try_files $uri /help.html;
        index  help.html;
    }
}

server {
    listen       80;
    server_name  static.test.com;


    location / {
        add_header 'Access-Control-Allow-Methods' 'GET,OPTIONS,PUT,DELETE' always;
        add_header 'Access-Control-Allow-Credentials' 'true' always;
        add_header 'Access-Control-Allow-Origin' '$http_origin' always;
        add_header 'Access-Control-Allow-Headers'  'Authorization,DNT,User-Agent,Keep-Alive,Content-Type,accept,origin,X-Requested-With,Qsc-Token,platform' always;
        if ($request_method = OPTIONS) {
            return 200;
        }

        root   /Users/dennis/work/newh5/static/;
        index  index.html;
    }
}
```

```
npm start
anywhere -p 9090
```

