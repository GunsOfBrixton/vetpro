import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href='/' className={styles.navbar}>
        <img
          src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074730/vetpro-connect/images/logo_omjbs1.png'
          className={styles.logo}
        />
      </a>
      <ul className={styles.navbar}>
        <li>
          <a href='#inicio'>Inicio</a>
        </li>
        <li>
          <a href='#quienessomos'>Quiénes somos</a>
        </li>
        <li>
          <a href='#contacto'>Contacto</a>
        </li>
      </ul>
      <div>
        <ul className={styles.buttons}>
          <li>
            <a className={styles.registro} href='/register'>
              Registrarse
            </a>
          </li>
          <li>
            <a className={styles.ingresar} href='/login'>
              Ingresar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
