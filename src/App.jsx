import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('')
  const [userValue, setuserValue] = useState ('')


  return (
    <>
      <div className="container d-flex justify-content-center align-items-center m-5">
        <div className="inner-box m-5  d-flex justify-content-center align-items-center" style={{ width: '300px', height: '300px', backgroundColor: color, border: 'solid 2px' }}>
          <h1>{userValue}</h1>
        </div>
        <div className="buttons">
          <button className='btn btn-danger ms-5' onClick={() => {setColor('red'),setuserValue('RED')}}>RED</button>
          <button className='btn btn-success ms-5' onClick={() => {setColor('green'),setuserValue('GREEN')}}>Green</button>
          <button className='btn btn-primary ms-5' onClick={() => {setColor('blue'),setuserValue('BLUE')}}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
