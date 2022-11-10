import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Detail from './pages/detail/detail'
import Home from './pages/home/home'
import Error from './pages/error'
import Header from './pages/header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:elementId" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
