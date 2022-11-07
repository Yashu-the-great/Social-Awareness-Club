import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Admin from './Components/Admin/Admin';
import Post from './Components/Post/Post';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/posttestview' element={<Post/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;