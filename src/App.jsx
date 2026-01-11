//import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Sidebar } from './components/Sidebar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="flex">
      <Sidebar/>
      </div>
    </>
  )
}

export default App
