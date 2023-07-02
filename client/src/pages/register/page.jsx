import { Form } from './components'
import styles from './page.module.css'

function RegisterPage() {
  return (
    <main>
      <a href='/'>
        <img
          src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074730/vetpro-connect/images/logo_omjbs1.png'
          className={styles.logo}
        />
      </a>
      <p className={styles.volver}>
        <a href='/'>Volver al Inicio</a>{' '}
      </p>
      <div className={styles.registro}>
        <Form />
        <div>
          <img
            className={styles.imagen2}
            src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074733/vetpro-connect/images/imagen2_pp7tbv.jpg'
            alt='imagen'
          />
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
