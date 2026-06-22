// Timeline - navegação por ano e eventos históricos
import { useState } from 'react'
import { timelineYears } from '../../dados/timeline.js'
import styles from './Timeline.module.css'

function Timeline() {
  // useState para guardar o ano selecionado
  const [activeYear, setActiveYear] = useState(timelineYears[0].year)

  // Quando clica num ano da nav, rola a página até a seção
  const handleYearClick = (year) => {
    setActiveYear(year)
    const el = document.getElementById(`year-${year}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* Navegação por ano (fixa no topo, abaixo do header) */}
      <nav className={styles.yearNav}>
        <div className="container">
          <ul className={styles.yearNavList}>
            {timelineYears.map((t) => (
              <li key={t.year}>
                <button
                  className={`${styles.yearNavBtn} ${activeYear === t.year ? styles.active : ''}`}
                  onClick={() => handleYearClick(t.year)}
                >
                  {t.year}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Seções de cada ano */}
      {timelineYears.map((t, idx) => (
        <section
          key={t.year}
          id={`year-${t.year}`}
          className={styles.yearSection}
        >
          <div className="container">
            <h2 className={styles.yearTitle}>{t.year}</h2>

            {/* Eventos do ano (alterna layout esquerda/direita) */}
            {t.events.map((event, i) => (
              <div
                key={i}
                className={
                  i % 2 === 0
                    ? styles.eventRow
                    : styles.eventRowReverse
                }
              >
                <div className={styles.eventText}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <p>{event.text}</p>
                </div>
                <div className={styles.eventImage}>
                  <div className={styles.eventImageBox}>
                    <img
                      src={event.imagem}
                      alt={event.title}
                      className={styles.eventImg}
                      />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export default Timeline