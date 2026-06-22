import React, { useState } from 'react';
import styles from './HereComesTheSunDetail.module.css';

function HereComesTheSunDetail() {
  // useState para o botão "Read more" da tabela
  const [tableExpanded, setTableExpanded] = useState(false);

  return (
    <div className={styles.page}>

      {/* PAGE TITLE SECTION - centered */}
      <div className={styles.pageTitleSection}>
        <div className={styles.pageTitleInner}>
          <p className={styles.preTitle}>Song</p>
          <h1 className={styles.pageTitle}>Here Comes The Sun</h1>
          <p className={styles.subtitle}>
            <span className={styles.fontHeavy}>Release date:</span> 26 September 1969
          </p>
        </div>
      </div>

      {/* MAIN CONTENT SECTION - lyrics + sidebar */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          {/* MAIN COLUMN - lyrics + table + description */}
          <div className={styles.mainColumn}>
            {/* Lyrics */}
            <div className={styles.lyrics}>
              <p>
                Here comes the sun<br />
                Doo doo doo doo<br />
                Here comes the sun and I say<br />
                It's alright
              </p>

              <p>
                Little darling, it's been a long, cold, lonely winter<br />
                Little darling, it feels like years since it's been here
              </p>

              <p>
                Here comes the sun<br />
                Doo doo doo doo<br />
                Here comes the sun and I say<br />
                It's alright
              </p>

              <p>
                Little darling, the smiles returning to the faces<br />
                Little darling, it seems like years since it's been here
              </p>

              <p>
                Here comes the sun<br />
                Doo doo doo doo<br />
                Here comes the sun and I say<br />
                It's alright
              </p>

              <p>
                Sun, sun, sun<br />
                Here it comes x 5
              </p>

              <p>
                Little darling, I feel that ice is slowly melting<br />
                Little darling, it seems like years since it's been clear
              </p>

              <p>
                Here comes the sun<br />
                Doo doo doo doo<br />
                Here comes the sun and I say<br />
                It's alright
              </p>

              <p>
                Here comes the sun<br />
                Doo doo doo doo<br />
                Here comes the sun<br />
                It's alright
              </p>

              <p>It's alright</p>
            </div>

            {/* Info table with "Read more" expander */}
            <div className={styles.tableWrapper}>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <th colSpan={2}>"Here Comes the Sun"</th>
                  </tr>
                  <tr>
                    <td colSpan={2} className={styles.tableImageCell}>
                      Cover to Japanese single
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>Single by The Beatles</th>
                  </tr>
                  <tr>
                    <th colSpan={2}>from the album Abbey Road</th>
                  </tr>
                  <tr>
                    <th scope="row">A-side</th>
                    <td>"Oh! Darling"</td>
                  </tr>
                  <tr>
                    <th scope="row">Released</th>
                    <td>
                      26 September 1969 (album)
                      <br />
                      5 June 1970 (Japan single)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Recorded</th>
                    <td>7 July - 19 August 1969</td>
                  </tr>
                  <tr>
                    <th scope="row">Genre</th>
                    <td>Folk rock, pop rock</td>
                  </tr>
                  <tr>
                    <th scope="row">Length</th>
                    <td>3:05</td>
                  </tr>
                  <tr>
                    <th scope="row">Label</th>
                    <td>Apple</td>
                  </tr>
                  <tr>
                    <th scope="row">Writer(s)</th>
                    <td>George Harrison</td>
                  </tr>
                  <tr>
                    <th scope="row">Producer</th>
                    <td>George Martin</td>
                  </tr>

                  {/* Extra content hidden behind "Read more" */}
                  {tableExpanded && (
                    <>
                      <tr>
                        <th colSpan={2}>Abbey Road track listing</th>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <strong>17 tracks</strong>
                          <div className={styles.trackList}>
                            <div>
                              <strong>Side one</strong>
                              <ol>
                                <li>"Come Together"</li>
                                <li>"Something"</li>
                                <li>"Maxwell's Silver Hammer"</li>
                                <li>"Oh! Darling"</li>
                                <li>"Octopus's Garden"</li>
                                <li>"I Want You (She's So Heavy)"</li>
                              </ol>
                            </div>
                            <div>
                              <strong>Side two</strong>
                              <ol>
                                <li>"Here Comes the Sun"</li>
                                <li>"Because"</li>
                                <li>"You Never Give Me Your Money"</li>
                                <li>"Sun King"</li>
                                <li>"Mean Mr. Mustard"</li>
                                <li>"Polythene Pam"</li>
                                <li>"She Came In Through the Bathroom Window"</li>
                                <li>"Golden Slumbers"</li>
                                <li>"Carry That Weight"</li>
                                <li>"The End"</li>
                                <li>"Her Majesty"</li>
                              </ol>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>

              {/* Read more / Read less button */}
              <div className={styles.readMoreContainer}>
                <button
                  className={styles.readMoreButton}
                  onClick={() => setTableExpanded(!tableExpanded)}
                  type="button"
                >
                  <span>{tableExpanded ? 'Ler menos' : 'Ler mais'}</span>
                  <span className={`${styles.readMoreIcon} ${tableExpanded ? styles.expanded : ''}`}>
                    &#9662;
                  </span>
                </button>
              </div>
            </div>

            {/* Description text */}
            <div className={styles.descriptionSection}>
              <p className={styles.bodyText}>
                "Here Comes the Sun" is a song by George Harrison from the Beatles' 1969 album Abbey Road.
              </p>

              <p className={styles.copyright}>
                ©2006 Sony/ATV Music Publishing LLC. All rights reserved. Used by permission.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR - Related Articles */}
          <aside className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Artigos relacionados</h2>

            <div className={styles.relatedItem}>
              <p className={styles.relatedPreTitle}>Song</p>
              <a href="/i-got-find-my-baby" className={styles.relatedLink}>
                I Got To Find My Baby
              </a>
            </div>

            <div className={styles.relatedItem}>
              <p className={styles.relatedPreTitle}>Song</p>
              <a href="/ill-be-my-way" className={styles.relatedLink}>
                I'll Be On My Way
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default HereComesTheSunDetail;
