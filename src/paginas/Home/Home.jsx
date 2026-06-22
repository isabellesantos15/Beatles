// Página inicial (Home) - cópia fiel do site original thebeatles.com
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

// Imagem do hero (mesma URL do site original)
const heroImage = 'https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2026-06/homepage1v3col.jpg?itok=3YLjz3w7'
const heroImageRetina = 'https://www.thebeatles.com/sites/default/files/styles/max_2600x2600_retina/public/2026-06/homepage1v3col.jpg?itok=_Nk8em1q'

function Home() {
  return (
    <div className={`container-fluid ${styles.page} padding-x`}>
      <div className={`row ${styles.row}`}>
        <div className={`col-md-1 ${styles.sideCol}`}></div>

        <div className={`col-md-10 ${styles.mainCol}`}>
          {/* Imagem principal - capa da home */}
          <Link to="/happy-birthday-paul-5" className={styles.heroLink} aria-label="Feliz aniversário Paul">
            <picture>
              <source srcSet={`${heroImage} 1x, ${heroImageRetina} 2x`} media="all and (min-width: 1200px)" type="image/jpeg" />
              <source srcSet="https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2026-06/homepage1v3col.jpg?itok=_8HXXcpd 1x, https://www.thebeatles.com/sites/default/files/styles/max_1300x1300_retina/public/2026-06/homepage1v3col.jpg?itok=x9v8EWg1 2x" media="(min-width: 576px) and (max-width: 1199px)" type="image/jpeg" />
              <source srcSet="https://www.thebeatles.com/sites/default/files/styles/max_650x650/public/2026-06/homepage1v3col.jpg?itok=nh4YNmxI 1x, https://www.thebeatles.com/sites/default/files/styles/max_650x650_retina/public/2026-06/homepage1v3col.jpg?itok=YkBv7GkK 2x" media="all and (max-width: 575px)" type="image/jpeg" />
              <img
                src={heroImage}
                alt="Feliz aniversário Paul"
                className={styles.heroImage}
                width="960"
                height="1338"
                loading="lazy"
              />
            </picture>
          </Link>

          {/* Espaçamento entre a imagem e o botão */}
          <div className={styles.spacer} aria-hidden="true"></div>

          {/* Botão verde grande - link para a página "'They say it's your birthday!'" */}
          <div className={styles.buttonWrap}>
            <Link to="/happy-birthday-paul-5" className={styles.ctaButton}>
              {'Dizem que é o seu aniversário!'}
            </Link>
          </div>
        </div>

        <div className={`col-md-1 ${styles.sideCol}`}></div>
      </div>
    </div>
  )
}

export default Home
