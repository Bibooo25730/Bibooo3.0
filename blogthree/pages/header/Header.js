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
            <nav>
               <ul className={header.nav_container}>
                  <div className={[`${header.leftButton} animate__animated animate__fadeInLeft`]}>
                  <li className={header.li } onClick={handleClick}><i className={`icon icon-brightness-moon ${show?'hidden':'show'}`}></i> 
                   <i className={`icon icon-brightness-sun  ${show?'show':'hidden'}`}></i>
                  </li>
                  <li className={header.li }> <a href=''>工具箱</a> </li>
                  <li className={header.li }><a href=''>关于</a></li>
                  </div>
                
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