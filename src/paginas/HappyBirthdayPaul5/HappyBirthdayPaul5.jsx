// Página "'They say it's your birthday!'" (Happy birthday, Paul) - cópia fiel do site original
import { useEffect } from 'react'
import styles from './HappyBirthdayPaul5.module.css'

// URLs das imagens e embeds (mesmas do site original)
const heroImage = 'https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2026-06/homepage1v3col.jpg?itok=3YLjz3w7'
const heroImageRetina = 'https://www.thebeatles.com/sites/default/files/styles/max_2600x2600_retina/public/2026-06/homepage1v3col.jpg?itok=_Nk8em1q'

const instagramEmbed = 'https://www.instagram.com/p/DZuR8bflEah/embed/captioned/?cr=1&v=14&wp=540&rd=https%3A%2F%2Fwww.thebeatles.com&rp=%2Fhappy-birthday-paul-5'

function HappyBirthdayPaul5() {
  // Carrega o script do Instagram para que o embed funcione corretamente
  useEffect(() => {
    const id = 'instagram-embed-script'
    if (document.getElementById(id)) return
    const script = document.createElement('script')
    script.id = id
    script.src = '//www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className={`container-fluid ${styles.page} padding-x`}>
      <div className={`row ${styles.row}`}>
        <div className={`col-md-1 ${styles.sideCol}`}></div>

        <div className={`col-md-10 ${styles.mainCol}`}>
          {/* Imagem principal (mesma do home) */}
          <div className={styles.heroImageWrap}>
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
          </div>

          {/* Conteúdo com colunas laterais 2 + 8 + 2 */}
          <div className={`row ${styles.contentRow}`}>
            <div className={`col-md-2 ${styles.sideCol}`}></div>

            <div className={`col-md-8 ${styles.contentCol}`}>
              {/* Título "Celebrating a master songwriter" */}
              <h1 className={styles.mainHeading}>Celebrando um grande compositor</h1>

              {/* Texto introdutório */}
              <p className={styles.lead}>
                De &lsquo;Yesterday&rsquo; a &lsquo;Eleanor Rigby&rsquo;, &lsquo;Blackbird&rsquo; a &lsquo;Let It Be&rsquo;
                {' '}e tantas outras, todo mundo tem uma música favorita escrita por Paul. <br />
                Explore hoje sua jornada como compositor.
              </p>

              {/* Espaçador */}
              <div className={styles.spacer51} aria-hidden="true"></div>

              {/* Embed do Instagram */}
              <div className={styles.instagramWrap}>
                <iframe
                  src={instagramEmbed}
                  allowTransparency="true"
                  allowFullScreen="true"
                  frameBorder="0"
                  height="1022"
                  scrolling="no"
                  className={styles.instagramFrame}
                  title="Publicação do Instagram"
                ></iframe>
              </div>

              {/* Espaçador final */}
              <div className={styles.spacer61} aria-hidden="true"></div>
            </div>

            <div className={`col-md-2 ${styles.sideCol}`}></div>
          </div>
        </div>

        <div className={`col-md-1 ${styles.sideCol}`}></div>
      </div>
    </div>
  )
}

export default HappyBirthdayPaul5
