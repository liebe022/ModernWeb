
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
