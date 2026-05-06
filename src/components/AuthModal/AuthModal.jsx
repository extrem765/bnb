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
      const ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)
      return ok ? '' : 'Невірний format email'
    }
    const digits = v.replace(/\D/g, '')
    return digits.length >= 6 ? '' : 'Невірний номер телефону'
  }

  const handleSubmit = async () => {
    setError('')
    setMessage('')
    const err = validate(value)
    if (err) return setError(err)
    setLoading(true)
    try {
      await new Promise(r => setTimeout(r, 700))
      localStorage.setItem('user', JSON.stringify({ id: Date.now(), principal: value }))
      setMessage('Успішно зареєстровано')
      setTimeout(() => onClose?.(), 500)
    } catch {
      setError('Не вдалося зареєструватися')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-modal__overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>

        <div className="auth-modal__header">
          <button className="auth-modal__close" onClick={onClose}>✕</button>
          <div className="auth-modal__logo">
            <Logo />
          </div>
        </div>

        <div className="auth-modal__body">
          <h2 className="auth-modal__title">Увійти або зареєструватися</h2>

          <div className="auth-modal__field">
            <input
              type="text"
              placeholder="Номер телефону або електронна адреса"
              value={value}
              onChange={e => { setValue(e.target.value); setError('') }}
              className={error ? 'has-error' : ''}
            />
            {error && <div className="auth-modal__error">{error}</div>}
          </div>

          <button
            className="auth-modal__submit"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Завантаження...' : 'Продовжити'}
          </button>

          {message && <div className="auth-modal__message">{message}</div>}

          <div className="auth-modal__divider">
            <span>або</span>
          </div>

          <div className="auth-modal__socials">
            {/* Прямі посилання для Google та Apple */}
            <a href="https://accounts.google.com/signin" className="auth-modal__social">
              <img src="/google.svg" alt="Google" />
            </a>
            <a href="https://appleid.apple.com/auth/authorize" className="auth-modal__social">
              <img src="/apple.svg" alt="Apple" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}