import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AdminPage, HomePage, LoginPage, RegisterPage, UserPage } from '../pages'
import { ProtectedAdminRoute, ProtectedUserRoute } from './protect'
import LoginRedirect from './redirect/login.redirect'
import RegisterRedirect from './redirect/register.redirect'

function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* REGISTER */}
        <Route
          path='/register'
          element={
            <RegisterRedirect>
              <RegisterPage />
            </RegisterRedirect>
          }
        />
        {/* LOGIN */}
        <Route
          path='/login'
          element={
            <LoginRedirect>
              <LoginPage />
            </LoginRedirect>
          }
        />
        {/* USER */}
        <Route
          path='/user'
          element={
            <ProtectedUserRoute>
              <UserPage />
            </ProtectedUserRoute>
          }
        />
        {/* ADMIN */}
        <Route
          path='/admin'
          element={
            <ProtectedAdminRoute>
              <AdminPage />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesProvider
