import { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import { Calendar, Navbar } from './components'
import styles from './page.module.css'

function UserPage() {
  const { user } = useContext(UserContext)

  return (
    <main>
      <div>
        <Navbar />
        <div className={styles.contenido}>
          <div className={styles.userContainer}>
            <h2 className={styles.title}>Tu agenda</h2>
            <p className={styles.parra}>
              Aquí puedes ver tus horas agendadas. Recuerda llegar 10 minutos antes a la consulta
              para agilizar el proceso.
            </p>
            <h5 className={styles.subtitle}>
              Tienes {user?.citas_programadas?.length} citas programadas:
            </h5>
            {/* CITAS DINAMICAS */}
            {user?.citas_programadas?.map((cita) => (
              <div key={cita._id} className={styles.cont1}>
                <div className={styles.subcont1}>
                  <div className={styles.subtitle1}>Fecha</div>
                  <div className={styles.fecha}>{cita.fecha}</div>
                  <div className={styles.subtitle1}>Hora:</div>
                  <div className={styles.fecha}>{cita.hora}</div>
                </div>
                <div className={styles.subcont2}>
                  <div className={styles.info}>Mascota: {cita.mascota}</div>
                  <div className={styles.info}>Servicio: {cita.servicio}</div>
                  <div className={styles.info}>Profesional: {cita.profesional}</div>
                </div>
              </div>
            ))}
            {/* CITAS ESTATICAS */}
            <div className={styles.cont1}>
              <div className={styles.subcont1}>
                <div className={styles.subtitle1}>Fecha</div>
                <div className={styles.fecha}>Sábado 17 de abril, 2023</div>
                <div className={styles.subtitle1}>Hora:</div>
                <div className={styles.fecha}>13:45hrs</div>
              </div>
              <div className={styles.subcont2}>
                <div className={styles.info}>Mascota: Momo</div>
                <div className={styles.info}>Servicio: Visita General</div>
                <div className={styles.info}>Profesional: Dr. Iván Torres</div>
              </div>
            </div>
            <div className={styles.cont1}>
              <div className={styles.subcont1}>
                <div className={styles.subtitle1}>Fecha</div>
                <div className={styles.fecha}>Sábado 17 de abril, 2023</div>
                <div className={styles.subtitle1}>Hora:</div>
                <div className={styles.fecha}>13:45hrs</div>
              </div>
              <div className={styles.subcont2}>
                <div className={styles.info}>Mascota: Momo</div>
                <div className={styles.info}>Servicio: Visita General</div>
                <div className={styles.info}>Profesional: Dr. Iván Torres</div>
              </div>
            </div>
          </div>
          <div className={styles.agendaContainer}>
            <h2 className={styles.title}>Agenda una atención</h2>
            <p className={styles.parraf}>
              Selecciona un día del calendario para agendar tu atención
            </p>
            <Calendar />
          </div>
        </div>
      </div>
    </main>
  )
}
export default UserPage
