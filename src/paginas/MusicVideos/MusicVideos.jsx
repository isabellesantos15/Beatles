// Página: MusicVideos
// Lista os vídeos musicais dos Beatles com busca por nome.
// Apenas o card "I Want To Hold Your Hand" é clicável (leva à página de detalhe específica).
// Os demais cards não navegam — apenas o botão de favoritar é interativo.

import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Busca from '../../componentes/Busca.jsx'
import ItemCard from '../../componentes/ItemCard.jsx'
import { getMusicVideos, getItensFiltrados } from '../../servicos/dadosService.js'
import gridStyles from '../../componentes/GridPage/GridPage.module.css'

export default function MusicVideos() {
  const videos = useMemo(() => getMusicVideos(), [])

  const [busca, setBusca] = useState('')

  const filtrados = useMemo(
    () => getItensFiltrados(videos, { search: busca }),
    [videos, busca]
  )

  return (
    <div className={gridStyles.page}>
      <div className="container">
        <h1 className={gridStyles.pageTitle}>Vídeos Musicais</h1>
        <p className={gridStyles.pageSubtitle}>
          {videos.length} vídeos • {filtrados.length} exibidos
        </p>

        <div className={gridStyles.toolbar}>
          <Busca onBuscar={setBusca} placeholder="Buscar vídeo..." total={filtrados.length} />
        </div>

        {filtrados.length === 0 ? (
          <p className={gridStyles.empty}>Nenhum vídeo encontrado com os filtros atuais.</p>
        ) : (
          <div className={gridStyles.cardsGrid}>
            {filtrados.map((v) => {
              // Apenas "I Want To Hold Your Hand" tem página de detalhe
              const temDetalhe = v.slug === 'i-want-hold-your-hand'

              return (
                <div key={v.id}>
                  {temDetalhe ? (
                    <Link
                      to={`/music-videos/${v.slug}`}
                      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                    >
                      <ItemCard item={v} />
                    </Link>
                  ) : (
                    <ItemCard item={v} />
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
