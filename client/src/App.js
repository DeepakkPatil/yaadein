import { Container } from '@material-ui/core';

import { BrowserRouter ,Route,Routes , Navigate } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';


const App = () => {
 
  const user = JSON.parse(localStorage.getItem('profile')) ;
  return (
      <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route path='/' Component={()=> <Navigate   to='/posts' />}/> 
          <Route path='/posts' Component={Home} />
           <Route path='/posts/search' Component={Home} />
            <Route path='/posts/:id' Component={PostDetails} />
        <Route path='/auth' Component={!user?Auth : <Navigate   to='/posts' />} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
};

export default App;
