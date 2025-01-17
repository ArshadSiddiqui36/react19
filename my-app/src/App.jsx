import { useState } from 'react'
import './App.css'
// import DefaultCodeApp from './DefaultCodeApp'
// import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Card components to check ways of styling */}
      {/* <Card /> */}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <span style={{padding:"8px 15px", margin:"0 5px", border:"2px solid #f1f1f1", borderRadius:"8px"}} >{count}</span>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </div>

      {/* Default or Starter Code of App Components */}
      {/* <DefaultCodeApp/> */}
    </>
  )
}

export default App
