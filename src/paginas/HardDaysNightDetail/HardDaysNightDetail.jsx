import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HardDaysNightDetail.module.css';

function HardDaysNightDetail() {
  return (
    <div className={styles.page}>

      {/* BANNER SECTION - Full width image with title overlay */}
      <div className={styles.bannerSection}>
        <div className={styles.bannerImageContainer}>
          <img
            src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/F_AHDN-229-9-024.jpg?itok=NaC9g0y1"
            alt="Banner de A Hard Day's Night"
          />
          <div className={styles.bannerOverlay}>
            <div className={styles.bannerContent}>
              <p className={styles.preTitle}>Filme</p>
              <h1 className={styles.bannerTitle}>A Hard Day's Night</h1>
              <p className={styles.bannerSubtitle}><span className="font-heavy">Data de lançamento:</span> 06 July 1964</p>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT SECTION - Two columns: quotes left, rest centered */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          {/* LEFT COLUMN - QUOTES ONLY (flush left) */}
          <div className={styles.quotesColumn}>
            <div className={styles.quotesSection}>
              <div className={styles.blockquote}>
                <p>"Nós éramos os filhos de <em>The Goon Show</em>. Éramos da mesma idade. Éramos, de certa forma, a extensão dessa rebelião."</p>
                <footer>John</footer>
              </div>

              <div className={styles.blockquote}>
                <p>"Todo mundo em Liverpool acha que é comediante. Basta atravessar o túnel do Mersey e o cara do pedágio já vai ser um comediante. Isso está no nosso sangue desde o nascimento."</p>
                <footer>George</footer>
              </div>

              <div className={styles.blockquote}>
                <p>"Acho que, como eu gostava de filmes, eu tinha menos vergonha do que os outros de estar em um; John realmente entrou no filme também. Muitas vezes senti que George não queria estar ali. Era algo que ele fazia porque nós estávamos fazendo."</p>
                <footer>Ringo</footer>
              </div>

              <div className={styles.blockquote}>
                <p>"Alun (roteirista) percebeu muitas pequenas coisas sobre nós. Coisas como: 'Ele <em>está</em> atrasado, mas é muito limpo, não é?' Pequenas piadas, sarcasmo, o humor, a ironia de John, o jeito lacônico de Ringo; cada uma das nossas maneiras diferentes. O filme consegue capturar bem nossos personagens."</p>
                <footer>Paul</footer>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - VIDEOS AND TEXT (centered) */}
          <div className={styles.bodyColumn}>
            {/* First Video - Trailer */}
            <div className={styles.videoEmbed}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/TWbiVqlSMgc"
                title="Trailer oficial remasterizado de A Hard Day's Night (2014) - Filme dos Beatles HD"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Description text */}
            <div className={styles.descriptionSection}>
              <p className={styles.bodyText}>
                Neste primeiro longa-metragem dos Beatles, a banda precisa usar toda sua astúcia e inteligência para chegar a uma apresentação de televisão programada enquanto evita fãs e a imprensa que os perseguem. Isso acontece apesar dos problemas causados pelo avô de Paul (Wilfred Brambell) e da prisão de Ringo.
              </p>

              <p className={styles.bodyText}>
                A Hard Day's Night foi aclamado como um marco na produção de filmes musicais e continua influente até hoje. O diretor Dick Lester utilizou um estilo documental para capturar a claustrofobia da Beatlemania, e o roteirista Alun Owen criou um roteiro que representa perfeitamente o humor rápido da banda. Comédia e música se combinam para criar este retrato de um dia na vida dos Beatles em 1964.
              </p>

              <p className={styles.bodyText}>
                Lançado pela United Artists. Uma produção de Walter Shenson-Subafilms.
              </p>
            </div>

            {/* Second Video - Making of */}
            <div className={styles.videoEmbed} style={{ marginTop: '25px' }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/rYDWYcpdMAQ"
                title="Making of A Hard Day's Night"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE SLIDESHOW - full width, side by side */}
      <div className={styles.imagesSection}>
        <div className={styles.imagesInner}>
          {/* Image 1 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/F_AHDN-229-9-016_0.jpg?itok=kh_i37oX"
              alt="Filme A Hard Day's Night"
            />
          </div>

          {/* Image 2 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/F_AHDN-229-8-010.jpg?itok=Sy6aCd82"
              alt="Filme A Hard Day's Night"
            />
          </div>

          {/* Image 3 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/F_AHDN-229-13-011.jpg?itok=xw0MLAtN"
              alt="Filme A Hard Day's Night"
            />
          </div>
        </div>
      </div>

      {/* CAST AND CREW TABLE */}
      <div className={styles.tableSection}>
        <div className={styles.tableInner}>
          <div className={styles.wpBlockTable}>
            <table>
              <tbody>
                <tr><td>John Lennon</td><td>John</td></tr>
                <tr><td>Paul McCartney</td><td>Paul</td></tr>
                <tr><td>George Harrison</td><td>George</td></tr>
                <tr><td>Ringo Starr</td><td>Ringo</td></tr>
                <tr><td>Wilfred Brambell</td><td>John McCartney, avô de Paul</td></tr>
                <tr><td>Norman Rossington</td><td>Norm, gerente dos Beatles</td></tr>
                <tr><td>John Junkin</td><td>Shake, gerente de estrada dos Beatles</td></tr>
                <tr><td>Victor Spinetti</td><td>Diretor de TV</td></tr>
                <tr><td>Anna Quayle</td><td>Millie</td></tr>
                <tr><td>Deryck Guyler</td><td>Sargento da polícia</td></tr>
                <tr><td>Richard Vernon</td><td>Johnson, o cavalheiro no trem</td></tr>
                <tr><td>Edward Malin</td><td>Garçom do hotel</td></tr>
                <tr><td>Robin Ray</td><td>Gerente de estúdio de TV</td></tr>
                <tr><td>Lionel Blair</td><td>Coreógrafo de TV</td></tr>
                <tr><td>Alison Seebohm</td><td>Dolly, secretária de Simon Marshall</td></tr>
                <tr><td>David Janson</td><td>Charley, um garoto que Ringo encontra</td></tr>
                <tr><td>Richard Lester</td><td>Direção</td></tr>
                <tr><td>Alun Owen</td><td>Roteiro</td></tr>
                <tr><td>Denis O'Dell</td><td>Produtor executivo</td></tr>
                <tr><td>Walter Shenson</td><td>Produtor</td></tr>
                <tr><td>Gilbert Taylor</td><td>Direção de fotografia</td></tr>
                <tr><td>John Jympson</td><td>Edição de filme</td></tr>
                <tr><td>Ray Simm</td><td>Direção de arte</td></tr>
                <tr><td>Julie Harris</td><td>Figurino</td></tr>
                <tr><td>Betty Glasow</td><td>Cabeleireira</td></tr>
                <tr><td>John O'Gorman</td><td>Maquiador</td></tr>
                <tr><td>John Rogers</td><td>Chefe executivo de produção: Miramax</td></tr>
                <tr><td>John D. Merriman</td><td>Assistente de direção</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HardDaysNightDetail;