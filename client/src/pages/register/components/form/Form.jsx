import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../context/user.context'
import styles from '../../page.module.css'

function Form() {
  const { signUp, setUser, setLocalStorageUser } = useContext(UserContext)
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: '',
    confirmarContraseña: ''
  })

  const handleOnChange = (ev) => {
    const { name, value } = ev.target
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault()

      if (form.contraseña !== form.confirmarContraseña) {
        return alert('Las contraseñas no coinciden')
      }

      const user = await signUp(form)

      setUser(user)
      setLocalStorageUser(user._id)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <p className={styles.title}>Crear una cuenta</p>
      <p className={styles.message}>Regístrate para tener acceso completo a la plataforma. </p>
      <div className={styles.flex}>
        <label>
          <input
            onChange={handleOnChange}
            name='nombre'
            value={form.nombre}
            required
            placeholder=''
            type='text'
            className={styles.input}
          />
          <span>Nombre</span>
        </label>
        <label>
          <input
            onChange={handleOnChange}
            name='apellido'
            value={form.apellido}
            required
            placeholder=''
            type='text'
            className={styles.input}
          />
          <span>Apellido</span>
        </label>
      </div>
      <label>
        <input
          onChange={handleOnChange}
          name='correo'
          value={form.correo}
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
          name='contraseña'
          value={form.contraseña}
          required
          placeholder=''
          type='password'
          className={styles.input}
        />
        <span>Contraseña</span>
      </label>
      <label>
        <input
          onChange={handleOnChange}
          name='confirmarContraseña'
          value={form.confirmarContraseña}
          required
          placeholder=''
          type='password'
          className={styles.input}
        />
        <span>Confirma contraseña</span>
      </label>
      {/* REGISTRAR */}
      <button className={styles.submit}>¡A cuidar de tus mascotas!</button>
      {/* INGRESAR */}
      <p className={styles.signin}>
        Ya tienes una cuenta? <Link to='/login'>Ingresar</Link>
      </p>
    </form>
  )
}

export default Form
