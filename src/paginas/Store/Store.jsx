// Store - réplicas da página /stores do site Beatles
// 4 cards de regiões (com bandeiras) + grid com 4 produtos (uma fileira)
// Apenas o primeiro produto tem link interno (rota). Os outros são estáticos.
import { Link } from 'react-router-dom';
import styles from './Store.module.css';

const regions = [
  {
    id: 1,
    flag: 'https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-08/UK_EU_Flag.jpeg?itok=3jm44Qd8',
    alt: 'Bandeira do Reino Unido / UE',
    title: 'UK Store',
    link: 'https://ukstore.thebeatles.com/',
  },
  {
    id: 2,
    flag: 'https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-08/us_flag.png?itok=VRRwyaKT',
    alt: 'Bandeira dos EUA',
    title: 'North American Store',
    link: 'https://usastore.thebeatles.com/',
  },
  {
    id: 3,
    flag: 'https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2021-08/jp_flag.png?itok=vjLs5HIb',
    alt: 'Bandeira do Japão',
    title: 'Japan Store',
    link: 'https://the-beatles-store.jp/',
  },
  {
    id: 4,
    flag: 'https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2023-10/Beatles_white.jpg?itok=ujvk5BM9',
    alt: 'Logo dos Beatles',
    title: 'Rest of World',
    link: 'https://TheBeatles.lnk.to/StoreROWWE',
  },
];

const products = [
  {
    id: 1,
    title: 'The Beatles Anthology Book 2025. Out Now.',
    image: 'https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2025-10/The%20Beatles%20Anthology_on%20black%20angle%20upright.jpg?itok=4CNHBFej',
    route: '/store/beatles-anthology-book-2025-out-now',
  },
  {
    id: 2,
    title: 'The Beatles Anthology 12LP Official Store Exclusive',
    image: 'https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2025-08/Anthology_ProductShot_Vinyl_OCard_D2C_sq.jpg?itok=MDWYXLvh',
  },
  {
    id: 3,
    title: 'The Beatles Anthology 12LP',
    image: 'https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2025-08/Anthology_ProductShot_Vinyl_sq.jpg?itok=FAJkQcQb',
  },
  {
    id: 4,
    title: 'The Beatles Anthology 8CD Official Store Exclusive',
    image: 'https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2025-08/Anthology_ProductShot_CD_OCard_D2C_sq_0.jpg?itok=Z7sZ5qMy',
  },
];

function Store() {
  return (
    <div className={styles.page}>
      
      {/* PAGE TITLE */}
      <div className={styles.pageTitleSection}>
        <div className={styles.pageTitleInner}>
          <h1 className={styles.pageTitle}>Lojas</h1>
        </div>
      </div>

      {/* REGIONS GRID - 4 cards com bandeiras (apenas visual, sem link externo) */}
      <div className={styles.regionsSection}>
        <div className="container-fluid">
          <div className={styles.regionsGrid}>
            {regions.map((region) => (
              <div key={region.id} className={styles.regionCard}>
                <div className={styles.regionInner}>
                  <div className={styles.regionImage}>
                    <img src={region.flag} alt={region.alt} />
                  </div>
                  <div className={styles.regionBtnWrap}>
                    <span className={styles.regionBtn}>{region.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className={styles.dividerWrap}>
        <div className="container-fluid">
          <div className={styles.divider}></div>
        </div>
      </div>

      {/* PRODUCTS GRID - 4 produtos em uma fileira */}
      <div className={styles.productsSection}>
        <div className="container-fluid">
          <div className={styles.productsGrid}>
            {products.map((p) => (
              <article key={p.id} className={styles.product}>
                {p.route ? (
                  <Link to={p.route} className={styles.productLink}>
                    <div className={styles.productImage}>
                      <img src={p.image} alt={p.title} loading="lazy" />
                    </div>
                    <div className={styles.productBody}>
                      <h3 className={styles.productTitle}>{p.title}</h3>
                    </div>
                  </Link>
                ) : (
                  <div className={styles.productLink}>
                    <div className={styles.productImage}>
                      <img src={p.image} alt={p.title} loading="lazy" />
                    </div>
                    <div className={styles.productBody}>
                      <h3 className={styles.productTitle}>{p.title}</h3>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
