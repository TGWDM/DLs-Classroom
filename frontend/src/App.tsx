import Home from './screens/Home.tsx';
import Classroom from './screens/Classroom.tsx';
import {Routes, Route} from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/classroom" element={<Classroom />}/>
    </Routes>
  )
}

export default App
