import './App.css'
import { UserProvider } from './context'
import { RoutesProvider } from './routes'

function App() {
  return (
    <UserProvider>
      <RoutesProvider />
    </UserProvider>
  )
}

export default App
