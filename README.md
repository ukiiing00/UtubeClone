# SET UP

## npm init
package.json setting

## run
npm run {scripts-key}

## npm i
package.json > dependencies 

## package.json > devDependencies 
for developer

### Babel
npm install --save-dev @babel/core
npm install @babel/preset-env --save-dev
최신 자바스크립트를 node가 이해하도록 컴파일 해줌 

babel compile script

babel-node *.js

### Nodemon
npm install @babel/core @babel/node --save-dev
npm i nodemon --save-dev
nodemon --exec npm run babel-node -- path/to/script.js
파일이 수정되면 재실행 해줌