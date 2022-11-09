
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
import Posts from './Components/Post/Posts';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [session, setSession] = useState(supabase.auth.session());

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, newSession) => setSession(newSession));
  }, []);

  return (
    <>
      <Router>
        <Navbar session={session} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin/' element={<Admin session={session} />} />
          <Route path='/admin/login' element={<Login session={session} />} />
          <Route path='/post/:id' element={<Posts />} />
          <Route path='/posttestview' element={<Post />} />
          <Route path='*' element={<>
            <Grid.Container justify='center' alignItems='center'>
              <Grid>
                <Text h2>
                  404 Not Found!
                </Text>
              </Grid>
            </Grid.Container>
          </>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;