// Página de detalhe da notícia: "The Beatles Get Back to Savile Row!"
// Layout: 3 colunas (esquerda vazia / centro conteúdo / direita vazia)
import { Link } from 'react-router-dom'
import styles from './NewsDetail.module.css'

function NewsDetail() {
  return (
    <article className={styles.detailPage}>
      <div className="container">

        {/* LINHA 1: Cabeçalho (título + subtítulo) */}
        <div className={styles.row3col}>
          {/* Coluna esquerda vazia */}
          <div className={styles.col3}></div>

          {/* Coluna central com o cabeçalho */}
          <div className={styles.col6}>
            <div className={styles.pageTitleBlock}>
              <p className={styles.preTitle}>Notícia - 11 de maio de 2026</p>
              <h1 className={styles.h1Title}>
                The Beatles Get Back to Savile Row!&nbsp;
              </h1>
              <p className={styles.subtitle}>
                <strong>“The Beatles at 3 Savile Row” Opening to Public in 2027&nbsp;</strong>
              </p>
            </div>
          </div>

          {/* Coluna direita vazia */}
          <div className={styles.col3}></div>
        </div>

        {/* LINHA 2: Conteúdo (vídeo + texto + imagens) */}
        <div className={styles.row3col}>
          {/* Coluna esquerda vazia */}
          <div className={styles.col3}></div>

          {/* Coluna central com bordas laterais (igual ao original) */}
          <div className={`${styles.col6} ${styles.borderLeft} ${styles.borderRight}`}>
            {/* Vídeo embed do YouTube (lite-youtube) */}
            <div className={styles.videoEmbed}>
              <iframe
                src="https://www.youtube.com/embed/mO_elwwWr-E"
                title="The Beatles at Savile Row"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className={styles.spacer}></div>

            {/* Texto introdutório em itálico */}
            <p className={styles.introText}>
              <em>First ever official destination for Beatles Fans in the heart of London</em>
            </p>

            <p className={styles.introText}>
              <em>3 Savile Row is one of the most famous locations in The Beatles storied history as Apple Corps previous HQ, the recording studio for Let it Be and the location of the legendary Rooftop Concert&nbsp;</em>
            </p>

            <p className={styles.introText}>
              <em>The ticketed experience will give Beatles fans access to seven floors of never-seen-before archive, rotating exhibits, the recreated recording studio in the basement and the famous rooftop&nbsp;</em>
            </p>

            <p className={styles.introText}>
              <em>Register at </em>
              <a href="https://www.thebeatles.com/3savilerow" target="_blank" rel="noreferrer noopener">
                https://www.thebeatles.com/3SavileRow
              </a>
              <em> for further news&nbsp;</em>
            </p>
          </div>

          {/* Coluna direita vazia */}
          <div className={styles.col3}></div>
        </div>
      </div>
    </article>
  )
}

export default NewsDetail
