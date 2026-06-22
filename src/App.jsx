import { Routes, Route } from 'react-router-dom'

import Header from './componentes/Header/Header.jsx'
import Footer from './componentes/Footer/Footer.jsx'
import ScrollToTop from './componentes/ScrollToTop.jsx'

import Home from './paginas/Home/Home.jsx'
import HappyBirthdayPaul5 from './paginas/HappyBirthdayPaul5/HappyBirthdayPaul5.jsx'
import BeatlesDay from './paginas/BeatlesDay/BeatlesDay.jsx'
import Timeline from './paginas/Timeline/Timeline.jsx'
import News from './paginas/News/News.jsx'
import NewsDetail from './paginas/NewsDetail/NewsDetail.jsx'
import Albums from './paginas/Albums/Albums.jsx'
import MusicVideos from './paginas/MusicVideos/MusicVideos.jsx'
import MusicVideoDetail from './paginas/MusicVideoDetail/MusicVideoDetail.jsx'
import Films from './paginas/Films/Films.jsx'
import Songs from './paginas/Songs/Songs.jsx'
import Store from './paginas/Store/Store.jsx'
import BeatlesAnthologyBook from './paginas/BeatlesAnthologyBook/BeatlesAnthologyBook.jsx'
import MonoVinyl from './paginas/MonoVinyl/MonoVinyl.jsx'
import Newsletter from './paginas/Newsletter/Newsletter.jsx'
import PleasePleaseMeDetail from './paginas/PleasePleaseMeDetail/PleasePleaseMeDetail.jsx'
import HardDaysNightDetail from './paginas/HardDaysNightDetail/HardDaysNightDetail.jsx'
import HereComesTheSunDetail from './paginas/HereComesTheSunDetail/HereComesTheSunDetail.jsx'

function App() {
  return (
    <>
      {/* Sempre volta pro topo quando muda de página */}
      <ScrollToTop />

      {/* Header fixo com logo e menu */}
      <Header />

      {/* Área principal - cada rota mostra uma página */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/happy-birthday-paul-5" element={<HappyBirthdayPaul5 />} />
          <Route path="/global-beatles-day" element={<BeatlesDay />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/beatles-get-back-savile-row" element={<NewsDetail />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/please-please-me" element={<PleasePleaseMeDetail />} />
          <Route path="/music-videos" element={<MusicVideos />} />
          <Route path="/music-videos/:slug" element={<MusicVideoDetail />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/a-hard-days-night" element={<HardDaysNightDetail />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/here-comes-the-sun" element={<HereComesTheSunDetail />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/beatles-anthology-book-2025-out-now" element={<BeatlesAnthologyBook />} />
          <Route path="/mono-vinyl" element={<MonoVinyl />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </main>

      {/* Rodapé com 4 colunas */}
      <Footer />
    </>
  )
}

export default App