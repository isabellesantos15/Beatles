# The Beatles — Site Temático (React + Vite)

> Projeto da disciplina **TOY-3D**: recriar o site do repositório-base [bruno-a-dias/toy3d](https://github.com/bruno-a-dias/toy3d) com React + Vite, tema **The Beatles** definido pelo grupo.

## 🎯 Tema

**The Beatles** — site institucional/histórico com páginas de álbuns, músicas, filmes, vídeos musicais, notícias, timeline e muito mais. O conteúdo do repositório original foi **totalmente substituído** pelo tema Beatles.

## 🗂️ Arquitetura de pastas

```
beatles/
├── public/                  (imagens estáticas, se houver)
├── src/
│   ├── assets/              ← PNGs do tema (albums, films, etc.)
│   ├── components/          ← Componentes reutilizáveis
│   │   ├── Header/          (com badge de favoritos)
│   │   ├── Footer/
│   │   ├── GridPage/        (wrapper de layout)
│   │   ├── CartaoItem.jsx   (card genérico: imagem, badge, fav)
│   │   ├── ItemCard.jsx     (card sem link)
│   │   ├── Busca.jsx        (campo de busca em tempo real)
│   │   ├── FiltroCategoria.jsx (filtro por botões)
│   │   └── ScrollToTop.jsx
│   ├── context/             ← Context API
│   │   └── FavoritosContext.jsx
│   ├── data/                ← Arrays de dados (8-12 itens, 9+ campos)
│   │   ├── albums.js
│   │   ├── songs.js
│   │   ├── films.js
│   │   ├── musicVideos.js
│   │   ├── news.js
│   │   └── timeline.js
│   ├── hooks/               ← Custom hooks
│   │   ├── useLocalStorage.js
│   │   └── useFetch.js
│   ├── pages/               ← Páginas (19 rotas)
│   │   ├── Home/
│   │   ├── Albums/
│   │   ├── Songs/
│   │   ├── Films/
│   │   ├── MusicVideos/
│   │   ├── News/
│   │   ├── Timeline/
│   │   ├── Store/
│   │   └── ...
│   ├── services/            ← Camada de serviços
│   │   └── dadosService.js
│   ├── App.jsx              (definição das rotas)
│   ├── main.jsx             (entrada: BrowserRouter + FavoritosProvider)
│   └── index.css            (reset + variáveis de cor)
├── vercel.json              (rewrites para SPA no Vercel)
├── vite.config.js
├── package.json
└── README.md
```

## ⚙️ Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev          # http://localhost:5173

# 3. Gerar build de produção
npm run build

# 4. Testar o build localmente (pré-visualização)
npm run preview      # http://localhost:4173
```

## 🌐 Deploy na Vercel

1. Suba o projeto para um **repositório público no GitHub**.
2. Acesse [vercel.com](https://vercel.com) → **Add New Project** → selecione o repositório.
3. O `vercel.json` na raiz já configura o rewrite SPA, então rotas como `/timeline` não vão quebrar no reload.
4. (Opcional) Adicione variáveis de ambiente em **Settings → Environment Variables** se o projeto usar chaves de API no futuro.
5. Clique em **Deploy** — em 1-2 minutos o site está no ar.

## ✨ Features implementadas

### 1. Planejamento
- ✅ Tema definido: The Beatles
- ✅ Wireframe mental → refletido nas rotas e na hierarquia de páginas
- ✅ Boas práticas de pastas (`pages/`, `components/`, `data/`, `hooks/`, `services/`, `context/`)

### 2. Arquitetura
- ✅ Pastas separadas por responsabilidade
- ✅ `services/` centraliza acesso a dados (`dadosService.js`)
- ✅ `context/` prove o `FavoritosContext` global
- ✅ `hooks/` com `useLocalStorage` e `useFetch` reutilizáveis

### 3. Custom Hooks
- ✅ `useLocalStorage(chave, valorInicial)` — persiste state no navegador (usado pelo `FavoritosContext`)
- ✅ `useFetch(url)` — encapsula fetch + loading + error + cleanup

### 4. Estilização
- ✅ **CSS Modules** em todos os componentes (escopo local, sem conflito de classes)
- ✅ Paleta de 3 cores principais: `#fcd4b9` (peach), `#ab504d` (red), `#579a18` (green)
- ✅ Cards com `border-radius: 12px`, `box-shadow`, `object-fit: cover`
- ✅ Botões estilizados (sem visual padrão do browser)

### 5. Deploy
- ✅ `vercel.json` configurado com rewrites para SPA
- ✅ Build de produção via `npm run build`

## 📦 Conteúdo

- **6 arrays de dados**, cada um com **8-12 itens** (≥ 8 ✅)
- **Cada item tem 9+ campos** (`id`, `title`, `year`, `categoria`, `descricao`, `status`, `imagem`, + campos específicos)
- **17 imagens locais** em `src/assets/` + URLs remotas do thebeatles.com
- **3 embeds de vídeo** (YouTube + Spotify + Instagram)

## 🎛️ Interação com useState

O projeto **combina 3 das 4 opções** do enunciado:

| Opção | Onde | Descrição |
|---|---|---|
| **A — Favoritar** | `CartaoItem` / `ItemCard` | Botão ♡/♥ em cada card persiste no `localStorage`. Badge no header mostra a contagem. |
| **B — Filtro** | `FiltroCategoria` | Botões "Todos / Disponível / Indisponível" + filtro por categoria. |
| **C — Busca** | `Busca` | Campo de texto que filtra os cards em **tempo real** à medida que o usuário digita. |
| **D — Detalhes** | Sub-rotas | Clique no card navega para a página de detalhe do item. |

## 🚀 Rotas

| Rota | Página |
|---|---|
| `/` | Home |
| `/happy-birthday-paul-5` | Paul's birthday |
| `/global-beatles-day` | Global Beatles Day |
| `/timeline` | Linha do tempo |
| `/news` | Notícias |
| `/news/:slug` | Detalhe de notícia |
| `/albums` | Álbuns (com busca + filtro) |
| `/albums/:slug` | Detalhe de álbum |
| `/music-videos` | Vídeos musicais (com busca + filtro) |
| `/music-videos/:slug` | Detalhe de vídeo |
| `/films` | Filmes (com busca + filtro) |
| `/songs` | Músicas (com busca + filtro) |
| `/songs/:slug` | Detalhe de música |
| `/store` | Loja |
| `/store/:slug` | Detalhe de produto |
| `/mono-vinyl` | Mono Vinyl |
| `/newsletter` | Cadastro de newsletter |

## 🧪 Telas de referência

- **21st.dev** (https://21st.dev) — referência de composição de cards e dashboards
- **thebeatles.com** (https://www.thebeatles.com) — inspiração de paleta, tipografia e estrutura

## 👥 Grupo

Projeto desenvolvido em grupo de até 5 pessoas. Apresentação de **10 minutos** mostrando: tema, arquitetura, demo da busca + filtro + favoritar, código dos hooks/context, e considerações sobre o deploy.

---

🎵 *All you need is love* 🎵
