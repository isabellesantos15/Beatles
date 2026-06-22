// Footer com 4 colunas (logo, redes sociais, busca, menu)

import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  // Lista de redes sociais (igual ao site original)
  const socials = [
    { name: 'Twitter', url: 'https://twitter.com/thebeatles', icon: 'fa-twitter' },
    { name: 'Instagram', url: 'https://www.instagram.com/thebeatles/', icon: 'fa-instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/Beatles', icon: 'fa-facebook' },
    { name: 'TikTok', url: 'https://tiktok.com/@thebeatles', icon: 'fa-tiktok' },
    { name: 'YouTube', url: 'https://www.youtube.com/thebeatles', icon: 'fa-youtube' },
    { name: 'Snapchat', url: 'https://www.snapchat.com/@thebeatles', icon: 'fa-snapchat' },
  ]

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Coluna 1 - Apple Corps */}
          <div>
            <div className={styles.appleLogo}>
              <strong>APPLE CORPS</strong>
              Apple Corps Ltd<br />
              <a href="mailto:post@applecorpsltd.com">post@applecorpsltd.com</a>
            </div>
          </div>

          {/* Coluna 2 - Social */}
          <div>
            <h4 className={styles.socialTitle}>Social</h4>
            <ul className={styles.socialList}>
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    title={s.name}
                    aria-label={s.name}
                  >
                    <i className={`fab ${s.icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 - Busca (apenas visual, sem submit) */}
          <div>
            <h4 className={styles.searchTitle}>Buscar</h4>
            <div className={styles.searchForm}>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Buscar no site"
                readOnly
              />
              <span className={styles.searchButton}>→</span>
            </div>
          </div>

          {/* Coluna 4 - Menu do footer */}
          <div>
            <ul className={styles.footerMenu}>
              <li><Link to="/fale-conosco">Fale conosco</Link></li>
              <li><Link to="/creditos">Créditos</Link></li>
              <li><Link to="/privacidade">Política de Privacidade</Link></li>
              <li><Link to="/termos">Termos</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          Copyright © Apple Corps 2026
        </div>
      </div>
    </footer>
  )
}

export default Footer