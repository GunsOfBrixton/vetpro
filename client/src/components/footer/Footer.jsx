import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <a href='/' className={styles.navbar}>
          <img
            src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074730/vetpro-connect/images/logo_omjbs1.png'
            className={styles.logo}
          />
        </a>
        <div className={styles.footerbox}>
          <h3 className={styles.subtitle}>Vet Pro</h3>
          <h5 className={styles.parr}>Av. Los Alpes #322, Rancagua</h5>
          <h5 className={styles.parr}>+5694174188</h5>
          <h5 className={styles.parr}>contacto@vetpro.com</h5>
        </div>
        <div className={styles.footerbox}>
          <h3 className={styles.subtitle}>Social</h3>
          <h5 className={styles.parr}>Mundo Vet Pro</h5>
          <h5 className={styles.parr}>Instagram</h5>
          <h5 className={styles.parr}>Facebook</h5>
        </div>
        <div className={styles.footerboxsuscribe}>
          <h3 className={styles.subtitle}>Suscríbete a mundo VetPro</h3>
          <p className={styles.parr}>Recibe ofertas y oportunidades increíbles</p>
          <div className={styles.inputgroup}>
            <input
              type='email'
              className={styles.input}
              id='Email'
              name='Email'
              placeholder='tucorreo@ejemplo.com'
              autoComplete='off'
            />
            <input className={styles.buttonsubmit} value='Subscribirse' type='submit' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
