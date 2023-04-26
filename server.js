/**
 * 描述: 入口文件
 * 作者: Bibooo
 * 日期: 2023-04-14
*/
const express = require("express");
const cors = require("cors")
// const bodyParser = require("body-parser");
const routes = require("./router/router.js");
const app = express();
const PORT = process.env.PORT || 8080;
// app.use(express.text({type:"*/*"}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// 设置静态目录
app.use(express.static(__dirname + '/public'))
app.use(cors()); //注入 cors 模块解决跨域

// 测试
app.get("/",(req,res)=>{
	res.send("Hi Hello word123");
})
app.use("/",routes);
app.listen(PORT, () => {
	console.log(`server started at localhost:${PORT}`)
});