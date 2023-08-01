# UTUBE Clone

## Backend SET UP

### npm init
package.json setting

### run
npm run {scripts-key}

### npm i
package.json > dependencies 

### package.json > devDependencies 
for developer

#### Babel
npm install --save-dev @babel/core
npm install @babel/preset-env --save-dev
최신 자바스크립트를 node가 이해하도록 컴파일 해줌 

babel compile script

babel-node *.js

#### Nodemon
npm install @babel/core @babel/node --save-dev
npm i nodemon --save-dev
nodemon --exec npm run babel-node -- path/to/script.js
파일이 수정되면 재실행 해줌

#### Express
 npm i express
https://expressjs.com/ko/4x/api.html#res.send

### Pug
app.set('view engine', 'pug');
app.set() / views / process.cwd() + '/view' => '/src/views'

### MongoDB
인텔맥: mongod --config /usr/local/etc/mongod.conf --fork
터미널 -> mongo
connecting to: ip copy
db.js
npm i mongoose

#### Mongoose All Schema Types Options
https://mongoosejs.com/docs/schematypes.html

#### Mongoose Middleware
https://mongoosejs.com/docs/middleware.html

#### MongoDB Operators
https://www.mongodb.com/docs/manual/reference/operator/query/

### express-session
npm i express-session

#### connect-mongo
npm i connect-mongo

### GitHub Login
https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps

### Multer
https://www.npmjs.com/package/multer

npm i multer

Don't forget the enctype="multipart/form-data" in your form.

## Frontend SET UP

### WEBPACK
React, React-Native, VUE. NEXT 등 대부분 WEBPACK을 포함하고 있음.

npm i webpack webpack-cli -D

Webpack 시작하기: https://webpack.kr/guides/getting-started/
Webpack 설정: https://webpack.kr/concepts/configuration/

Typescript환경에서 Webpack 설정하기
npm install --save-dev typescript ts-loader webpack webpack-cli
https://webpack.kr/guides/typescript/

#### Using a Configuration

webpack.config.js
from entry
to output
by module

entry => mkdir src/folder -> browser exec folder

#### NPM Script
"assets": "webpack --config webpack.config.js" 

#### rules
각각의 파일 종류에 따라 어떤 전환을 할 건지 결정하는 것
use *-loader 

#### Babel loader
https://www.npmjs.com/package/babel-loader

Build system - Webpack
npm install --save-dev babel-loader @babel/core

#### Scss Module
1. webpack의 rules 내부의 'test: /\.scss$/,' 코드에서 모든 scss파일들을 긁어온다

2. ' use: ["style-loader", "css-loader", "sass-loader"],' 코드에서 sass-loader -> css-loader -> style-loader 순으로 loader가 적용되어 긁어온 scss 파일들을 변환시킨다

2.1
sass-loader가 scss확장자 파일을 브라우저가 이해할 수 있는 css 파일로 변환시킨다
npm i sass-loader sass webpack --save-dev

2.2
css-loader가 @import, url()등의 최신형 css 코드를 브라우저가 이해할 수 있는 코드로 변환시켜 동작할 수 있도록 한다
npm i --save-dev css-loader

2.3
style-loader가 위 과정으로 변환시킨 css 코드를 DOM 내부에 적용시켜준다
npm i --save-dev style-loader


4. 변환된 코드가 output에서 설정된 파일 경로에 설정된 파일명으로 저장된다

5. 저장된 변환 js 코드를 pug 파일에 적용시키기 위해 'script(src="/static/js/main.js")' 코드를 통해 긁어와 적용시킨다