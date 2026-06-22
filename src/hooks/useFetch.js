// Custom hook: useFetch
// Faz fetch de uma URL e retorna { data, loading, error }.
// Re-executa quando a URL muda. Ideal para carregar dados de APIs externas
// ou simular fetch a partir de arquivos JSON no projeto.
//
// Uso:
//   const { data, loading, error } = useFetch('/api/albuns.json')

import { useState, useEffect } from 'react'

export function useFetch(url, options = {}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Cancela o fetch se o componente desmontar antes de terminar
    let cancelado = false
    setLoading(true)
    setError(null)

    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((json) => {
        if (!cancelado) setData(json)
      })
      .catch((err) => {
        if (!cancelado) setError(err)
      })
      .finally(() => {
        if (!cancelado) setLoading(false)
      })

    return () => {
      cancelado = true
    }
  }, [url]) // eslint-disable-line react-hooks/exhaustive-deps

  return { data, loading, error }
}