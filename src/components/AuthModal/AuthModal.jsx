import { useState } from 'react'
import Logo from '@/components/Logo'
import './AuthModal.scss'

export default function AuthModal({ onClose }) {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const validate = (v) => {
    if (!v || !v.trim()) return 'Введіть номер або email'
    const emailLike = v.includes('@')
    if (emailLike) {
      // simple email check
      const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)
      return ok ? '' : 'Невірний формат email'
    }
    // phone: digits only, at least 6
    const digits = v.replace(/\D/g, '')
    return digits.length >= 6 ? '' : 'Невірний номер телефону'
  }

  const handleSubmit = async () => {
    setError('')
    setMessage('')
    const err = validate(value)
    if (err) {
      setError(err)
      return
    }

    setLoading(true)
    // simulate API call
    try {
      await new Promise(r => setTimeout(r, 700))
      const user = { id: Date.now(), principal: value }
      localStorage.setItem('user', JSON.stringify(user))
      setMessage('Успішно зареєстровано')
      setTimeout(() => {
        setLoading(false)
        onClose && onClose()
      }, 500)
    } catch (e) {
      setError('Не вдалося зареєструватися')
      setLoading(false)
    }
  }

  return (
    <div className="auth-modal__overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="auth-modal__close" onClick={onClose}>✕</button>

        <Logo />
        <h2>Увійти або зареєструватися</h2>

        <input
          type="text"
          placeholder="Номер телефону або електронна адреса"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button
          className="auth-modal__submit"
          type="button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Завантаження...' : 'Продовжити'}
        </button>

        {error && <div className="auth-modal__error">{error}</div>}
        {message && <div className="auth-modal__message">{message}</div>}

        <div className="auth-modal__divider">або</div>

        <button className="auth-modal__social" type="button">Google</button>
        <button className="auth-modal__social" type="button">Apple</button>
      </div>
    </div>
  )
}