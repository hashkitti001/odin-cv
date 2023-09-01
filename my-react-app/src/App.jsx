import { useState } from 'react'
import './App.css'
import {Button} from "./components/Button.jsx"
import GenInfo from './components/GenInfo';
import EduInfo from './components/EduInfo';
import Practical from './components/Practical';
function App() {
  // const [count, setCount] = useState(0);

  return (
      
      <div>
        <GenInfo/>
        <EduInfo/>
        <Practical></Practical>
        <Button fontSize="24" text="Hello" color="white"/>
        </div>
  )
}

export default App
