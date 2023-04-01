import Head from 'next/head'
import { Inter } from 'next/font/google'
import  Header   from './header/Header'
import EssayList from './essayList/EssayList'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Bibooo"></meta>
        <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION}></meta>
        <meta name="keyword" content="习惯孤独;bibooo;cs;kz;持续学习;持续写博客; 此生理想;近期计划;今日功课;"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="https://shoka.lostyu.me/images/apple-touch-icon.png"></link>
        <link rel="shortcut icon" type="images/x-icon" href="https://bibooo.top/upload/2023/03/favicon-removebg-preview.png"></link>
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <main className={styles.main}>
         <Header/>
         <EssayList/>
      </main>
    </>
    
  )
}
