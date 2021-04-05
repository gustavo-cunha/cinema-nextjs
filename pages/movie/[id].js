import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function MoveItem({info}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{info.title} | Cinema Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{info.title}</h1>

        <p>{info.overview}</p>
        <p>Nota: {info.vote_average}</p>
        <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="500" />
      </main>

      <footer className={styles.footer}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
          <a href="mailto:gustavocunha.gc@gmail.com" className={styles.adaptedby}>Adapted by <span>Gustavo Cunha</span></a>
        </div>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const result = await fetch(`https://cinema-nextjs.vercel.app/api/movie/${context.params.id}`);
  const json = await result.json();

  return {
    props: {
      info: json.info
    }
  }
}