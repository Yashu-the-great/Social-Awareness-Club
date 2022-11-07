import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import Post from './Components/Post/Post';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/posttestview' element={<Post />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;