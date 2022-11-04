import './App.css';
import HomePage from './Pages/HomePage';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
import AdminPage from './Pages/AdminPage';
import PostView from './Components/PostView';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/admin_panel' element={<AdminPage/>}/>
          <Route path='/post_test_view' element={<PostView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
