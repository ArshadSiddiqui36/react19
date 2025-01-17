import { useState } from 'react'
import './App.css'

// import DefaultCodeApp from './DefaultCodeApp'
// import Card from './components/Card'

// Box and Content Components
import Box from './components/Box'
import Content from './components/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Default or Starter Code of App Components */}
      {/* <DefaultCodeApp/> */}

      {/* Card components to check ways of styling */}
      {/* <Card /> */}

      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <span style={{padding:"8px 15px", margin:"0 5px", border:"2px solid #f1f1f1", borderRadius:"8px"}} >{count}</span>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
      </div>

      {/* Box and Content components */}
      {/* <Box />
      <Content /> */}

      <Box>
        <Content />
        <h3>Other content inside the Box component itself below Content child component</h3>
      </Box>


    </>
  )
}

export default App
