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
            alt="A Hard Day's Night banner"
          />
          <div className={styles.bannerOverlay}>
            <div className={styles.bannerContent}>
              <p className={styles.preTitle}>Film</p>
              <h1 className={styles.bannerTitle}>A Hard Day's Night</h1>
              <p className={styles.bannerSubtitle}><span className="font-heavy">Release date:</span> 06 July 1964</p>
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
                <p>"We were the sons of <em>The Goon Show</em>. We were of an age. We were the extension of that rebellion, in a way."</p>
                <footer>John</footer>
              </div>

              <div className={styles.blockquote}>
                <p>"Everyone in Liverpool thinks they're a comedian. Just drive through the Mersey Tunnel and the guy on the toll booth will be a comedian. We've had that born and bred into us."</p>
                <footer>George</footer>
              </div>

              <div className={styles.blockquote}>
                <p>"I think because I loved films I was less embarrassed than the others to be in one; John really got into the movie, too. I felt a lot of the time that George didn't want to be there. It was something he was doing because we were doing it."</p>
                <footer>Ringo</footer>
              </div>

              <div className={styles.blockquote}>
                <p>"Alun (screenwriter) picked up a lot of little things about us. Things like: 'He <em>is</em> late but he is very clean, isn't he?' Little jokes, the sarcasm, the humour, John's wit, Ringo's laconic manner; each of our different ways. The film manages to capture our characters quite well."</p>
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
                title="A Hard Day's Night Official Remastered Trailer (2014) - The Beatles Movie HD"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Description text */}
            <div className={styles.descriptionSection}>
              <p className={styles.bodyText}>
                In this, The Beatles' first feature film, the band must use all their guile and wit to reach a scheduled television performance whilst avoiding their pursuing fans and press. This is in spite of Paul's troublemaking grandfather (Wildfred Brambell), and Ringo's arrest.
              </p>

              <p className={styles.bodyText}>
                A Hard Day's Night has been praised as a benchmark for music film production, and remains influential to this day. Director Dick Lester used a documentary style of filming to capture the claustrophobia of Beatlemania, and writer Alun Owen delivered a script which epitomised the quick-witted humour of the band. Comedy and music are combined to make this pastiche of a day in the life of The Beatles during 1964.
              </p>

              <p className={styles.bodyText}>
                Released by United Artists. A Walter Shenson-Subafilms Production.
              </p>
            </div>

            {/* Second Video - Making of */}
            <div className={styles.videoEmbed} style={{ marginTop: '25px' }}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/rYDWYcpdMAQ"
                title="The Making of A Hard Day's Night"
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
              alt="A Hard Day's Night film"
            />
          </div>

          {/* Image 2 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/F_AHDN-229-8-010.jpg?itok=Sy6aCd82"
              alt="A Hard Day's Night film"
            />
          </div>

          {/* Image 3 */}
          <div className={styles.imageScrollSlide}>
            <img
              src="https://www.thebeatles.com/sites/default/files/styles/max_2600x2600/public/2021-06/F_AHDN-229-13-011.jpg?itok=xw0MLAtN"
              alt="A Hard Day's Night film"
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
                <tr><td>John Lennon</td><td>John </td></tr>
                <tr><td>Paul McCartney</td><td>Paul</td></tr>
                <tr><td>George Harrison</td><td>George</td></tr>
                <tr><td>Ringo Starr</td><td>Ringo</td></tr>
                <tr><td>Wilfred Brambell</td><td>John McCartney, Paul's Grandfather</td></tr>
                <tr><td>Norman Rossington</td><td>Norm, the Beatles' manager</td></tr>
                <tr><td>John Junkin</td><td>Shake, the Beatles' road manager</td></tr>
                <tr><td>Victor Spinetti</td><td>TV Director</td></tr>
                <tr><td>Anna Quayle</td><td>Millie</td></tr>
                <tr><td>Deryck Guyler</td><td>Police Sergeant</td></tr>
                <tr><td>Richard Vernon </td><td>Johnson, the gentleman on the train</td></tr>
                <tr><td>Edward Malin</td><td>Hotel waiter</td></tr>
                <tr><td>Robin Ray</td><td>TV floor manager</td></tr>
                <tr><td>Lionel Blair</td><td>TV choreographer</td></tr>
                <tr><td>Alison Seebohm </td><td>Dolly, Simon Marshall's secretary</td></tr>
                <tr><td>David Janson</td><td>Charley, a young boy Ringo encounters</td></tr>
                <tr><td>Richard Lester</td><td>Directed by </td></tr>
                <tr><td>Alun Owen</td><td>Written by</td></tr>
                <tr><td>Denis O'Dell </td><td>Executive Producer</td></tr>
                <tr><td>Walter Shenson</td><td>Producer</td></tr>
                <tr><td>Gilbert Taylor</td><td>Director of Photography</td></tr>
                <tr><td>John Jympson</td><td>Film Editing</td></tr>
                <tr><td>Ray Simm</td><td>Art Direction</td></tr>
                <tr><td>Julie Harris</td><td>Costume Design</td></tr>
                <tr><td>Betty Glasow</td><td>Hairdresser</td></tr>
                <tr><td>John O'Gorman </td><td>Makeup Artist</td></tr>
                <tr><td>John Rogers </td><td>Executive In Charge of Production: Miramax</td></tr>
                <tr><td>John D. Merriman</td><td>Assistant Director</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HardDaysNightDetail;