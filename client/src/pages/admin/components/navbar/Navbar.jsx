import { useContext } from 'react'
import { UserContext } from '../../../../context/user.context'
import styles from './Navbar.module.css'

function Navbar() {
  const { user, signOut } = useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <a href='/admin'>
        <img
          src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074730/vetpro-connect/images/logo_omjbs1.png'
          className={styles.logo}
        />
      </a>
      <ul className={styles.navbar}>
        <li>
          <a href='/admin' className={styles.inactive}>
            Resumen
          </a>
        </li>
        <li>
          <a href='/admin' className={styles.inactive}>
            Agendas
          </a>
        </li>
        <li>
          <a href='/admin' className={styles.inactive}>
            Clientes/Mascotas
          </a>
        </li>
        <li>
          <a href='/admin' className={styles.active}>
            Documentos
          </a>
        </li>
        <li>
          <a href='/admin' className={styles.inactive}>
            Solicitudes/Chats
          </a>
        </li>
      </ul>
      <input className={styles.input} name='text' placeholder='Buscar' type='search' />
      <span href='/admin' className={styles.username}>
        {user.nombre}
      </span>
      <button onClick={signOut}>Cerrar sesión</button>
    </nav>
  )
}

export default Navbar
