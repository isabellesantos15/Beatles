import React, { useState } from 'react';
import styles from './HereComesTheSunDetail.module.css';

function HereComesTheSunDetail() {
  const [tableExpanded, setTableExpanded] = useState(false);

  return (
    <div className={styles.page}>

      <div className={styles.pageTitleSection}>
        <div className={styles.pageTitleInner}>
          <p className={styles.preTitle}>Música</p>
          <h1 className={styles.pageTitle}>Here Comes The Sun</h1>
          <p className={styles.subtitle}>
            <span className={styles.fontHeavy}>Data de lançamento:</span> 26 de setembro de 1969
          </p>
        </div>
      </div>

      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <div className={styles.mainColumn}>
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

            <div className={styles.tableWrapper}>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <th colSpan={2}>"Here Comes the Sun"</th>
                  </tr>
                  <tr>
                    <td colSpan={2} className={styles.tableImageCell}>
                      Capa do single japonês
                    </td>
                  </tr>
                  <tr>
                    <th colSpan={2}>Single de The Beatles</th>
                  </tr>
                  <tr>
                    <th colSpan={2}>do álbum Abbey Road</th>
                  </tr>
                  <tr>
                    <th scope="row">Lado A</th>
                    <td>"Oh! Darling"</td>
                  </tr>
                  <tr>
                    <th scope="row">Lançamento</th>
                    <td>
                      26 de setembro de 1969 (álbum)
                      <br />
                      5 de junho de 1970 (single no Japão)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Gravação</th>
                    <td>7 de julho – 19 de agosto de 1969</td>
                  </tr>
                  <tr>
                    <th scope="row">Gênero</th>
                    <td>Folk rock, pop rock</td>
                  </tr>
                  <tr>
                    <th scope="row">Duração</th>
                    <td>3:05</td>
                  </tr>
                  <tr>
                    <th scope="row">Gravadora</th>
                    <td>Apple</td>
                  </tr>
                  <tr>
                    <th scope="row">Compositor(es)</th>
                    <td>George Harrison</td>
                  </tr>
                  <tr>
                    <th scope="row">Produtor</th>
                    <td>George Martin</td>
                  </tr>

                  {tableExpanded && (
                    <>
                      <tr>
                        <th colSpan={2}>Lista de faixas de Abbey Road</th>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <strong>17 faixas</strong>
                          <div className={styles.trackList}>
                            <div>
                              <strong>Lado um</strong>
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
                              <strong>Lado dois</strong>
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

            <div className={styles.descriptionSection}>
              <p className={styles.bodyText}>
                "Here Comes the Sun" é uma música de George Harrison do álbum Abbey Road dos Beatles, lançado em 1969.
              </p>

              <p className={styles.copyright}>
                ©2006 Sony/ATV Music Publishing LLC. Todos os direitos reservados. Usado com permissão.
              </p>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Artigos relacionados</h2>

            <div className={styles.relatedItem}>
              <p className={styles.relatedPreTitle}>Música</p>
              <a href="/i-got-find-my-baby" className={styles.relatedLink}>
                I Got To Find My Baby
              </a>
            </div>

            <div className={styles.relatedItem}>
              <p className={styles.relatedPreTitle}>Música</p>
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