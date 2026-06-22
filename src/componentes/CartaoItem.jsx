// Componente reutilizável: CartaoItem
// Recebe um objeto 'item' por prop e renderiza um card com:
// - Imagem com object-fit: cover (requisito visual)
// - Borda arredondada e box-shadow (requisito visual)
// - Badge de status (Disponível/Indisponível)
//
// É usado por Albums, Films, MusicVideos, Songs e News.

import { Link } from 'react-router-dom'
import styles from './CartaoItem.module.css'

export default function CartaoItem({ item, linkTo }) {
  // Conteúdo do card (sem o link de navegação)
  const conteudo = (
    <>
      <div className={styles.imageWrap}>
        <img
          src={item.imagem}
          alt={item.title}
          className={styles.imagem}
          loading="lazy"
        />
        {/* Badge de status no canto superior direito */}
        <span className={`${styles.badge} ${item.status === 'Disponível' ? styles.badgeOn : styles.badgeOff}`}>
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
    </>
  )

  // Se recebeu linkTo, envolve o conteúdo num Link do react-router
  if (linkTo) {
    return (
      <article className={styles.card}>
        <Link to={linkTo} className={styles.cardLink}>
          {conteudo}
        </Link>
      </article>
    )
  }
  return <article className={styles.card}>{conteudo}</article>
}