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
          {/* Vídeo incorporado do YouTube */}
          <div className={styles.videoEmbed}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/jenWdylTtzs"
              title="The Beatles - I Want To Hold Your Hand (Ao vivo no The Ed Sullivan Show)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* LINHA 2: Conteúdo em 3 colunas */}
        <div className={styles.row3col}>
          {/* Coluna esquerda vazia */}
          <div className={styles.col3}></div>

          {/* Coluna central com o conteúdo (título + texto) */}
          <div className={`${styles.col6} ${styles.borderLeft} ${styles.borderRight}`}>
            {/* Cabeçalho (título + subtítulo) */}
            <div className={styles.pageTitleBlock}>
              <p className={styles.preTitle}>Vídeo Musical</p>

              <h1 className={styles.h1Title}>
                I Want To Hold Your Hand
              </h1>

              <p className={styles.subtitle}></p>
            </div>

            {/* Texto introdutório */}
            <p className={styles.bodyText}>
              “I Want To Hold Your Hand” foi o primeiro disco dos Beatles a alcançar
              o topo das paradas tanto no Reino Unido quanto nos Estados Unidos.
              Também foi a primeira gravação da banda feita em uma máquina de fita
              de 4 canais, em vez da tradicional de 2 canais utilizada até então.
              Os Beatles já haviam ensaiado bastante a música quando gravaram a
              primeira de 17 tomadas em 17 de outubro de 1963. Após a histórica
              apresentação do grupo no programa The Ed Sullivan Show, em 9 de
              fevereiro de 1964, o single — que já ocupava a primeira posição nas
              paradas — ganhou ainda mais impulso e popularidade.
            </p>
          </div>

          {/* Coluna direita vazia */}
          <div className={styles.col3}></div>

        </div>

      </div>
    </article>
  )
}

export default MusicVideoDetail