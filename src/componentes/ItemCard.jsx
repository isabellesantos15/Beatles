// ItemCard: variante "pura" (sem link de navegação) usada em páginas como
// News e como bloco reutilizável.
// Inclui imagem, badge, título e descrição.

import styles from './CartaoItem.module.css'

export default function ItemCard({ item }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={item.imagem}
          alt={item.title}
          className={styles.imagem}
          loading="lazy"
        />
        <span
          className={`${styles.badge} ${
            item.status === 'Disponível' ? styles.badgeOn : styles.badgeOff
          }`}
        >
          {item.status}
        </span>
      </div>
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.year}>{item.year}</span>
          {item.categoria && <span className={styles.cat}>{item.categoria}</span>}
        </div>
        <h3 className={styles.title}>{item.title}</h3>
        {item.descricao && <p className={styles.desc}>{item.descricao}</p>}
      </div>
    </article>
  )
}