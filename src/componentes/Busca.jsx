// Componente: Busca
// Campo de busca controlado por useState. Filtra cards em tempo real
// à medida que o usuário digita. Usado em todas as páginas de listagem.

import { useState } from 'react'
import styles from './Busca.module.css'

export default function Busca({ onBuscar, placeholder = 'Buscar...', total }) {
  const [valor, setValor] = useState('')

  const handleChange = (e) => {
    const novoValor = e.target.value
    setValor(novoValor)
    onBuscar(novoValor)
  }

  const handleLimpar = () => {
    setValor('')
    onBuscar('')
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.field}>
        <span className={styles.icon} aria-hidden="true">🔍</span>
        <input
          type="text"
          className={styles.input}
          value={valor}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {valor && (
          <button
            type="button"
            className={styles.clear}
            onClick={handleLimpar}
            aria-label="Limpar busca"
          >
            ×
          </button>
        )}
      </div>
      {typeof total === 'number' && (
        <span className={styles.contador}>
          {total} {total === 1 ? 'resultado' : 'resultados'}
        </span>
      )}
    </div>
  )
}