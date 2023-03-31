import header from './Header.module.css'
export default  function Header(){
     return (
        <header className={header.header}>
            <nav>
               <ul className={header.nav_container}>
                  <div className={header.leftButton}>
                  <li className={header.li }><i className={'icon icon-brightness-moon'}></i> 
                   <i className={'icon icon-brightness-sun'}></i>
                  </li>
                  <li className={header.li }>工具箱</li>
                  <li className={header.li }>关于</li>
                  </div>
                
                  <li className={header.li}>头像</li>
                  <div className={header.rightButton}>
                  <li className={header.li}>归档</li>
                  <li className={header.li}>友链</li>
                  <li className={header.li}>聊天室</li>
                  </div>
               </ul>
            </nav>
        </header>
     )
}