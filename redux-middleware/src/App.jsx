import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </div>
  )
}

export default App
