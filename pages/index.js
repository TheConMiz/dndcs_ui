import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// import Sidebar from './Sidebar'
import Main from './Main'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Main />
    </div>
  )
}
