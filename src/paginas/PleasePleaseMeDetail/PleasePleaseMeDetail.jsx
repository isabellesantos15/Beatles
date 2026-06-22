import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PleasePleaseMeDetail.module.css';

function PleasePleaseMeDetail() {
  return (
    <div className={styles.page}>

      {/* PAGE TITLE SECTION */}
      <div className={styles.pageTitleSection}>
        <div className={styles.pageTitleInner}>
          <p className={styles.preTitle}>Album</p>
          <h1 className={styles.pageTitle}>Please Please Me</h1>
          <p className={styles.subtitle}>
            <span className={styles.fontHeavy}>Release date:</span> 22 March 1963
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
                <p>"The first album was recorded in one long twelve hour session, which the last song to be done was a song called Twist and Shout, which nearly killed me."</p>
                <footer>John</footer>
              </div>

              <div className={styles.blockquote}>
                <p>"We'd all said, 'Well what about this? What about this?', cos basically this album was just what we did live in the clubs."</p>
                <footer>George</footer>
              </div>

              <div className={styles.blockquote}>
                <p>"Oh god this is it, a piece of plastic. And this piece of plastic was like gold, you know. You'd sell your soul. You would sell your soul to get on that little record."</p>
                <footer>Ringo</footer>
              </div>

              <div className={styles.blockquote}>
                <p>"John had to save Twist and Shout until the last, and he was sucking Zoobs all day - those little throat tablets. And he finally had to do Twist and Shout knowing he had to do it last because it would just rip his throat apart to do it. It was great. You can still hear that on the record."</p>
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
                title="Spotify Embed: Please Please Me (Remastered)"
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
                STREAM
              </a>
              <a
                className={styles.actionButton}
                href="https://thebeatles.lnk.to/Please-Please-Me-Buy"
                target="_blank"
                rel="noreferrer noopener"
              >
                BUY THE ALBUM
              </a>
            </div>

            {/* Description text */}
            <div className={styles.descriptionSection}>
              <p className={styles.bodyText}>
                The Beatles' Please Please Me album was rush-released by Parlophone on 22nd March, 1963 to capitalise on the enormous success of the title track which had been the group's second single and their first no. 1 in the majority of UK charts.
              </p>

              <p className={styles.bodyText}>
                Ten of the album's fourteen tracks were recorded in just one day - 11th February, 1963. These included a mixture of stage favourites and "Lennon-McCartney originals". The four remaining songs had been committed to tape in 1962 having formed the B-side of their debut release and both sides of their second single. A slightly later recording of 'Love Me Do' to that previously released, was selected for the album. This version would also appear on a subsequent EP and later still on an American # 1 single in 1964.
              </p>

              <p className={styles.bodyText}>
                The iconic front cover shot was taken at the then headquarters of EMI Limited at 20 Manchester Square in London's West End in early 1963 by Angus McBean. EMI remained in the building until 1995 before moving to West London taking the famous balcony railing with them.
              </p>

              <p className={styles.bodyText}>
                Given that the UK album chart in those days tended to be dominated by more 'adult' tastes such as film soundtracks and easy listening vocalists, it was a surprise when Please Please Me hit the top of the chart in May 1963 and remained there for thirty weeks before being replaced by With The Beatles.
              </p>

              <p className={styles.bodyText}>
                Please Please Me didn't receive an official US release until 1987 but "Introducing The Beatles" issued early in 1964 on the Vee-Jay label and "The Early Beatles" released by Capitol Records the following year later did contain many of the songs from the British release.
              </p>
            </div>

            {/* Video - Making of Please Please Me */}
            <div className={styles.videoEmbed}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/Dt7znOx90Fk"
                title="The Making Of Please Please Me"
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
                "The Beatles opened a copy of the NME and gazed proudly at the charts when 'Please Please Me' hit the top recently. It was a big moment for the talented boys from Liverpool, worth waiting a long time for.
                <br /><br />
                Things are beginning to move for the Beatles, the r-and-b styled British group. The disc 'Please Please Me' follows closely on the heels of their first hit 'Love Me Do' written by group members John Lennon and Paul McCartney.
                <br /><br />
                It looks like a bright future for the Beatles, but knowing them I don't think they'll let it go to their heads."
              </em>
            </p>
            <cite>NME March 8th 1963</cite>
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
              alt="The Beatles recording Please Please Me"
            />
          </div>

          {/* Image 2 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0004-04v2.jpg?itok=AR732vX1"
              alt="The Beatles recording Please Please Me"
            />
          </div>

          {/* Image 3 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0004-03v2_0.jpg?itok=VBUaC8Yv"
              alt="The Beatles recording Please Please Me"
            />
          </div>

          {/* Image 4 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0004-02v2_0.jpg?itok=IkHRtqYV"
              alt="Ringo recording Please Please Me"
            />
          </div>

          {/* Image 5 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0003-20v2.jpg?itok=RQsMS0bt"
              alt="Paul and John recording Please Please Me"
            />
          </div>

          {/* Image 6 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-08/DH-0002-09v2.jpg?itok=GQEyzUdH"
              alt="The Beatles recording Please Please Me"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PleasePleaseMeDetail;
