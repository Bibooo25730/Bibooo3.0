import essayList from './Essaylist.module.css'
import Image from 'next/image'
export default function EssayList(){
     return(
        <article className={essayList.container}>
             <div>
                  <h1 className={essayList.h1}>文章列表</h1>
             </div>
             <ul>
                <li>
                <div className={essayList.cardContainer}>
                     <div className={essayList.cardLeft}>
                            <Image  src='https://img.timelessq.com/images/2022/07/26/c22bb7736559a7554506b05203018145.jpg' alt="leftPic" priority  width={350}
      height={185}></Image>
                     </div>
                     <div className={essayList.cardRight}>
                            <div className={essayList.info}>
                                 <div className={essayList.calendar}>
                                 <i className={'ic  i-calendar'}>2022-2-12</i>
                                 <i className={'ic  i-pen'}>220字</i>
                                 </div>
                                 <div className={essayList.title}>
                                       <h1>hello word</h1>
                                       <p>tdsadsaaaaaaaaaadsadasdas</p>
                                 </div>
                                 <div className={essayList.btn}>
                                    <button>123</button>
                                 </div> 
                            </div>
                     </div>
                </div>
                </li>
             </ul>
           
        </article>
     )    
}