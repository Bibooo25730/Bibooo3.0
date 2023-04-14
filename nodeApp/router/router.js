/**
 * 描述: 初始化路由信息
 * 作者: Bibooo
 * 日期: 2023-04-14
*/
const express = require('express');
const picker = require("./picker"); //注入图片拾色器
const router = express.Router(); 

router.use('/api', picker); 

module.exports = router;