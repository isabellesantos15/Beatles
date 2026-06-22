// Mono Vinyl - mostra o iframe do site oficial
import styles from './MonoVinyl.module.css'

function MonoVinyl() {
  return (
    <div className={styles.iframeWrap}>
      {/* Mesmo iframe do site original */}
      <iframe
        src="https://thebeatlesvinyl.com/index.html"
        title="The Beatles in Mono"
        scrolling="yes"
      ></iframe>
    </div>
  )
}

export default MonoVinyl