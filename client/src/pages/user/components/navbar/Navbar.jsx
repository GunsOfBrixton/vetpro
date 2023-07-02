import { useContext } from 'react'
import { UserContext } from '../../../../context/user.context'
import styles from './Navbar.module.css'

function Navbar() {
  const { user, signOut } = useContext(UserContext)

  return (
    <nav className={styles.nav}>
      <a href='/user'>
        <img
          src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074730/vetpro-connect/images/logo_omjbs1.png'
          className={styles.logo}
        />
      </a>
      <ul className={styles.navbar}>
        <li>
          <a href='/user' className={styles.inactive}>
            Inicio
          </a>
        </li>
        <li>
          <a href='/user' className={styles.active}>
            Agenda
          </a>
        </li>
        <li>
          <a href='/user' className={styles.inactive}>
            Perfil/Mascotas
          </a>
        </li>
        <li>
          <a href='/user' className={styles.inactive}>
            Documentos
          </a>
        </li>
        <li>
          <a href='/user' className={styles.inactive}>
            Pagos
          </a>
        </li>
        <li>
          <a href='/user' className={styles.inactive}>
            Chats
          </a>
        </li>
      </ul>
      <input className={styles.input} name='text' placeholder='Buscar' type='search' />
      <div className={styles.userbox}>
        <a href='/admin'>
          {' '}
          <img
            src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074802/vetpro-connect/icons/bell_homwaz.png'
            className={styles.bell}
          />
        </a>
        <a href='/user'>
          <img
            src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074800/vetpro-connect/icons/profile1_c8iiry.svg'
            className={styles.profile}
            alt='Profile'
          />
        </a>
        <span href='/admin' className={styles.username}>
          {user.nombre}
        </span>
        <button onClick={signOut}>Cerrar sesión</button>
      </div>
    </nav>
  )
}

export default Navbar
