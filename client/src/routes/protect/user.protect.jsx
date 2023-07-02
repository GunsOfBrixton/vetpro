import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/user.context'

function ProtectedUserRoute({ children }) {
  const { user } = useContext(UserContext)

  if (user === false) {
    return <div>CARGANDO</div>
  }

  if (!user) {
    return <Navigate to='/login' />
  }
  if (user.tipo_usuario === 'admin') {
    return <Navigate to='/admin' />
  }

  return children
}

export default ProtectedUserRoute
