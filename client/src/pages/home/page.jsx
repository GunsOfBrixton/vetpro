import { Footer, Navbar } from '../../components'
import styles from './page.module.css'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <div id='inicio' className={styles.container1}>
          <h1 className={styles.maintitle}>VetPro Connect</h1>
          <p className={styles.parr}>
            ¡Bienvenido/a a la plataforma digital diseñada para simplificar la gestión con tu
            clínica veterinaria favorita! Ten acceso a recursos y herramientas para optimizar los
            procesos y mejorar tu atención.
          </p>
          <a className={styles.button} href='/registro'>
            Regístrate
          </a>
          <img
            alt=''
            src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074741/vetpro-connect/images/imagen1_iff1ap.jpg'
            className={styles.image}
          />
        </div>

        <div className={styles.container2}>
          <div className={styles.subcontainer2}>
            <img
              alt=''
              src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074733/vetpro-connect/images/imagen2_pp7tbv.jpg'
              className={styles.subimage}
            />
            <h3 className={styles.subtitle}>Gestiona tus citas</h3>
            <p className={styles.parra}>
              Pide y calendariza tus consultas con nuestros profesionales.
            </p>
          </div>
          <div className={styles.subcontainer2}>
            <img
              alt=''
              src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074731/vetpro-connect/images/imagen3_nwly50.webp'
              className={styles.subimage}
            />
            <h3 className={styles.subtitle}>Descarga tus recetas</h3>
            <p className={styles.parra}>
              Obtén las recetas de tu mascota en formato PDF cuando y donde quieras.
            </p>
          </div>
          <div className={styles.subcontainer2}>
            <img
              alt=''
              src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074752/vetpro-connect/images/imagen4_rffzkw.jpg'
              className={styles.subimage}
            />
            <h3 className={styles.subtitle}>Avisos automatizados</h3>
            <p className={styles.parra}>
              Recibe notificaciones para continuar con el tratamiento de tu mascota.
            </p>
          </div>
        </div>

        <div id='quienessomos' className={styles.container3}>
          <h1 className={styles.title}>Nuestro Equipo</h1>
          <p className={styles.msg}>
            Conoce a nuestro equipo de profesionales apasionados por la salud y el bienestar de tus
            mascotas. ¡Confía en nosotros para cuidar de tus amigos peludos!
          </p>
          <div className={styles.subcontainer3}>
            <div className={styles.subsubcontainer3}>
              <img
                alt=''
                src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074733/vetpro-connect/images/prof1_u7id7j.jpg'
                className={styles.subimage2}
              />
              <h3 className={styles.subtitle}>Joaquín Ibarra</h3>
              <p className={styles.parra}>Redes sociales</p>
            </div>
            <div className={styles.subsubcontainer3}>
              <img
                alt=''
                src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074733/vetpro-connect/images/prof2_hgdxec.jpg'
                className={styles.subimage2}
              />
              <h3 className={styles.subtitle}>Joaquín Ibarra</h3>
              <p className={styles.parra}>Redes sociales</p>
            </div>
            <div className={styles.subsubcontainer3}>
              <img
                alt=''
                src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074733/vetpro-connect/images/prof1_u7id7j.jpg'
                className={styles.subimage2}
              />
              <h3 className={styles.subtitle}>Joaquín Ibarra</h3>
              <p className={styles.parra}>Redes sociales</p>
            </div>
            <div className={styles.subsubcontainer3}>
              <img
                alt=''
                src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074733/vetpro-connect/images/prof2_hgdxec.jpg'
                className={styles.subimage2}
              />
              <h3 className={styles.subtitle}>Joaquín Ibarra</h3>
              <p className={styles.parra}>Redes sociales</p>
            </div>
          </div>
        </div>
        <div id='contacto' className={styles.container4}>
          <article className={styles.div1}>
            <h1 className={styles.title1}>Cóntáctanos!</h1>
            <p className={styles.parr}>
              Estaremos contentos de ayudarte, porfavor ingresa tus datos de contacto y redacta tu
              mensaje. Pronto recibirás la respuesta a tu correo.
            </p>
            <div className={styles.inputgroup}>
              <label className={styles.label}>Su nombre</label>
              <input
                autoComplete='off'
                name='Name'
                id='Name'
                className={styles.input1}
                type='text'
              />
            </div>
            <div className={styles.inputgroup}>
              <label className={styles.label}>Correo electrónico</label>
              <input
                autoComplete='off'
                name='Email'
                id='Email'
                className={styles.input1}
                type='email'
              />
            </div>
            <div className={styles.inputgroup}>
              <label className={styles.label}>Su mensaje</label>
              <input autoComplete='off' name='Msg' id='Msg' className={styles.input2} type='text' />
            </div>
            <a className={styles.button1} href='/'>
              Enviar
            </a>
          </article>
          <article className={styles.div2}>
            <img
              alt=''
              src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074800/vetpro-connect/icons/mail_ai82sd.svg'
              className={styles.icon}
            />
            <a className={styles.info}>contacto@vetpro.cl</a>
            <img
              alt=''
              src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074800/vetpro-connect/icons/phone_hlyizt.svg'
              className={styles.icon}
            />
            <a className={styles.info}>+5672899885</a>
            <img
              alt=''
              src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074801/vetpro-connect/icons/whatsapp_ca4a7r.svg'
              className={styles.icon}
            />
            <a className={styles.info}>+56949679768</a>
            <img
              alt=''
              src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074800/vetpro-connect/icons/location_dczabm.svg'
              className={styles.icon}
            />
            <a className={styles.info}>Alameda #205, Rancagua, Chile</a>
            <a href="https://www.google.cl/maps/place/Av.+Libertador+Bernardo+O'Higgins+205,+Rancagua,+O'Higgins/@-34.1582528,-70.7669012,17z/data=!3m1!4b1!4m5!3m4!1s0x966342fdf9094cff:0x9cb208c976173193!8m2!3d-34.1582573!4d-70.7643263?entry=ttu">
              <img
                alt=''
                src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074731/vetpro-connect/images/map_toje3t.png'
                className={styles.map}
              />
            </a>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
