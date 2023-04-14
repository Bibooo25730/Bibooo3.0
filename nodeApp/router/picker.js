const express = require('express');
const router = express.Router();
const server = require("../server/colorpicker");

// 上传图片
router.post('/test',server.test);

module.exports = router;