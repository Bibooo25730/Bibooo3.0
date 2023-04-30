const express = require('express');
const Jimp = require("jimp");
const fs = require("fs");
const router = express.Router();
const multer = require("multer");
const path = 'D:/code/myBolg3.3/public';
let uniqueSuffix = 0;
let paths = '';
let name = '';
const storage = multer.diskStorage({
  // 设置文件保存目录
  destination: function (req, file, cb) {
    cb(null, path)
  },
  // 设置文件名称
  filename: function (req, file, cb) {
    console.log('中间件', file)
    name = file.originalname;
    uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '.jpg');
    return paths = path + '/' + uniqueSuffix + '.jpg';
  }
})
const upload = multer({ storage: storage })
// 上传图片
router.post('/ComPress', upload.single('image'), compression);
router.post('/download', dowmload)
router.post('/remove', remove);
function compression(req, res, next) {
  // 压缩图片
  Jimp.read(paths)
    .then((lenna) => {
      lenna.quality(60)
      lenna.write(paths);
      res.send('OK')
    }).catch((err) => {
      console.log(err)
      res.status(404);
      res.send(err)
    });

}
// 下载压缩图片接口
function dowmload(req, res, next) {  // 获取 截图
  let img = req.body;
  const options = {};
  console.log(img.imgName, name)
  if (img.imgName == name) {
    console.log(paths)
    res.sendFile(paths, options, function (err) {
      if (err) {
        next(err);
      } else {
        fs.unlink(paths, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log('删除文件成功');
          }
        })
        next();
      }
    })


  }
}
//取消图片接口，并删除
function remove(req, res) {
  let img = req.body;
  if (img.imgName == name) {
    fs.unlink(paths, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send('删除成功')
      }
    })
  }
}
module.exports = router;