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

#### MiniCssExtractPlugin
이 플러그인은 CSS를 별도의 파일로 추출합니다. CSS가 포함된 JS 파일별로 CSS 파일을 생성합니다. mini-css-extract-plugin을 css-loader와 결합하는 것이 좋습니다.
npm install --save-dev mini-css-extract-plugin
https://webpack.kr/plugins/mini-css-extract-plugin/

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

MiniCssExtractPlugin Options
```
plugins: [new MiniCssExtractPlugin({ filename: "css/style.css" })]
```
https://webpack.js.org/plugins/mini-css-extract-plugin/#publicpath

CssMinimizerWebpackPlugin
https://webpack.kr/plugins/css-minimizer-webpack-plugin/


### VIDEO SETUP

#### MediaDevices.getUserMedia()
The MediaDevices.getUserMedia() method prompts the user for permission to use a media input which produces a MediaStream with tracks containing the requested types of media.

https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia

#### regenerator-runtime
Regenerator로 컴파일된 생성기 및 비동기 함수를 위한 독립 실행형 런타임입니다.
npm i regenerator-runtime

#### HTMLMediaElement srcObject
HTMLMediaElement 인터페이스의 srcObject 속성은 HTMLMediaElement와 연결된 미디어의 소스 역할을 하는 객체를 설정하거나 반환합니다.
그 객체는 MediaStream, MediaSource, Blob 또는 파일(Blob에서 상속됨)일 수 있습니다.

Older versions of the Media Source specification required using createObjectURL() to create an object URL then setting src to that URL. Now you can just set srcObject to the MediaStream directly.

https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject

#### MediaStream Recording API
The process of recording a stream is simple:

1. Set up a MediaStream or HTMLMediaElement (in the form of an <audio> or <video> element) to serve as the source of the media data.
2. Create a MediaRecorder object, specifying the source stream and any desired options (such as the container's MIME type or the desired bit rates of its tracks).
3. Set ondataavailable to an event handler for the dataavailable event; this will be called whenever data is available for you.
4. Once the source media is playing and you've reached the point where you're ready to record video, call MediaRecorder.start() to begin recording.
5. Your dataavailable event handler gets called every time there's data ready for you to do with as you will; the event has a data attribute whose value is a Blob that contains the media data. You can force a dataavailable event to occur, thereby delivering the latest sound to you so you can filter it, save it, or whatever.
6. Recording stops automatically when the source media stops playing.
7. You can stop recording at any time by calling MediaRecorder.stop().

https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API

#### URL.createObjectURL()
브라우저 메모리를 사용해서 저장하고 URL을 return해줌 

https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static

### WebAssembly / ffmpeg

npm install @ffmpeg/ffmpeg @ffmpeg/util

WebAssembly(Wasm)는 스택 기반 가상 머신을 위한 이진 명령 형식입니다. Wasm은 프로그래밍 언어를 위한 이식 가능한 컴파일 대상으로 설계되어 클라이언트 및 서버 응용 프로그램을 위해 웹에 배포할 수 있습니다.

https://ffmpegwasm.netlify.app/docs/migration

