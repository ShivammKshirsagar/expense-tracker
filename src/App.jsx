//import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Expense } from './components/expense'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="flex">
      <Sidebar/>
      <Expense/>
      </div>
    </>
  )
}

export default App
