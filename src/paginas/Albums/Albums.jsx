// Página: Albums
// Lista os álbuns dos Beatles com busca em tempo real.
// Apenas o card "Please Please Me" é clicável (leva à página de detalhe específica).
// Os demais cards não navegam — apenas o botão de favoritar é interativo.

import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Busca from '../../componentes/Busca.jsx'
import { getAlbuns, getItensFiltrados } from '../../servicos/dadosService.js'
import gridStyles from '../../componentes/GridPage/GridPage.module.css'
import cardStyles from '../../componentes/CartaoItem.module.css'

export default function Albums() {
  const albuns = useMemo(() => getAlbuns(), [])

  // useState: termo de busca
  const [busca, setBusca] = useState('')

  // Aplica a busca sempre que o termo mudar (useMemo evita recalcular à toa)
  const albunsFiltrados = useMemo(
    () => getItensFiltrados(albuns, { search: busca }),
    [albuns, busca]
  )

  return (
    <div className={gridStyles.page}>
      <div className="container">
        <h1 className={gridStyles.pageTitle}>Álbuns</h1>
        <p className={gridStyles.pageSubtitle}>
          {albuns.length} álbuns • {albunsFiltrados.length} exibidos
        </p>

        {/* Toolbar apenas com busca por nome */}
        <div className={gridStyles.toolbar}>
          <Busca onBuscar={setBusca} placeholder="Buscar álbum..." total={albunsFiltrados.length} />
        </div>

        {albunsFiltrados.length === 0 ? (
          <p className={gridStyles.empty}>Nenhum álbum encontrado com os filtros atuais.</p>
        ) : (
          <div className={gridStyles.cardsGrid}>
            {albunsFiltrados.map((album) => {
              // Apenas o álbum "Please Please Me" tem página de detalhe
              const temDetalhe = album.slug === 'please-please-me'

              const conteudo = (
                <>
                  <div className={cardStyles.imageWrap}>
                    <img src={album.imagem} alt={album.title} className={cardStyles.imagem} loading="lazy" />
                    <span className={`${cardStyles.badge} ${album.status === 'Disponível' ? cardStyles.badgeOn : cardStyles.badgeOff}`}>
                      {album.status}
                    </span>
                  </div>
                  <div className={cardStyles.body}>
                    <div className={cardStyles.meta}>
                      <span className={cardStyles.year}>{album.year}</span>
                      <span className={cardStyles.cat}>{album.categoria}</span>
                    </div>
                    <h3 className={cardStyles.title}>{album.title}</h3>
                    <p className={cardStyles.desc}>{album.descricao}</p>
                  </div>
                </>
              )

              return (
                <article key={album.id} className={cardStyles.card}>
                  {temDetalhe ? (
                    <Link to={`/albums/${album.slug}`} className={cardStyles.cardLink}>
                      {conteudo}
                    </Link>
                  ) : (
                    conteudo
                  )}
                </article>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
