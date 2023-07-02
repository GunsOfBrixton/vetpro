import styles from './FichaForm.module.css'

function FichaForm({ handleModalClose }) {
  return (
    <div className={styles.formularioContainer}>
      <div className={styles.titlecont}>
        <h3 className={styles.title}>Consulta #Fecha#</h3>
      </div>
      <form>
        <div className={styles.flex}>
          <div className={styles.formGroup}>
            <label htmlFor='dia'>Día</label>
            <input required type='date' id='dia' name='dia' />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor='hora'>Hora</label>
            <input required type='text' id='hora' name='hora' />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='servicio'>Servicio</label>
          <input required type='text' id='servicio' name='servicio' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='mascota'>Mascota</label>
          <input required type='text' id='mascota' name='mascota' />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor='observaciones'>Observaciones</label>
          <textarea id='observaciones' name='observaciones' rows='4' />
        </div>
        <div className={styles.buttonGroup}>
          <button className={styles.submitButton}>Editar</button>
          <button className={styles.submitButton}>Eliminar</button>
          <button className={styles.submitButton}>Descargar</button>
        </div>
        <div className={styles.buttonGroupdos}>
          <button type='submit' className={styles.submitButton}>
            Guardar
          </button>
          <button onClick={handleModalClose} type='button' className={styles.cancelButton}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FichaForm
