import styles from './Calendar.module.css'

function Calendar() {
  return (
    <>
      <div className={styles.calendar}>
        <label htmlFor='dia' />
        <input type='date' id='dia' name='dia' />
      </div>
      <div className={styles.selectedday}> Función "Día seleccionado"</div>
      <div>
        <p className={styles.parraf}>¿Qué servicio deseas agendar?</p>
        <p className={styles.parraf}>¿Con qué profesional deseas agendar?</p>
        <p className={styles.parraf}>Selecciona un horario disponible</p>
        <p className={styles.parraf}>Nombre de la mascota</p>
      </div>
      <button className={styles.button}>Agendar cita</button>
    </>
  )
}

export default Calendar
