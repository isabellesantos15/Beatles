// Componente genérico para páginas de listagem (Albums, Films, MusicVideos, News).
// Recebe um array de 'items' (já filtrado pela página) e renderiza no grid responsivo.

import CartaoItem from '../CartaoItem.jsx'
import styles from './GridPage.module.css'

export default function GridPage({ title, subtitle, items, linkBase }) {
  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.pageTitle}>{title}</h1>
        {subtitle && <p className={styles.pageSubtitle}>{subtitle}</p>}

        {items.length === 0 ? (
          <p className={styles.empty}>Nenhum item encontrado com os filtros atuais.</p>
        ) : (
          <div className={styles.cardsGrid}>
            {items.map((item) => (
              <CartaoItem
                key={item.id}
                item={item}
                linkTo={linkBase ? `${linkBase}/${item.slug || item.id}` : null}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}