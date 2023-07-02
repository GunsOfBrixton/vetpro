import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/user.context'

function RegisterRedirect({ children }) {
  const { user } = useContext(UserContext)

  if (user === false) {
    return <div>CARGANDO</div>
  }

  if (user && user.tipo_usuario === 'paciente') {
    return <Navigate to='/user' />
  }
  if (user && user.tipo_usuario === 'admin') {
    return <Navigate to='/admin' />
  }

  return children
}

export default RegisterRedirect
