// 测试
function compression(req,res,next){
    console.log('123',req)
    res.send('123')
}
module.exports = {
    compression
}
