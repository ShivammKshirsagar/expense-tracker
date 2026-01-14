//import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Expense } from './components/expense'
import { AddExpense } from './components/AddExpense'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="flex">
      <Sidebar/>
      <div className="main-content flex-1 overflow-x-hidden rounded-xl">
      <Expense/>
      </div>
      </div>
    </>
  )
}

export default App
