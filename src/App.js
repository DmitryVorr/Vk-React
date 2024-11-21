import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import News from './Pages/News'
import Messenger from './Pages/Messenger'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/messenger" element={<Messenger />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
