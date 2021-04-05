import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('./components/footer'))

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [movieList, setMovieList] = useState([]);

  async function handleSearch() {
    if (searchText !== '') {
      const result = await fetch(`https://cinema-nextjs-gustavocunha.vercel.app/api/movie/search?q=${searchText}`);
      const json = await result.json();
      setMovieList(json.list);
    }
  }

  function handleKeyDownSearch(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Busca | Cinema Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Busca</h1>

        <p>Encontre os filmes que você procura através da nossa busca.</p>
        <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} onKeyDown={handleKeyDownSearch} />
        <button onClick={handleSearch}>Buscar</button>

        <div className={`${styles.grid} ${styles.movies}`}>
        {movieList.map(item => (
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
