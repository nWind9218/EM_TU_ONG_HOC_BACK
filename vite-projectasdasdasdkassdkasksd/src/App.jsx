import { useState } from 'react'
import './App.css'
import Pushing_Information from './Pushing_Information'

//create pairs label, input for gender, shape, skin tone, leg length, BMI

function App() {
  const [showUI, setShowUI] = useState(false)
  return (
    <>
      <button onClick={() => setShowUI(!showUI)}>Push information</button>
      {showUI && <Pushing_Information/>}
    </>
  )
}

export default App
