// Footer com 4 colunas (logo, redes sociais, busca, menu)
// Apenas visual: nenhum input tem efeito, todos os links e botões são
// puramente estáticos (não navegam, não disparam alertas).

import styles from './Footer.module.css'

function Footer() {
  // Lista de redes sociais (igual ao site original)
  const socials = [
    { name: 'Twitter',   short: 'X' },
    { name: 'Instagram', short: 'I' },
    { name: 'Facebook',  short: 'F' },
    { name: 'TikTok',    short: 'T' },
    { name: 'YouTube',   short: 'Y' },
    { name: 'Snapchat',  short: 'S' },
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
              post@applecorpsltd.com
            </div>
          </div>

          {/* Coluna 2 - Social */}
          <div>
            <h4 className={styles.socialTitle}>Social</h4>
            <ul className={styles.socialList}>
              {socials.map((s) => (
                <li key={s.name}>
                  <span className={styles.socialLink} title={s.name} aria-label={s.name}>
                    <span className={styles.socialIcon}>{s.short}</span>
                  </span>
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

          {/* Coluna 4 - Menu do footer (links visuais, sem rota) */}
          <div>
            <ul className={styles.footerMenu}>
              <li><span>Fale conosco</span></li>
              <li><span>Créditos</span></li>
              <li><span>Política de Privacidade</span></li>
              <li><span>Termos</span></li>
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
