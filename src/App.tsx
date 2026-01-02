import { useState } from 'react'
import './App.css'
import { CardList, Search } from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Search/>
        <CardList/>
      </div>
    </>
  )
}

export default App
