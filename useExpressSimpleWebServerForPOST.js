
/**
 * express를 이용한 web서버 구현
 */
let express = require("express");
let app     = express();
 
app.listen(8888);
console.log('running......');

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// * post 처리 Start
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
// * post 처리 End
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/**
 * public 이라는 폴더를 만들고, html을 하나 작성
 * public 으로 들어 오면 /public/index.html이 나오게....
 * java의 sendRedirect 와 같은 개념..
 */
 app.use('/public', express.static(__dirname + '/public'));

app.post("/save", (req, res) => {
    var data = req.body.data;
    res.send(data);
});


app.post("/calc", (req, res) => {
    var data = req.body;
    var result = eval(data);
    res.send(String(result));
});

