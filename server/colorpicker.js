

 function compression(req,res,next){
    console.log(req.file)
    // console.log(req)
    // 当前时间创建的图片
    // let time = Date.now();
//     Jimp.read("../public/cs.png")
//   .then((lenna) => {
//     lenna.quality(60)
//     lenna.write( time + 'lena-small-bw.jpg');
//   })
  
//   .catch((err) => {
//     res.send(err);
//   });
  // let path = time + 'lena-small-bw.jpg';
//   setTimeout(()=>{
//     fs.unlink(path,function(err){
//         console.log('File deleted!');
//        console.log(err)
//     })
//   },3000)
}
module.exports = {
    compression
}
