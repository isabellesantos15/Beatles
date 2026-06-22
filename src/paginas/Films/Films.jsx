// Página: Films
// Lista os filmes dos Beatles com busca por nome.
// Apenas o card "A Hard Day's Night" é clicável (leva à página de detalhe específica).
// Os demais cards não navegam — apenas o botão de favoritar é interativo.

import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Busca from '../../componentes/Busca.jsx'
import ItemCard from '../../componentes/ItemCard.jsx'
import { getFilms, getItensFiltrados } from '../../servicos/dadosService.js'
import gridStyles from '../../componentes/GridPage/GridPage.module.css'

export default function Films() {
  const films = useMemo(() => getFilms(), [])

  const [busca, setBusca] = useState('')

  const filtrados = useMemo(
    () => getItensFiltrados(films, { search: busca }),
    [films, busca]
  )

  return (
    <div className={gridStyles.page}>
      <div className="container">
        <h1 className={gridStyles.pageTitle}>Filmes</h1>
        <p className={gridStyles.pageSubtitle}>
          {films.length} filmes • {filtrados.length} exibidos
        </p>

        <div className={gridStyles.toolbar}>
          <Busca onBuscar={setBusca} placeholder="Buscar filme..." total={filtrados.length} />
        </div>

        {filtrados.length === 0 ? (
          <p className={gridStyles.empty}>Nenhum filme encontrado com os filtros atuais.</p>
        ) : (
          <div className={gridStyles.cardsGrid}>
            {filtrados.map((film) => {
              // Apenas "A Hard Day's Night" tem página de detalhe
              const temDetalhe = film.slug === 'a-hard-days-night'

              return (
                <div key={film.id}>
                  {temDetalhe ? (
                    <Link
                      to={`/films/${film.slug}`}
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      <ItemCard item={film} />
                    </Link>
                  ) : (
                    <ItemCard item={film} />
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
