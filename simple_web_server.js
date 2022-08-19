/**
 * <node.js가 제공하는 내장 모듈인 http를 이용한 매우 간단한 웹서버>
 */ 

const http = require('http');
 
http.createServer((rq, rs) => {
    rs.statusCode = 200;
    rs.setHeader('Content-Type', 'text/plain');
    rs.end('Hello World');
}).listen(7777);
