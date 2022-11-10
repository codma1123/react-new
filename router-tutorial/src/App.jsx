import { useState } from 'react'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </div>
  )
}

export default App
