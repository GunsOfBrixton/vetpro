import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/user.context'

function ProtectedAdminRoute({ children }) {
  const { user } = useContext(UserContext)

  if (user === false) {
    return <div>CARGANDO</div>
  }

  if (!user) {
    return <Navigate to='/login' />
  }
  if (user.tipo_usuario === 'paciente') {
    return <Navigate to='/user' />
  }

  return children
}

export default ProtectedAdminRoute
