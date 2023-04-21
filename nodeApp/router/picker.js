const express = require('express');
const router = express.Router();
const server = require("../server/colorpicker");

// 上传图片
router.post('/ComPress',server.compression);

module.exports = router;