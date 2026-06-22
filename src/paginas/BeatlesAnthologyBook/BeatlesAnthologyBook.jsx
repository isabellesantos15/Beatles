// Detalhe do produto: The Beatles Anthology Book 2025
// Página acessada ao clicar no primeiro produto da Store
import styles from './BeatlesAnthologyBook.module.css';

function BeatlesAnthologyBook() {
  return (
    <div className={styles.page}>

      {/* PAGE TITLE SECTION - 3 colunas (esquerda vazia / meio conteúdo / direita vazia) */}
      <div className={styles.pageTitleSection}>
        <div className={styles.pageTitleRow}>
          <div className={styles.sideColumn}></div>

          <div className={styles.titleColumn}>
            <div className={styles.titleInner}>
              <p className={styles.preTitle}>News - 14 October 2025</p>
              <h1 className={styles.pageTitle}>The Beatles Anthology Book 2025. Out Now.</h1>
              <p className={styles.subtitle}></p>
            </div>
          </div>

          <div className={styles.sideColumn}></div>
        </div>
      </div>

      {/* MAIN CONTENT SECTION - 3 colunas (esquerda vazia / meio conteúdo / direita sidebar) */}
      <div className={styles.contentSection}>
        <div className={styles.contentRow}>
          {/* Coluna esquerda vazia */}
          <div className={styles.leftColumn}></div>

          {/* Coluna central - conteúdo principal com bordas laterais */}
          <div className={styles.mainColumn}>
            {/* Imagem do livro (linkada) */}
            <figure className={styles.bookImage}>
              <a
                href="http://lnk.to/BeatlesAnthology25thAnniversary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.thebeatles.com/sites/default/files/2025-10/Beatles_ShelfAwarenessEblast___0.gif"
                  alt="The Beatles Anthology Book 2025"
                />
              </a>
            </figure>

            {/* Texto descritivo */}
            <p className={styles.bodyText}>
              <em>✮OUT TODAY!✮ The Beatles Anthology is now available everywhere you find books, online and in-stores in the U.S.!</em>
            </p>

            <p className={styles.bodyText}>
              <em>The Beatles Anthology tells the complete story of The Beatles. John, Paul, George and Ringo share their honest, intimate and revelatory recollections of the band's journey. From growing up in Liverpool, to becoming a global phenomenon and their ultimate breakup, here's the inside story.</em>
            </p>

            <p className={styles.bodyText}>
              <em>Arranged by year, the book is illustrated with over 1300 images, including photographs, documents, and other memorabilia from their personal collections and the band's archives.</em>
            </p>

            <p className={styles.bodyText}>
              <em>This once-in-a-lifetime volume is the perfect gift for all fans of the legendary band that inspired generations.</em>
            </p>

            <p className={styles.bodyText}>
              <em>📣Stay tuned, UK fans! The book releases soon on 10/23/2025</em>
            </p>

            {/* Botão verde "Order Your Copy" */}
            <div className={styles.buttonContainer}>
              <a
                className={styles.orderButton}
      
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Your Copy
              </a>
            </div>
          </div>

          {/* Sidebar direita - Related Articles */}
          <aside className={styles.rightColumn}>
            <h2 className={styles.sidebarTitle}>Related Articles</h2>

            <div className={styles.relatedItem}>
              <div className={styles.relatedText}>
                <p className={styles.relatedPreTitle}>Product</p>
                <a className={styles.relatedLink}>
                  The Beatles Anthology 4: 3LP
                </a>
              </div>
              <a href="/beatles-anthology-4-3lp" className={styles.relatedImage}>
                <img
                  src="https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2025-09/Beatles_Anthology4_3LP_3D_front_e8421fef-e05a-4f82-afb6-ef516bfc8ff4v4.jpg?itok=9rS__Auk"
                  alt="anthology 4 3LP"
                />
              </a>
            </div>

            <div className={styles.relatedItem}>
              <div className={styles.relatedText}>
                <p className={styles.relatedPreTitle}>Product</p>
                <a className={styles.relatedLink}>
                  The Beatles Anthology 4: 2CD
                </a>
              </div>
              <a href="/beatles-anthology-4-2cd" className={styles.relatedImage}>
                <img
                  src="https://www.thebeatles.com/sites/default/files/styles/responsive_thumbnail_mobile/public/2025-09/Beatles_Anthology4_CD_Square_09255a9c-3741-4774-b132-e2535110c1fcv4.jpg?itok=A7fc7OQA"
                  alt="anthology 4 2CD"
                />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default BeatlesAnthologyBook;
