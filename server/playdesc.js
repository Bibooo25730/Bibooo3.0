function Stardesc(req,res,next){
    let StarField = [{
      id:'1',
      title:'星蝶公主 第一季 Star vs. the Forces of Evil (2015)',
      names:'公主闯天关',
      Director:'Jordana Arkin，Daron Nefcy，Dave Wasson',
      type:'喜剧，动画',
      Region:'美国',
      desc:'《星蝶公主》(Star vs. The Forces of Evil)是迪士尼XD频道2015年出品的电视动画剧集。来自魔法世界的淘气公主星蝶(Star Butterfly)，被父母送到地球，和男孩马可一家一起生活。为了保护魔杖不被邪恶力量夺走，活力满满的星蝶公主和好朋友马可将穿梭于各个奇异世界，展开一场场欢乐又刺激的大冒险。'
    }]
    res.send(StarField)
}
module.exports = {
  Stardesc
}
