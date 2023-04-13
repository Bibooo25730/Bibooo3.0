import Colorcs from "./Colorpick..module.css"
import {useEffect,useState,useRef} from "react"


export default function ColorPick(){
    let [ctx,setCtx] = useState();
    let refim = useRef(0);
    useEffect(()=>{
             var c= document.getElementById("canvas");
             let ctxs=c.getContext("2d");
             var img=document.getElementById("imgol");
             let w = img.width;
             let h = img.height;
            ctxs.drawImage(img,0,0,w,h);
           setCtx(ctx = ctxs)
            
    },[])
 
   function handleTouch(event){
    
      event = event || window.event;
      var x = event.nativeEvent.offsetX;
      var y = event.nativeEvent.offsetY;
      console.log(event)
      console.log(x,y)
      let pxArr = ctx.getImageData(x, y, 1, 1).data;
      let rgba = 'rgba(' + pxArr[0] + ',' + pxArr[1] +',' + pxArr[2] + ',' + (pxArr[3] / 255) + ')';
      refim.current.style.backgroundColor = rgba;
   
      console.log(pxArr)
      }
     
  
   
    return(
        <div className={Colorcs.Colorcontainer}>
            <div className={Colorcs.name}>
                <div className={Colorcs.Contas}>
                <i className={'iconfont icon-yanse'}></i> <h1>图片拾色器</h1>
                </div>
              
               <div className={Colorcs.ShangC}>
                   <i title="点击我" className={' iconfont icon-shangchuantupian'}>         </i>
                   <span className={Colorcs.ftp}>上传图片</span>
                   
               </div>
            </div>
             <div className={Colorcs.cardCon}>
                 <div className={Colorcs.card} >
                     <div  className={Colorcs.imgol}   >
                        <img id="imgol" onMouseMove={handleTouch}  src="http://localhost:3000/_next/static/media/bg.a99082d1.png"></img>
                        <canvas  style={{display:'none'}} id="canvas"   width="885" height="497"></canvas>
                     {/* <Image src=""
                      alt="headPic" priority width={120}
                  height={120}></Image> */}
                      <div ref={refim} className={Colorcs.cardsm}>
                         
                      </div>
                     </div>
                
                 </div>
             </div>
        </div>
    )
}