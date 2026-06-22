// Newsletter - formulário simples de cadastro
import { useState } from 'react'
import styles from './Newsletter.module.css'

function Newsletter() {
  // useState para os campos do formulário
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  // useState pra mostrar a mensagem de sucesso
  const [subscribed, setSubscribed] = useState(false)

  // Quando o usuário envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && name) {
      setSubscribed(true)
      setEmail('')
      setName('')
      // Esconde a mensagem depois de 4 segundos
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.inner}>
          <h1 className={styles.title}>Newsletter</h1>
          <p className={styles.subtitle}>
            Inscreva-se para receber atualizações dos Beatles — notícias
            exclusivas, anúncios de lançamentos e histórias dos arquivos.
          </p>

          {/* Formulário de cadastro */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              className={styles.input}
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.submit}>
              Inscrever-se
            </button>
          </form>

          {/* Mensagem de sucesso (aparece depois do cadastro) */}
          {subscribed && (
            <div className={styles.success}>
              ✓ Obrigado por se inscrever!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Newsletter