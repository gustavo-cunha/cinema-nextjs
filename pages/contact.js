import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('./components/footer'))

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contato | Cinema Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className={styles.title}>Contato</h1>

        <p className={styles.description}>
          gustavocunha.gc@gmail.com<br/>
          (62) 98121-4448
        </p>
      </main>

      <Footer />
    </div>
  )
}
