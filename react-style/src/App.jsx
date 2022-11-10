import { useState } from 'react'
import Button from './components/Button'
import './App.scss'

function App() {

  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button color="pink">Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button size="large" outline>Button</Button>
        <Button color="pink">Button</Button>
        <Button size="small">Button</Button>
      </div>
      <div className="buttons">
        <Button
          size="large" 
          fullWidth
          onClick={(e) => console.log(e)}
        >Button</Button>
        <Button color="pink" fullWidth>Button</Button>
        <Button color="gray" size="small" fullWidth>Button</Button>
      </div>
    </div>
  )
}

export default App
