import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TagPage from './pages/TagPage'
import OverviewPage from './pages/OverviewPage'

const App = () => {
  return (
    <div className="relative min-h-screen">

      <div className="shapes-bg">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/:tag" element={<TagPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
