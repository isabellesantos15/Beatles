// Header igual ao site original: logo à esquerda, nav inline, hambúrguer à direita no mobile

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import styles from './Header.module.css'

function Header() {
  // useState para abrir/fechar o menu mobile
  const [menuOpen, setMenuOpen] = useState(false)

  // Lista de itens do menu
  const menuItems = [
    { label: 'Dia Global dos Beatles', path: '/global-beatles-day' },
    { label: 'Linha do Tempo',         path: '/timeline' },
    { label: 'Notícias',               path: '/news' },
    { label: 'Álbuns',                 path: '/albums' },
    { label: 'Vídeos Musicais',        path: '/music-videos' },
    { label: 'Filmes',                 path: '/films' },
    { label: 'Músicas',                path: '/songs' },
    { label: 'Loja',                   path: '/store' },
    { label: 'Vinil Mono',             path: '/mono-vinyl' },
    { label: 'Newsletter',             path: '/newsletter' },
  ]

  return (
    <>
      <header className={styles.header}>
        <div className={`container-fluid ${styles.headerInner} padding-x`}>
          <div className={styles.navWrapper}>
            {/* Lado esquerdo: logo */}
            <div className={styles.brandCol}>
              <Link to="/" className={styles.logo} aria-label="Início">
                <Logo />
              </Link>
            </div>

            {/* Nav desktop (escondida no mobile via CSS) */}
            <ul className={styles.desktopNav}>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={styles.desktopLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Lado direito: hambúrguer (mobile) */}
            <div className={styles.hamburgerCol}>
              <button
                className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Alternar navegação"
                type="button"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fundo escuro quando o menu mobile está aberto */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.show : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Painel lateral com os links (só mobile) */}
      <nav className={`${styles.menuPanel} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.path} className={styles.menuItem}>
              <Link
                to={item.path}
                className={styles.menuLink}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
