import Home from './screens/Home.tsx';
import Classroom from './screens/Classroom.tsx';
import {Routes, Route} from 'react-router';
import Standings from './screens/Standings.tsx'
import Settings from './screens/Settings.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/classroom" element={<Classroom />}/>
      <Route path="/standings" element={<Standings />}/>
      <Route path="/settings" element={<Settings />}/>
    </Routes>
  )
}

export default App
