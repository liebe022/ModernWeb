
/**
 * express를 이용한 web서버 구현
 */
let express = require("express");
let app     = express();
 
app.get("/", (req, res) => {
    res.send("Hello World");
});
 
app.listen(8888);
