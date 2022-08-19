/*
var a = 1;
var b =2;

function add(x,y){
    var result = x + y;
    return result;
}

var result = add(a,b);

console.log(result);
*/

/**
 * 파일 읽기(동기화 방식)
 */
/*
const fs = require('fs');
var data = fs.readFileSync('c:/Temp/read.txt','utf-8');
console.log(data);
console.log('Done');
*/
/**
 * 파일 읽기(비동기 방식)
 */
/*
 const fs = require('fs');
 fs.readFile('c:/Temp/read.txt','utf-8',(err,data)=>{
     if (err) return console.log(err);
  
     console.log(data);
 });
*/

const fs = require('fs');

function callb(err,data){
    if (err) return console.log(err);
    console.log(data)
}

 fs.readFile('c:/Temp/read.txt','utf-8',callb);
 console.log('done.'); 
