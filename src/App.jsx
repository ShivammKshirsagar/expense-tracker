//import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Expense } from './components/Expense'
import { AddExpense } from './components/AddExpense'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="flex">
      <Sidebar/>
      <div className="main-content w-full">
      <Expense/>
      </div>
      </div>
    </>
  )
}

export default App
