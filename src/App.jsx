
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { supabase } from './supabase';
import { Text, Grid } from '@nextui-org/react';

import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import Post from './Components/Post/Post';
import Navbar from './Components/Navbar/Navbar';

import './App.css';

function App() {
  const [session, setSession] = useState(supabase.auth.session());

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, newSession) => setSession(newSession));
  }, []);

  const NotFound = <>
    <Grid.Container justify='center' alignItems='center'>
      <Grid>
        <Text h2>
          404 Not Found!
        </Text>
      </Grid>
    </Grid.Container>
  </>;

  return (
    <>
      <Router>
        <Navbar session={session} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin/' element={<Admin session={session} />} />
          <Route path='/admin/login' element={<Login session={session} />} />
          <Route path='/post/notfound' element={NotFound} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='*' element={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;