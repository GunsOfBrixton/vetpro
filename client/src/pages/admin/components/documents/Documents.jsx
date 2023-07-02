import { useState } from 'react'
import styles from '../../page.module.css'
import FichaForm from '../ficha/FichaForm'

function Documents() {
  const [openModal, setOpenModel] = useState(false)

  const handleModalOpen = () => setOpenModel(true)
  const handleModalClose = () => setOpenModel(false)

  return (
    <div className={styles.documentosContainer}>
      <h2>Documentos</h2>
      <table>
        <thead>
          <tr>
            <th className={styles.tabletitle}>Documento</th>
            <th className={styles.tabletitle}>Acciones</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr>
            <td onClick={handleModalOpen} className={styles.documento}>
              Receta
            </td>
            <td className={styles.acciones}>
              <a rel='norefereer noreferrer' target='_blank'>
                <img
                  src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074800/vetpro-connect/icons/download_ofxqus.svg'
                  className={styles.download}
                  alt='Descargar'
                />
              </a>
            </td>
          </tr>
          <tr>
            <td onClick={handleModalOpen} className={styles.documento}>
              Consentimiento
            </td>
            <td className={styles.acciones}>
              <a rel='norefereer noreferrer' target='_blank'>
                <img
                  src='https://res.cloudinary.com/dlzisdltx/image/upload/v1688074800/vetpro-connect/icons/download_ofxqus.svg'
                  className={styles.download}
                  alt='Descargar'
                />
              </a>
            </td>
          </tr>
          <tr>
            <td onClick={handleModalOpen} className={styles.documento}>
              Vacuna
            </td>
            <td className={styles.acciones}>
              <a rel='norefereer noreferrer' target='_blank'>
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
      <p className={styles.parr}>Selecciona un documento para asignarlo</p>
      {openModal && <FichaForm handleModalClose={handleModalClose} />}
    </div>
  )
}

export default Documents
