import { Outlet } from 'react-router'
import './App.css'
import { Navbar } from './Components'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
