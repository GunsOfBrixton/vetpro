import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../context/user.context'
import styles from '../../page.module.css'

function Clients() {
  const [clients, setClients] = useState([])
  const [selectedUser, setSelectedUser] = useState(0)
  const { getUsers } = useContext(UserContext)

  const handleSelectedUser = (index) => {
    setSelectedUser(index)
  }

  useEffect(() => {
    getUsers().then((clients) => setClients(clients))
  }, [getUsers])

  return (
    <div className={styles.clientesContainer}>
      <h2>Listado Clientes/Mascotas</h2>
      <table>
        <thead>
          <tr>
            <th className={styles.tabletitle}>Cliente</th>
            <th className={styles.tabletitle}>Mascota</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {clients.map((client, index) => {
            const isSelected =
              selectedUser === index ? styles.rowClienteSeleccionado : styles.rowCliente

            return (
              <tr key={client._id} className={isSelected} onClick={() => handleSelectedUser(index)}>
                <td className={styles.cliente}>{client.nombre}</td>
                <td className={styles.mascota}>{client.mascota}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Clients
