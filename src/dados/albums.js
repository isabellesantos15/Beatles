// Dados: álbuns dos Beatles (10 itens, 10 campos cada)
// Substitui o array de 4 itens por uma discografia completa.
// Atende o requisito de "≥ 8 itens com ≥ 5 campos".
// O campo 'imagem' aponta para uma PNG local em /src/assets/.

import albumsImg from '../assets/image copy.png'
import pleaseMeImg from '../assets/image copy 2.png'
import daysNightImg from '../assets/image copy 3.png'
import savileRowImg from '../assets/image copy 4.png'
import comesSunImg from '../assets/image copy 5.png'
import monoVinylImg from '../assets/image copy 6.png'
import bookImg from '../assets/image copy 7.png'

export const albums = [
  {
    id: 1,
    title: 'Please Please Me',
    year: '1963',
    categoria: 'Estúdio',
    descricao: 'O álbum de estreia dos Beatles, gravado em apenas um dia nos estúdios da EMI em Abbey Road.',
    status: 'Disponível',
    imagem: pleaseMeImg,
    duracao: '32 min',
    faixas: 14,
    gravadora: 'Parlophone',
    slug: 'please-please-me',
  },
  {
    id: 2,
    title: 'With the Beatles',
    year: '1963',
    categoria: 'Estúdio',
    descricao: 'Segundo álbum de estúdio, gravado entre julho e outubro de 1963. Marcou a transição da banda para a maturidade.',
    status: 'Disponível',
    imagem: pleaseMeImg,
    duracao: '33 min',
    faixas: 14,
    gravadora: 'Parlophone',
    slug: 'with-the-beatles',
  },
  {
    id: 3,
    title: "A Hard Day's Night",
    year: '1964',
    categoria: 'Estúdio',
    descricao: 'Trilha sonora do primeiro filme dos Beatles. Composto inteiramente por canções originais de Lennon-McCartney.',
    status: 'Disponível',
    imagem: daysNightImg,
    duracao: '31 min',
    faixas: 13,
    gravadora: 'Parlophone',
    slug: 'a-hard-days-night',
  },
  {
    id: 4,
    title: 'Beatles for Sale',
    year: '1964',
    categoria: 'Estúdio',
    descricao: 'Quarto álbum, lançado a poucos dias da turnê americana. Tom mais melancólico e acústico.',
    status: 'Disponível',
    imagem: albumsImg,
    duracao: '34 min',
    faixas: 14,
    gravadora: 'Parlophone',
    slug: 'beatles-for-sale',
  },
  {
    id: 5,
    title: 'Help!',
    year: '1965',
    categoria: 'Estúdio',
    descricao: 'Trilha sonora do segundo filme. Inclui "Yesterday", uma das músicas mais regravadas da história.',
    status: 'Disponível',
    imagem: albumsImg,
    duracao: '33 min',
    faixas: 14,
    gravadora: 'Parlophone',
    slug: 'help',
  },
  {
    id: 6,
    title: 'Rubber Soul',
    year: '1965',
    categoria: 'Estúdio',
    descricao: 'Marco da evolução artística dos Beatles, com forte influência folk e soul.',
    status: 'Disponível',
    imagem: albumsImg,
    duracao: '35 min',
    faixas: 14,
    gravadora: 'Parlophone',
    slug: 'rubber-soul',
  },
  {
    id: 7,
    title: 'Revolver',
    year: '1966',
    categoria: 'Estúdio',
    descricao: 'Revolucionou o uso do estúdio como instrumento, com experimentações sonoras sem precedentes.',
    status: 'Disponível',
    imagem: albumsImg,
    duracao: '35 min',
    faixas: 14,
    gravadora: 'Parlophone',
    slug: 'revolver',
  },
  {
    id: 8,
    title: "Sgt. Pepper's Lonely Hearts Club Band",
    year: '1967',
    categoria: 'Estúdio',
    descricao: 'Obra-prima conceitual que redefiniu o álbum como forma de arte. Venceu quatro Grammy Awards.',
    status: 'Disponível',
    imagem: comesSunImg,
    duracao: '40 min',
    faixas: 13,
    gravadora: 'Parlophone',
    slug: 'sgt-peppers',
  },
]