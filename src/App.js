import './App.css';
import Home from './components/Home';
import Navbar from './components/Nabar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='flex mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
