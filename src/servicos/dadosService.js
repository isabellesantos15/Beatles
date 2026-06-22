// Camada de serviços: centraliza o acesso e transformação dos dados do tema.
// As páginas passam a importar daqui (não mais direto de /data) — atende o
// requisito de "services/" da arquitetura.
//
// Padrão: cada função é pura e retorna o array/objeto pedido, sem side effects.
// Isso facilita trocar a fonte dos dados (ex.: futuramente um fetch HTTP
// usando o hook useFetch) sem precisar reescrever as páginas.

import { albums } from '../dados/albums.js'
import { songs } from '../dados/songs.js'
import { films } from '../dados/films.js'
import { musicVideos } from '../dados/musicVideos.js'
import { news } from '../dados/news.js'
import { timelineYears } from '../dados/timeline.js'

// --- Leitura "crua" (já filtrada por tipo) -------------------------------

export function getAlbuns() {
  return albums
}

export function getSongs() {
  return songs
}

export function getFilms() {
  return films
}

export function getMusicVideos() {
  return musicVideos
}

export function getNews() {
  return news
}

export function getTimeline() {
  return timelineYears
}

// --- Buscas por chave ----------------------------------------------------

export function getAlbumBySlug(slug) {
  return albums.find((a) => a.slug === slug)
}

export function getSongBySlug(slug) {
  return songs.find((s) => s.slug === slug)
}

export function getFilmBySlug(slug) {
  return films.find((f) => f.slug === slug)
}

export function getMusicVideoBySlug(slug) {
  return musicVideos.find((v) => v.slug === slug)
}

export function getNewsBySlug(slug) {
  return news.find((n) => n.slug === slug)
}

// --- Filtros / agregações -----------------------------------------------

// Retorna itens cujo 'year' começa com o prefixo dado (ex: '196')
export function getAlbunsByDecade(decade) {
  return albums.filter((a) => String(a.year).startsWith(String(decade)))
}

// Retorna músicas de um álbum específico
export function getSongsByAlbum(albumTitulo) {
  return songs.filter((s) => s.album === albumTitulo)
}

// Filtro genérico reutilizado por todas as páginas de listagem.
// Recebe um array e um objeto { search, status, categoria }.
export function getItensFiltrados(items, { search = '', status = 'Todos', categoria = 'Todos' } = {}) {
  return items.filter((item) => {
    // Filtro de busca por texto (case-insensitive) em title e descricao
    if (search) {
      const busca = search.toLowerCase()
      const bateEm =
        (item.title || '').toLowerCase().includes(busca) ||
        (item.descricao || '').toLowerCase().includes(busca) ||
        (item.album || '').toLowerCase().includes(busca) ||
        (item.categoria || '').toLowerCase().includes(busca)
      if (!bateEm) return false
    }
    // Filtro de status (Disponível / Indisponível / Todos)
    if (status !== 'Todos' && item.status !== status) return false
    // Filtro de categoria
    if (categoria !== 'Todos' && item.categoria !== categoria) return false
    return true
  })
}

// Retorna categorias únicas de um array (para popular o filtro)
export function getCategorias(items) {
  return ['Todos', ...new Set(items.map((i) => i.categoria).filter(Boolean))]
}

// Estatísticas gerais para a home / dashboard
export function getEstatisticas() {
  return {
    totalAlbuns: albums.length,
    totalSongs: songs.length,
    totalFilms: films.length,
    totalMusicVideos: musicVideos.length,
    totalNews: news.length,
    anoMaisAntigo: Math.min(...albums.map((a) => Number(String(a.year).slice(0, 4)) || 9999)),
    anoMaisRecente: Math.max(...albums.map((a) => Number(String(a.year).slice(0, 4)) || 0)),
  }
}