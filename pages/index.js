import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('./components/footer'))

export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cinema Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Cinema Next.js</h1>
        <h3 className={styles.subtitle}>Filmes em Destaque</h3>

        <Link href="/search">Ir para a busca</Link>

        <div className={`${styles.grid} ${styles.movies}`}>
        {list.map(item => (
            <a href={`/movie/${item.id}`} className={styles.card}>
              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="120" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const result = await fetch(`https://cinema-nextjs.vercel.app/api/movie/trending`);
  const json = await result.json();

  return {
    props: {
      list: json.list
    }
  }
}