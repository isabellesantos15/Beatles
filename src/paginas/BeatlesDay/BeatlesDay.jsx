// Página Global Beatles Day - fundo peach com faixa vermelha
import styles from './BeatlesDay.module.css'
import beatlesImage from '../../assets/image copy.png'

function BeatlesDay() {
  return (
    <>
      {/* Seção 1 - título e introdução */}
      <section className={styles.page}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.col}>
              <h1 className={styles.title}>Como comemorar o Dia Global dos Beatles</h1>
              <p className={styles.text}>
                O Dia Global dos Beatles é comemorado todos os anos em 25 de junho,
                data em que os Beatles fizeram seu último show público ao vivo.
                É um dia para fãs de todo o mundo se reunirem e celebrar
                o legado da maior banda de todos os tempos.
              </p>
              <p className={styles.text}>
                De ouvir seu álbum favorito a organizar uma festa com tema
                dos Beatles, há muitas formas de comemorar. Confira nossas
                sugestões abaixo.
              </p>
            </div>
            <div className={styles.col}>
              <div className={styles.image} style={{ backgroundImage: `url(${beatlesImage})` }}>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa vermelha do meio - "Por que 25 de junho?" */}
      <section className={styles.redBand}>
        <div className="container">
          <h2>Por que 25 de junho?</h2>
          <p>
            Em 25 de junho de 1967, os Beatles interpretaram "All You Need Is Love"
            pela primeira vez durante o Our World, a primeira transmissão
            televisiva global ao vivo. Mais de 400 milhões de pessoas em
            26 países sintonizaram. A canção se tornou o hino de uma
            geração e agora é celebrada anualmente como o Dia Global
            dos Beatles.
          </p>
          <a href="#" className={styles.cta}>
            Inscreva-se no Dia Global dos Beatles
          </a>
        </div>
      </section>

      {/* Seção 3 - como celebrar */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Formas de comemorar</h2>
          <div className={styles.row}>
            <div className={styles.col}>
              <p className={styles.text}>
                <strong>Ouça os álbuns.</strong> De Please Please Me a Let It Be,
                o catálogo dos Beatles abrange apenas sete anos, mas contém
                algumas das músicas mais importantes do século 20.
              </p>
              <p className={styles.text}>
                <strong>Assista aos filmes.</strong> A Hard Day's Night, Help!,
                Magical Mystery Tour, Yellow Submarine e Let It Be continuam
                sendo imperdíveis.
              </p>
            </div>
            <div className={styles.col}>
              <p className={styles.text}>
                <strong>Compartilhe com os amigos.</strong> Convide amigos,
                compartilhe suas músicas favoritas nas redes sociais e
                conecte-se com fãs do mundo inteiro.
              </p>
              <p className={styles.text}>
                <strong>Aprenda algo novo.</strong> Explore a Linha do Tempo,
                leia as letras, assista aos documentários e mergulhe no
                Archive Collection.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BeatlesDay