import { useContext, useState } from 'react'
import { UserContext } from '../../../../context/user.context'
import styles from '../../page.module.css'

function Form() {
  const { signIn, setUser, setLocalStorageUser } = useContext(UserContext)
  const [form, setForm] = useState({
    correo: '',
    contraseña: ''
  })

  const handleOnChange = (ev) => {
    const { name, value } = ev.target
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault()
      const user = await signIn(form)

      if (user.message) {
        throw new Error('correo o contraseña invalido')
      }

      setUser(user)
      setLocalStorageUser(user._id)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.title}>Ingresar</p>
      <p className={styles.message}>Bienvenido/a de vuelta!</p>
      <label>
        <input
          onChange={handleOnChange}
          value={form.correo}
          name='correo'
          required
          placeholder=''
          type='email'
          className={styles.input}
        />
        <span>Correo</span>
      </label>
      <label>
        <input
          onChange={handleOnChange}
          value={form.contraseña}
          required
          type='password'
          name='contraseña'
          className={styles.input}
        />
        <span>Contraseña</span>
      </label>
      <button className={styles.submit}>Ingresar</button>
      <p className={styles.signin}>
        No tienes una cuenta? <a href='/register'>Regístrate</a>
      </p>
    </form>
  )
}

export default Form
