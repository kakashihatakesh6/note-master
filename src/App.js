import './App.css';
import Category from './components/Category';
import Home from './components/Home';
import Navbar from './components/Nabar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NewsDetails from './components/NewsDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='flex mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:rnews' element={<Category />} />
            <Route path='/news/:newsname' element={<NewsDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
