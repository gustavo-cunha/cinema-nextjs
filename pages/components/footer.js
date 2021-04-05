import styles from '../../styles/Home.module.css'

export default function Footer() {
    return (
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
    )
}
