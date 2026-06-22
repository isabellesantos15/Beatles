// Página de detalhe da notícia: "Os Beatles Retornam à Savile Row!"
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
                Os Beatles voltam a Savile Row!&nbsp;
              </h1>
              <p className={styles.subtitle}>
                <strong>“The Beatles na 3 Savile Row” será aberto ao público em 2027&nbsp;</strong>
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
                title="The Beatles na Savile Row"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className={styles.spacer}></div>

            {/* Texto introdutório em itálico */}
            <p className={styles.introText}>
              <em>Primeiro destino oficial para fãs dos Beatles no coração de Londres</em>
            </p>

            <p className={styles.introText}>
              <em>
                A 3 Savile Row é um dos locais mais famosos da história dos Beatles, tendo sido a antiga sede da Apple Corps, o estúdio de gravação do álbum Let It Be e o palco do lendário Concerto no Telhado.&nbsp;
              </em>
            </p>

            <p className={styles.introText}>
              <em>
                A experiência com ingresso dará aos fãs dos Beatles acesso a sete andares de arquivos nunca antes vistos, exposições rotativas, ao estúdio de gravação recriado no subsolo e ao famoso telhado.&nbsp;
              </em>
            </p>

            <p className={styles.introText}>
              <em>Cadastre-se em </em>
              <a href="https://www.thebeatles.com/3savilerow" target="_blank" rel="noreferrer noopener">
                https://www.thebeatles.com/3SavileRow
              </a>
              <em> para receber mais novidades.&nbsp;</em>
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