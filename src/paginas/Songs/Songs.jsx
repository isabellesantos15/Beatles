// Página: Songs
// Lista as músicas dos Beatles em formato de tabela (visual idêntico ao
// site original). Apenas "Here Comes the Sun" tem link para página de
// detalhe. Sem cards visuais — apenas a tabela.

import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Busca from '../../componentes/Busca.jsx'
import { getSongs, getItensFiltrados } from '../../servicos/dadosService.js'
import gridStyles from '../../componentes/GridPage/GridPage.module.css'
import songsStyles from './Songs.module.css'

export default function Songs() {
  const songs = useMemo(() => getSongs(), [])

  const [busca, setBusca] = useState('')

  const filtradas = useMemo(
    () => getItensFiltrados(songs, { search: busca }),
    [songs, busca]
  )

  return (
    <div className={gridStyles.page}>
      <div className="container">
        <h1 className={gridStyles.pageTitle}>Músicas</h1>
        <p className={gridStyles.pageSubtitle}>
          {songs.length} músicas • {filtradas.length} exibidas
        </p>

        <div className={gridStyles.toolbar}>
          <Busca onBuscar={setBusca} placeholder="Buscar música..." total={filtradas.length} />
        </div>

        {filtradas.length === 0 ? (
          <p className={gridStyles.empty}>Nenhuma música encontrada.</p>
        ) : (
          <div className={songsStyles.tableWrap}>
            <table className={songsStyles.table}>
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Álbum</th>
                  <th>Compositor</th>
                  <th>Duração</th>
                </tr>
              </thead>
              <tbody>
                {filtradas.map((song) => {
                  // Apenas "Here Comes the Sun" tem página de detalhe
                  const temDetalhe = song.slug === 'here-comes-the-sun'
                  return (
                    <tr key={song.id}>
                      <td>
                        {temDetalhe ? (
                          <Link
                            to={`/songs/${song.slug}`}
                            style={{ color: 'inherit', textDecoration: 'none' }}
                          >
                            {song.title}
                          </Link>
                        ) : (
                          song.title
                        )}
                      </td>
                      <td>{song.album}</td>
                      <td>{song.compositor}</td>
                      <td>{song.duracao}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
