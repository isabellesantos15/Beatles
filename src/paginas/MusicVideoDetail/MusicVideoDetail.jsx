// Página de detalhe do vídeo musical: "I Want To Hold Your Hand"
// Layout: Vídeo em largura total, depois 3 colunas (esquerda vazia / centro conteúdo / direita vazia)
import { Link } from 'react-router-dom'
import { musicVideos } from '../../dados/musicVideos.js'
import styles from './MusicVideoDetail.module.css'

function MusicVideoDetail() {
  // Encontrar o vídeo pelo slug (em uma implementação real, usaríamos useParams)
  // Para simplificar e manter código iniciante, vamos assumir que sempre é o I Want To Hold Your Hand
  // Em uma versão mais avançada, usaríamos useParams do react-router-dom
  const video = musicVideos.find(v => v.slug === 'i-want-hold-your-hand') || musicVideos[0]

  return (
    <article className={styles.detailPage}>
      <div className="container">
        {/* Botão de voltar */}
        <Link to="/music-videos" className={styles.backLink}>
          ← Voltar para Vídeos Musicais
        </Link>

        {/* LINHA 1: Vídeo em largura total */}
        <div className={styles.rowFullWidth}>
          {/* Vídeo embed do YouTube (usando iframe simples, como iniciante faria) */}
          <div className={styles.videoEmbed}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/jenWdylTtzs"
              title="The Beatles - I Want To Hold Your Hand (Live on The Ed Sullivan Show)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div> {/* Fecha rowFullWidth */}

        {/* LINHA 2: Conteúdo em 3 colunas */}
        <div className={styles.row3col}>
          {/* Coluna esquerda vazia */}
          <div className={styles.col3}></div> {/* Fecha primeira col3 */}

          {/* Coluna central com o conteúdo (título + texto) */}
          <div className={`${styles.col6} ${styles.borderLeft} ${styles.borderRight}`}>
            {/* Cabeçalho (título + subtítulo) */}
            <div className={styles.pageTitleBlock}>
              <p className={styles.preTitle}>Vídeo musical</p>
              <h1 className={styles.h1Title}>
                I Want To Hold Your Hand
              </h1>
              <p className={styles.subtitle}></p>
            </div> {/* Fecha pageTitleBlock */}

            {/* Texto introdutório */}
            <p className={styles.bodyText}>
              ‘I Want to Hold Your Hand’ was the first Beatles’ record to top both the UK and the US charts. It was also their first to be recorded on a 4-track, as opposed to the usual 2-track, tape machine. The Beatles had the song well rehearsed when they made the first of 17 takes on October 17th 1963. Following The Beatles’ historic appearance on The Ed Sullivan show on February 9th, the single – already at No.1 in the charts – gained further momentum.
            </p>
          </div> {/* Fecha col6/border div */}

          {/* Coluna direita vazia */}
          <div className={styles.col3}></div> {/* Fecha segunda col3 */}

        </div> {/* Fecha row3col (conteúdo) */}

      </div> {/* Fecha container */}
    </article>
  )
}

export default MusicVideoDetail
