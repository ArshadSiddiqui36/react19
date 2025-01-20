import { useState } from 'react'
import './App.css'

// import DefaultCodeApp from './DefaultCodeApp'
// import Card from './components/Card'

// Box and Content Components
import Box from './components/Box'
import Content from './components/Content'

// Profile Component
import Profile from './components/Profile';

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
        <p>Other content wrapped inside the <strong>Box</strong> below child <strong>Content</strong> Component</p>
      </Box>

      <Profile />

      <h1>New change to see the live update</h1>
    </>
  )
}

export default App
