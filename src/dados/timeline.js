// Dados: timeline (4 anos, do início até 1965)
// Mantém a estrutura original e adiciona 'imagem' e 'slug' por evento
// para possível uso futuro em cards expansíveis.

import timelineImg from '../assets/image copy.png'
import albumsImg from '../assets/image copy 2.png'
import pleaseMeImg from '../assets/image copy 3.png'
import filmsImg from '../assets/image copy 4.png'
import homeImg from '../assets/image copy 5.png'

export const timelineYears = [
  {
    year: '1960-62',
    events: [
      { title: 'Os Beatles se formam em Liverpool', text: 'John Lennon, Paul McCartney, George Harrison e Pete Best (posteriormente substituído por Ringo Starr) formam os Beatles em 1960.', imagem: albumsImg },
      { title: 'Residência em Hamburgo',                   text: 'A banda toca em longas temporadas em Hamburgo, na Alemanha, refinando seu som.', imagem: albumsImg },
    ],
  },
  {
    year: '1963',
    events: [
      { title: 'Please Please Me reaches #1',         text: "O primeiro single da banda atinge o topo das paradas britânicas.", imagem: pleaseMeImg },
      { title: 'Royal Variety Performance',          text: 'Os Beatles se apresentam no Royal Variety Show, encantando a nação.', imagem: timelineImg },
    ],
  },
  {
    year: '1964',
    events: [
      { title: 'Aparência no Ed Sullivan',              text: 'Os Beatles aparecem no The Ed Sullivan Show, dando início à "Beatlemania" na América.', imagem: homeImg },
      { title: "Filme A Hard Day's Night",             text: 'O primeiro filme dos Beatles estréia, tornando-se um sucesso crítico e comercial.', imagem: filmsImg },
    ],
  },
  {
    year: '1965',
    events: [
      { title: 'Filme Help! released',                 text: "O segundo longa-metragem dos Beatles é lançado.", imagem: filmsImg },
      { title: 'Condecoração MBE',                          text: 'Todos os quatro Beatles são nomeados Membros da Ordem do Império Britânico.', imagem: timelineImg },
    ],
  },
]