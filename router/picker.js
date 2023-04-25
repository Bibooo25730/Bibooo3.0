const express = require('express');
const Jimp = require("jimp");
const fs = require("fs");
const router = express.Router();
const server = require("../server/colorpicker");
const multer = require("multer");
// const app = express();
// app.use(express.json())
// app.use('/static', express.static(__dirname + '/public'));
const path = 'D:/code/myBolg3.3/public';
let paths = '';
let name = '';
const storage = multer.diskStorage({
  // 设置文件保存目录
  destination: function (req, file, cb) {
    cb(null, path)
  },
  // 设置文件名称
  filename: function (req, file, cb) {
    console.log('中间件',file)
    name =file.originalname;
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + '.jpg');
    return paths = path + '/' + file.fieldname + '-' + uniqueSuffix + '.jpg';
  }
})
const upload = multer({ storage: storage })
// 上传图片
router.post('/ComPress', upload.single('image'), compression);
router.post('/download',dowmload)
function compression(req, res, next) {
  // 压缩图片
  Jimp.read(paths)
    .then((lenna) => {
      lenna.quality(60)
      lenna.write(paths);
      res.send('OK')
    }).catch((err) => {
      console.log(err)
    });

}
// 下载压缩图片接口
function dowmload(req,res){  // 获取 截图
  console.log(req.body)
  console.log(req.itrem)
  console.log(req.data);
  console.log(req.body.itrem)
}
module.exports = router;