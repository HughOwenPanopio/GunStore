import './App.css'
import Header from '../src/components/common/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
