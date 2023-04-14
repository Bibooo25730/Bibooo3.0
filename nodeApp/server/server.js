/**
 * 描述: 入口文件
 * 作者: Bibooo
 * 日期: 2023-04-14
*/
const express = require("express");
const cors = require("cors")
const routes = require("../router/router");
const app = express();

app.use(cors()); //注入 cors 模块解决跨域
app.use("/",routes);
app.listen(8088, () => {
	console.log(`server started at localhost:8088}`)
});