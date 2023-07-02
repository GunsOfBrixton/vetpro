import { Clients } from '../../components'
import styles from './Ficha.module.css'

function Ficha() {
  return (
    <div className={styles.contenido}>
      <Clients />
      <div className={styles.fichasContainer}>
        <h2>Historial Clínico</h2>
        <table>
          <thead>
            <tr>
              <th className={styles.tabletitle}>Fecha consulta</th>
              <th className={styles.tabletitle}>Acciones</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr>
              <td className={styles.documento}>15/05/2023</td>
              <td className={styles.acciones}>
                <a href='ruta_al_archivo' rel='noreferrer' target='_blank'>
                  <img
                    src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074800/vetpro-connect/icons/download_ofxqus.svg'
                    className={styles.download}
                    alt='Descargar'
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td className={styles.documento}>03/04/2023</td>
              <td className={styles.acciones}>
                <a href='ruta_al_archivo' rel='noreferrer' target='_blank'>
                  <img
                    src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074800/vetpro-connect/icons/download_ofxqus.svg'
                    className={styles.download}
                    alt='Descargar'
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <button className={styles.button}>+ Acciones</button>
        <p className={styles.parr}>Selecciona un documento para consultar información detallada</p>
      </div>
      {/* <FichaForm /> */}
    </div>
  )
}
export default Ficha
