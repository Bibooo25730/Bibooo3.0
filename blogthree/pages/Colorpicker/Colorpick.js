import Colorcs from "./Colorpick..module.css"
import { useEffect, useState, useRef } from "react"


export default function ColorPick() {
    let [ctx, setCtx] = useState();
    // 控制预览
    let [prfboolen,setprefboolen] = useState('none');
    let refim = useRef(0);
    let refims = useRef(0);
    let cards = useRef(0);
    // 上传
    let inpref = useRef(0);
    // 预览图
    let pref = useRef(0);
    // 图片
    let [imgs,setimgs] = useState(null);
    useEffect(() => {
        var c = document.getElementById("canvas");
        let ctxs = c.getContext("2d");
        var img = document.getElementById("imgol");
        let w = img.width;
        let h = img.height;
        ctxs.drawImage(img, 0, 0, w, h);
        setCtx(ctx = ctxs)

    }, [])

    function handleTouch(event) {

        event = event || window.event;
        var x = event.nativeEvent.offsetX;
        var y = event.nativeEvent.offsetY;
        console.log(event)
        console.log(x, y)
        let pxArr = ctx.getImageData(x, y, 1, 1).data;
        let rgba = 'rgba(' + pxArr[0] + ',' + pxArr[1] + ',' + pxArr[2] + ',' + (pxArr[3] / 255) + ')';
        refim.current.style.backgroundColor = rgba;
        cards.current.style.backgroundColor = rgba;
        refims.current.textContent = rgba;
    }
    function handleDropper() {
        const resultElement = document.getElementById("cards");
        const resulthElement = document.getElementById("resulth");
        const btn1 = document.getElementById("btn1");
        if (!window.EyeDropper) {
            resulthElement.textContent =
                "您的浏览器不支持EyeDropper API";
            return;
        }
        const eyeDropper = new EyeDropper();
        eyeDropper
            .open()
            .then((result) => {
                resultElement.style.backgroundColor = result.sRGBHex;
                resulthElement.textContent = result.sRGBHex;
                btn1.style.color = result.sRGBHex;
            })
            .catch((e) => {
                console.log(e)
                resulthElement.textContent = e;
            });
    }

    function handleUpload(){
        inpref.current.click()
    }
    function handleChange(e){
         const { files } = e.target;
        //  FileRender 异步读取计算机文件
         const reader = new FileReader();
         setimgs(imgs = files[0])
        //  readAsDataURL 指定 bold内容或file
         reader.readAsDataURL(files[0])
         reader.onload = (evt)=>{
            // 预览展示图片
            pref.current.src = evt.currentTarget.result;
            setprefboolen(prfboolen = 'block')
            
         }   
    }
    function handleExit(){
        pref.current.src = '';
        // 输出第一次上传的文件，再次上传相同文件，无法触发 change 事件
        inpref.current.value ='';
        setprefboolen(prfboolen = 'none');

    }
    // 上传压缩图片接口
    function handleUploadServer(){
        let formdate = new FormData();
        formdate.append("imges",imgs);
         fetch('http://localhost:8088/api/ComPress',{
            method:'POST',
            headers:{'Content-Type':`application/json;`},
            body:`item="213"`,
         }).then((res)=>{
            console.log(res)
         })
        //  let imgMime = '';
        //  switch(imgs.type){
        //     case 'image/png':
        //         imgMime = imgs.type;
        //     break;
        //     case 'image/gif'
        //  }
    }   
    return (
        <div className={Colorcs.Colorcontainer}>
            <div className={Colorcs.name}>
                <div className={Colorcs.Contas}>
                    <i className={'iconfont icon-yanse'}></i> <h1>图片拾色器+压缩</h1>
                </div>
              
                <div className={Colorcs.ShangC}>
                    <i title="点击我" onClick={handleUpload} className={' iconfont icon-shangchuantupian'}>
                    <input ref={inpref} style={{display:'none'}} className={Colorcs.file} onChange={handleChange} type='file' accept="image/*"></input>  
                           </i>
                    <span className={Colorcs.ftp}>上传图片</span>
                </div>
            </div>
            <div id="cards" className={Colorcs.cardCon}>
                <div ref={cards} className={Colorcs.card} >
                    <div className={Colorcs.imgol}   >

                        {/* <img id="imgol" style={{display:'none'}}   src="http://localhost:3000/_next/static/media/bg.a99082d1.png"></img> */}
                        <canvas style={{ display: 'none' }} id="canvas" onClick={handleTouch} width="885" height="497"></canvas>
                        {/* <Image src=""
                      alt="headPic" priority width={120}
                  height={120}></Image> */}
                        <div ref={refim} className={Colorcs.cardsm}>

                        </div>
                    </div>
                    <h3 ref={refims}>rgba()</h3>
                </div>
                <div className={Colorcs.cards}>
                    <h3>拾色器</h3>
                    <p>点击下面的按钮，在你的屏幕上任何地方选择一种颜色！</p>
                    <button className={Colorcs.btn} onClick={handleDropper}>
                        <i id="btn1" title="点击我" className={' iconfont icon-bi'}></i>
                    </button>
                    <p id="result">Selected colour:</p>
                    <h3 id="resulth">rgba()</h3>
                    
                        <div className={Colorcs.colorFiex}>
                            <div className={Colorcs.yello}></div>
                            <div className={Colorcs.origin}></div>
                            <div className={Colorcs.purper}></div>
                        </div>
                </div>
            </div>
            {/* 弹窗预览图片 */}
            
            <div style={{display:prfboolen}}  className={Colorcs.Preview}>
                <div  className={Colorcs.Prevs}>
                    <div className={Colorcs.title}>
                        <div className={Colorcs.icon}>
                             <i  className={' iconfont icon-point'}></i>
                             <span className={Colorcs.toolip}>本网站会保障你的隐私安全，数据会在一定时间内自动删除，并且会帮你压缩图片下载到你的电脑上面。</span>
                        </div>
                       
                    <h3>预览图片</h3>
                     <a title="点击我上传" onClick={handleUploadServer}>确定上传</a>
                        
                     
                    </div>
                    
                <img ref={pref} className={Colorcs.privimg}/>
                {/* 重新选择，取消 */}
                <div className={Colorcs.re}>
                    <div className={Colorcs.res}>
                    <i title="重新上传" onClick={handleUpload} className={' iconfont icon-shangchuantupian'}></i>
                    </div>
                 <a onClick={handleExit}>取消</a>
                </div>
                </div>
               
            </div>
        </div>
    )
}