// Custom hook: useLocalStorage
// Persiste um valor no localStorage com a mesma API do useState.
// Lê o valor inicial do localStorage se já existir; caso contrário, usa o default.
// Re-renderiza o componente sempre que o valor muda (como useState).

import { useState, useEffect } from 'react'

export function useLocalStorage(chave, valorInicial) {
  // Estado inicial: tenta ler do localStorage, cai no valorInicial se falhar
  const [valor, setValor] = useState(() => {
    try {
      const item = window.localStorage.getItem(chave)
      return item !== null ? JSON.parse(item) : valorInicial
    } catch (erro) {
      // Se o JSON estiver corrompido ou o localStorage bloqueado, usa o inicial
      console.warn(`useLocalStorage: erro ao ler ${chave}`, erro)
      return valorInicial
    }
  })

  // Sempre que o valor mudar, grava no localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(chave, JSON.stringify(valor))
    } catch (erro) {
      console.warn(`useLocalStorage: erro ao gravar ${chave}`, erro)
    }
  }, [chave, valor])

  return [valor, setValor]
}