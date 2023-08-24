import { useState } from 'react'
import './App.css'
import {Button} from "./components/Button.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
      <div><div>
      </div>
        <Button fontSize="24" text="Hello" color="white"/>
        </div>
  )
}

export default App
