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
let  uniqueSuffix = 0;
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
    uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '.jpg');
    return paths = path + '/'  + uniqueSuffix + '.jpg';
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
      res.status(404);
      res.send(err)
    });

}
// 下载压缩图片接口
function dowmload(req,res){  // 获取 截图
  // let img = req.body;
  // if(img.imgName == name){
  //   let imgN = {
  //       urL:'http://localhost:8080/'+ uniqueSuffix + '.jpg'
  //   }
  // res.send( imgN)
  // }
  res.sendFile("D:/code/myBolg3.3/public/1682524084559-696858962.jpg")
    
}
module.exports = router;