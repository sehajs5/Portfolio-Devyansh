
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer'
function App() {

  return (
    <div className='bg-main min-h-screen max-w-screen-2xl flex flex-col'>
    <Navbar/>
    <main className='font-primary flex-1 overflow-auto'>
      <Outlet/>
    </main>
    <Footer/>
    </div>
  )
}

export default App
