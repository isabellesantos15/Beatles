import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PleasePleaseMeDetail.module.css';

function PleasePleaseMeDetail() {
  return (
    <div className={styles.page}>

      {/* PAGE TITLE SECTION */}
      <div className={styles.pageTitleSection}>
        <div className={styles.pageTitleInner}>
          <p className={styles.preTitle}>Álbum</p>
          <h1 className={styles.pageTitle}>Please Please Me</h1>

          <p className={styles.subtitle}>
            <span className={styles.fontHeavy}>Data de lançamento:</span> 22 de março de 1963
          </p>
        </div>
      </div>

      {/* MAIN CONTENT SECTION - Two columns: quotes left, rest centered */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          {/* LEFT COLUMN - QUOTES ONLY */}
          <div className={styles.quotesColumn}>
            <div className={styles.quotesSection}>
              <div className={styles.blockquote}>
                <p>
                  "O primeiro álbum foi gravado em uma única sessão de doze horas, e a última música a ser feita foi uma canção chamada Twist and Shout, que quase me matou."
                </p>
                <footer>John</footer>
              </div>

              <div className={styles.blockquote}>
                <p>
                  "Todos nós dizíamos: 'E quanto a esta? E quanto a esta?', porque basicamente este álbum era exatamente o que fazíamos ao vivo nos clubes."
                </p>
                <footer>George</footer>
              </div>

              <div className={styles.blockquote}>
                <p>
                  "Meu Deus, era isso, um pedaço de plástico. E aquele pedaço de plástico era como ouro, sabe. Você venderia sua alma. Você venderia sua alma para estar naquele pequeno disco."
                </p>
                <footer>Ringo</footer>
              </div>

              <div className={styles.blockquote}>
                <p>
                  "John teve que deixar Twist and Shout para o final, e passou o dia inteiro tomando pastilhas para garganta. E finalmente precisou gravar Twist and Shout sabendo que tinha que ser a última porque aquilo simplesmente destruiria sua garganta. Foi incrível. Você ainda consegue ouvir isso no disco."
                </p>
                <footer>Paul</footer>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - ALBUM COVER, TEXT, VIDEOS */}
          <div className={styles.bodyColumn}>
            {/* Album Cover Image */}
            <figure className={styles.albumCover}>
              <img
                src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/Please%20Please%20Me.jpg?itok=cSEo8yFr"
                alt="Please Please Me"
              />
            </figure>

            {/* Spotify Embed */}
            <div className={styles.spotifyEmbed}>
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/album/3KzAvEXcqJKBF97HrXwlgf?utm_source=oembed"
                width="100%"
                height="352"
                title="Spotify Embed: Please Please Me (Remasterizado)"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            {/* Stream / Buy Buttons */}
            <div className={styles.buttonsRow}>
              <a
                className={styles.actionButton}
                href="https://thebeatles.lnk.to/Please-Please-Me-Stream"
                target="_blank"
                rel="noreferrer noopener"
              >
                OUVIR
              </a>
              <a
                className={styles.actionButton}
                href="https://thebeatles.lnk.to/Please-Please-Me-Buy"
                target="_blank"
                rel="noreferrer noopener"
              >
                COMPRAR O ALBUM
              </a>
            </div>

            {/* Description text */}
            <div className={styles.descriptionSection}>
              <p className={styles.bodyText}>
                O álbum Please Please Me dos Beatles foi lançado às pressas pela Parlophone em 22 de março de 1963 para aproveitar o enorme sucesso da faixa-título, que havia sido o segundo single do grupo e seu primeiro número 1 na maioria das paradas britânicas.
              </p>

              <p className={styles.bodyText}>
                Dez das quatorze faixas do álbum foram gravadas em apenas um dia — 11 de fevereiro de 1963. Entre elas estavam uma mistura de músicas favoritas dos shows ao vivo e composições originais da dupla Lennon-McCartney. As quatro músicas restantes haviam sido gravadas em 1962, tendo composto o lado B do lançamento de estreia da banda e os dois lados de seu segundo single. Uma gravação ligeiramente posterior de "Love Me Do" em relação à versão já lançada foi escolhida para o álbum. Essa versão também apareceria posteriormente em um EP e, mais tarde, em um single que alcançou o primeiro lugar nos Estados Unidos em 1964.
              </p>

              <p className={styles.bodyText}>
                A icônica foto da capa foi tirada no então quartel-general da EMI Limited, localizado na 20 Manchester Square, no West End de Londres, no início de 1963, pelo fotógrafo Angus McBean. A EMI permaneceu no edifício até 1995, quando se mudou para o oeste de Londres, levando consigo a famosa grade da varanda.
              </p>

              <p className={styles.bodyText}>
                Considerando que as paradas de álbuns britânicas daquela época eram normalmente dominadas por gostos mais "adultos", como trilhas sonoras de filmes e cantores de música leve, foi uma surpresa quando Please Please Me alcançou o topo das paradas em maio de 1963 e permaneceu lá por trinta semanas, antes de ser substituído por With The Beatles.
              </p>

              <p className={styles.bodyText}>
                Please Please Me não recebeu um lançamento oficial nos Estados Unidos até 1987, mas os álbuns "Introducing The Beatles", lançado no início de 1964 pela gravadora Vee-Jay, e "The Early Beatles", lançado pela Capitol Records no ano seguinte, continham muitas das músicas presentes na versão britânica.
              </p>
            </div>

            {/* Video - Making of Please Please Me */}
            <div className={styles.videoEmbed}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/Dt7znOx90Fk"
                title="A Produção de Please Please Me"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* NME SECTION - centered image + blockquote */}
      <div className={styles.nmeSection}>
        <div className={styles.nmeInner}>
          <figure className={styles.nmeImage}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/NME_PPM.jpeg?itok=hgB8nTFi"
              alt="NME Please Please Me"
            />
          </figure>

          <blockquote className={styles.nmeQuote}>
            <p>
              <em>
                "Os Beatles abriram um exemplar da NME e observaram orgulhosamente as paradas quando 'Please Please Me' alcançou o primeiro lugar recentemente. Foi um grande momento para os talentosos rapazes de Liverpool, algo pelo qual esperaram durante muito tempo.
                <br /><br />
                As coisas estão começando a acontecer para os Beatles, o grupo britânico de estilo rhythm and blues. O disco 'Please Please Me' veio logo após o sucesso de sua primeira música de destaque, 'Love Me Do', escrita pelos integrantes John Lennon e Paul McCartney.
                <br /><br />
                Parece que um futuro brilhante aguarda os Beatles, mas conhecendo-os, não acredito que deixarão isso subir à cabeça."
              </em>
            </p>
            <cite>NME — 8 de março de 1963</cite>
          </blockquote>
        </div>
      </div>

      {/* HORIZONTAL SCROLL OF IMAGES - Slideshow */}
      <div className={styles.imagesSection}>
        <div className={styles.imagesInner}>
          {/* Image 1 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0006-06v2.jpg?itok=Rkkf2PIh"
              alt="Os Beatles gravando Please Please Me"
            />
          </div>

          {/* Image 2 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0004-04v2.jpg?itok=AR732vX1"
              alt="Os Beatles gravando Please Please Me"
            />
          </div>

          {/* Image 3 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0004-03v2_0.jpg?itok=VBUaC8Yv"
              alt="Os Beatles gravando Please Please Me"
            />
          </div>

          {/* Image 4 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0004-02v2_0.jpg?itok=IkHRtqYV"
              alt="Ringo gravando Please Please Me"
            />
          </div>

          {/* Image 5 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0003-20v2.jpg?itok=RQsMS0bt"
              alt="Paul e John gravando Please Please Me"
            />
          </div>

          {/* Image 6 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0002-09v2.jpg?itok=GQEyzUdH"
              alt="Os Beatles gravando Please Please Me"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PleasePleaseMeDetail;
