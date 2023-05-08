import Rtclss from "./rtc.module.css";
import { useEffect, useRef, useState } from "react";

export default function Rtc() {
    // const peer = new Peer("Pick-an-id");
    let inRef = useRef();
    let secction = useRef();
    let chatcom  = useRef();
    let [peer, setPeer] = useState(null);
    // id 
    let [Pid, setId] = useState('');
    // section
    let [connser,setConn] = useState(null);
    useEffect(() => {
        const fn = async () => {
            const PeerJs = (await import('peerjs')).default;
             let peers = new PeerJs();
             setPeer(peer = peers)
             peers.on("open",function(id){
                console.log(id)
                secction.current.innerText = `状态为：对等ID:${id}`
             })
            console.log(peers)
             peer.on('connection',function(conn) {
                // 接受对方传来的数据
                secction.current.innerText = `状态为：:连接成功 `  
                conn.on('data', function(data) {
                    
                    // let conn = peer.connect(data);
                    // setConn(connser = conn);
                    console.log('收到的数据',data)                        
                    let lefttp = document.createElement('div');
                    lefttp.classList = [`${Rtclss.leftp}`];
                    let span = document.createElement('span');
                    span.innerText = '：' + data  ;
                    lefttp.appendChild(span);
                    chatcom.current.appendChild(lefttp);
               })
            //    
              conn.send('hello');
               
               setConn(connser = conn)
               
              })
            
              peer.on('DataConnection', function(conn) { 
                conn.on('open', function() {
                    // Receive messages
                    conn.on('data', function(data) {
                      console.log('Received', data);
                    });
                
                    // Send messages
                    // conn.send('Hello!');
                  });
               });
              peer.on('error',function(err){
                secction.current.innerText = `状态为：:${err.message}`
                 console.log(err)
               })
            return peers;
        }
        fn();
    }, [])
    function handleServer() {
        //   获取房间号
        let value = inRef.current.value;
        let conn = peer.connect(value);
        conn.on("open",()=>{
            secction.current.innerText = `状态为：:连接成功}`
            console.log('server',conn)
        })
        setConn(connser = conn)
           
        // console.log(peer)
    }
    function handleChange(e){
         if(e.keyCode == 13){
            let value = e.target.value;
            let rightp = document.createElement('div');
            rightp.classList = [`${Rtclss.rightp}`];
            let span = document.createElement('span');
            span.innerText = value + ':';
            rightp.appendChild(span);
            chatcom.current.appendChild(rightp);
            console.log('打字',value);
            console.log('con',connser);
          connser.send(value);
          
         } 
    }
    return (
        <div className={Rtclss.container}>
            <div className={Rtclss.wrapContainer}>
                <div className={Rtclss.left}>
                    <div className={Rtclss.wrap}>
                        <video webkit-playsinline="true" playsinline x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" className={Rtclss.video} x5-video-orientation="portraint" controls></video>
                        <div className={Rtclss.shext}><button>摄像头</button></div>
                    </div>
                </div>
                <div className={Rtclss.right}>
                <div ref={chatcom} className={Rtclss.chatcom} >
                     {/* <div ref={lefttp} className={play.leftp}> <span ></span></div>
                     <div ref={rightp} className={play.rightp}><span></span></div> */}
                     </div>
                     <div className={Rtclss.edit}>   
                          <input id={Rtclss.paragraph}  onKeyDown={handleChange}   placeholder="发送消息" rows="1" ></input>
                      
                     </div>
                    <div>发送文件</div>
                </div>
            </div>

            <div className={Rtclss.Rooms}>
                <h3>.对.视频会议</h3>
                <div className={Rtclss.server}>
                    <input ref={inRef} id={Rtclss.recId} ></input>
                    <button onClick={handleServer} className={Rtclss.btn}>连接</button>
                </div>

            </div>
            <div  ref={secction}>状态:</div>
        </div>
    )
}