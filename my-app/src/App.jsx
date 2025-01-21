import { useState } from 'react'
import './App.css'

// import DefaultCodeApp from './DefaultCodeApp'
// import Card from './components/Card'

// Box and Content Components
import Box from './components/Box'
import Content from './components/Content'

// Profile Component
import Profile from './components/Profile';

// RecipeList Component
import RecipeList from './components/RecipeList';

// Scientist component
import Scientist from './components/Scientist';

// EventHandler Component
import EventHandler from './components/EventHandler';

// Sculpture Gallery Component
import SculptureGallery from './components/SculptureGallery';

// Testing Component
import Testing from './components/Testing';

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
        <span style={{padding:"8px 15px", border:"2px solid #f1f1f1", borderRadius:"8px"}} >{count}</span>
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
      
      {/* Profile List */}
      <Profile />

      {/* Recipe List */}
      <RecipeList />

      {/* Scientist component */}
      <Scientist />

      {/* EventHandler Component */}
      <EventHandler />

      {/* SculptureGallery Component */}
      <SculptureGallery />

      <Testing />

    </>
  )
}

export default App
