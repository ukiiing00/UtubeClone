# UTUBE Clone

## SET UP

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