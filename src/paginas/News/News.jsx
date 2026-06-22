// Página: News
// Lista as notícias dos Beatles com busca em tempo real por nome.
// Layout padronizado (mesmo padrão de Albums e Songs): pageTitle +
// pageSubtitle + toolbar com busca + grid de cards.
// Apenas as notícias com slug mapeado em `noticiasComDetalhe` viram links
// para a rota própria. As demais não navegam — apenas o botão favoritar
// é interativo.

import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Busca from '../../componentes/Busca.jsx'
import ItemCard from '../../componentes/ItemCard.jsx'
import { getNews, getItensFiltrados } from '../../servicos/dadosService.js'
import gridStyles from '../../componentes/GridPage/GridPage.module.css'

// Slugs de notícias com página de detalhe + a rota específica de cada uma
const noticiasComDetalhe = {
  'beatles-get-back-savile-row': '/news/beatles-get-back-savile-row',
  'beatles-anthology-book-2025-out-now': '/store/beatles-anthology-book-2025-out-now',
}

export default function News() {
  const todas = useMemo(() => getNews(), [])
  const [busca, setBusca] = useState('')

  const filtradas = useMemo(
    () => getItensFiltrados(todas, { search: busca }),
    [todas, busca]
  )

  return (
    <div className={gridStyles.page}>
      <div className="container">
        <h1 className={gridStyles.pageTitle}>Notícias</h1>
        <p className={gridStyles.pageSubtitle}>
          {todas.length} notícias • {filtradas.length} exibidas
        </p>

        <div className={gridStyles.toolbar}>
          <Busca onBuscar={setBusca} placeholder="Buscar notícia..." total={filtradas.length} />
        </div>

        {filtradas.length === 0 ? (
          <p className={gridStyles.empty}>Nenhuma notícia encontrada.</p>
        ) : (
          <div className={gridStyles.cardsGrid}>
            {filtradas.map((n) => {
              const linkDestino = noticiasComDetalhe[n.slug]
              return (
                <div key={n.id}>
                  {linkDestino ? (
                    <Link
                      to={linkDestino}
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      <ItemCard item={n} />
                    </Link>
                  ) : (
                    <ItemCard item={n} />
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
