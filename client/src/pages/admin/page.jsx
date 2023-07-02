import { useState } from 'react'
import { Clients, Documents, Ficha, Navbar } from './components'
import styles from './page.module.css'

function AdminPage() {
  const [tabs, setTabs] = useState({
    documento: true,
    ficha: false
  })

  const handleTab = (tab) => {
    setTabs({ documento: false, ficha: false, [tab]: true })
  }

  return (
    <main>
      <Navbar />
      <div className={styles.radioInputs}>
        <label className={styles.radio}>
          <input
            type='radio'
            name='radio'
            checked={tabs.documento}
            onChange={() => handleTab('documento')}
          />
          <span className={styles.name}>Asignar documento</span>
        </label>
        <label className={styles.radio}>
          <input
            type='radio'
            name='radio'
            checked={tabs.ficha}
            onChange={() => handleTab('ficha')}
          />
          <span className={styles.name}>Ficha Clínica</span>
        </label>
      </div>
      <div className={styles.contenido}>
        {tabs.documento && <Clients />}
        {tabs.documento && <Documents />}
        {tabs.ficha && <Ficha />}
      </div>
    </main>
  )
}

export default AdminPage
