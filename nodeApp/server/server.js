/**
 * 描述: 入口文件
 * 作者: Bibooo
 * 日期: 2023-04-14
*/
const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");
const routes = require("../router/router");
const app = express();
const PORT = process.env.port || 8088
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors()); //注入 cors 模块解决跨域


app.use("/",routes);
app.listen(PORT, () => {
	console.log(`server started at localhost:${PORT}}`)
});