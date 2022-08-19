
/**
 * express를 이용한 web서버 구현
 */
let express = require("express");
let app     = express();
 
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/hi", (req, res) => {
    res.send("hi hi");
});
 
app.listen(8888);
console.log('running......');

/**
 * request 'data'parameter의 내용을 C:/Temp/data.txt에 저장
 */
const fs    = require('fs');
app.get("/save", (req, res) => {
    var data = req.param('data');
    fs.writeFileSync("C:/Temp/data.txt", data);
    res.send(data);
});

/**
 * C:/Temp/index.html의 내용을 읽어서 뿌려주기
 */
app.get("/get", (req, res) => {    
    var data = fs.readFileSync("C:/Temp/index.html", 'utf-8');
    res.send(data);
});


/**
 * public 이라는 폴더를 만들고, html을 하나 작성
 * public 으로 들어 오면 /public/index.html이 나오게....
 */
app.use('/public', express.static(__dirname + '/public'));



