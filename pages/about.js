import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('./components/footer'))

export default function About({author}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sobre Mim | Cinema Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sobre Mim</h1>

        <p>
          Este aplicativo foi desenvolvido durante a video aula <a href="https://www.youtube.com/watch?v=xjrDEZQ5LnA&t=3523s">Primeiros Passos com Next.js</a>, de Bonieky Lacerda.
          <br/>
          Os dados de filmes exibidos aqui são consultados no site <a href="https://www.themoviedb.org/">TMDb (The Movie Database)</a>
        </p>
        <hr/>
        <p>
          Eu sou {author.name}, desenvolvedor web fullstack e atualmente aprendiz de React JS e React Native.
        </p>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      author: {
        name: 'Gustavo Cunha Cabral'
      }
    }
  }
}