import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Home from './pages/home.jsx'
import Wellbeing from './pages/wellbeing.jsx'
import AI from './pages/ai.jsx'
import Sports from './pages/sports.jsx'
import Jobs from './pages/jobs.jsx'
import NUIssues from './pages/nu-issues.jsx'
import NationalPolitics from './pages/national-politics.jsx'

function App() {
  return(
    <div>
    <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wellbeing" element={<Wellbeing />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/nu-issues" element={<NUIssues />} />
          <Route path="/national-politics" element={<NationalPolitics />} />
        </Routes>
    <div id = 'footer'>
      <p>Editor in Chief: Anavi Prakash | Polling Editor: Ashley Wei | Web Developer: Femi Horrall</p>
      <p>Data Visualizations Editor: Yong-Yu Huang | Illustrations Editor: Lucas Kubovchik | Assistant Multimedia Features Editor: Ryan Ottignon</p>

    </div>
    </div>
  )
}

export default App
