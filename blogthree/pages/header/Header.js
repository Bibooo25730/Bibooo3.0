import header from './Header.module.css'
import 'animate.css'
import Image from 'next/image'
import ActivePic from '../../public/activew.webp'
import { useState } from 'react';

export default  function Header(){
  let [show, setshow] = useState(true);
   function handleClick(){
      setshow(show = !show);
      console.log(show)
   }
     return (
        <header className={header.header}>
         {/* 左边 */}
       
          <div className={header.leftdiv}>
           <div className={header.leftContainer}>
             <div className={header.leftTop}>
              <a href='#'><Image className={header.img} src={ActivePic} alt="headPic" priority  width={120}
                height={120}></Image></a>
              </div>
              <div className={header.leftbody}>
                 <ul className={header.leftContainers}>  
                  <li> <a href=''>工具箱</a> </li>
                  <li><a href=''>关于</a></li>
                  <li> <a href=''>归档</a></li>
                  <li> <a>友链</a></li>
                  <li><i className={'icon icon-paper-plane'}></i>  </li>
                  
                 </ul>
              </div>
              <div className={header.leftfotter}>
                   <a href=''> <i className={'ic icon i-github'}></i> </a>
                   
              </div>
            </div>
            
        
          </div>
            <nav>
               <ul className={header.nav_container}>
                  <div className={[`${header.leftButton} animate__animated animate__fadeInLeft`]}>
                  <li className={header.li } onClick={handleClick}><i className={`icon icon-brightness-moon ${show?'hidden':'show'}`}></i> 
                   <i className={`icon icon-brightness-sun  ${show?'show':'hidden'}`}></i>
                  </li>
                  <li className={header.li }> <a href=''>工具箱</a> </li>
                  <li className={header.li }><a href=''>关于</a></li>
                  
                  
                  </div>
                 {/* 手机端展示 这里写的有问题 */}
                 <li className={header.Phone_SITE}>
                 <div className={header.lines}>
                     <span className={header.line}></span>
                     <span className   ={header.line}></span>
                     <span className={header.line}></span>
                   </div>
                   <div className={header.title}>
                       <h3>{process.env.NEXT_PUBLIC_NAME}</h3>
                   </div>
                     <div className={'ic  i-search'}></div>
                 </li>
                    
                  <li className={header.li , header.liimg }> 
                  <a href='#'><Image className={header.img} src={ActivePic} alt="headPic" priority  width={120}
      height={120}></Image></a>
                  </li>
                  <div className={[`${header.rightButton} animate__animated animate__fadeInRight`]}>
                  <li className={header.li}> <a href=''>归档</a></li>
                  <li className={header.li}> <a>友链</a></li>
                  <li className={header.li}><i className={'icon icon-paper-plane'}></i>  </li>
                  </div>
               </ul>
            </nav>
          
        </header>
       
     )
}

