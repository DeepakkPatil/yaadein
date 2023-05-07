import { Container } from '@material-ui/core';

import { BrowserRouter ,Route,Routes , Navigate } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import Allpost from './components/AllpostsUser/Allpost';


const App = () => {
 
  
  return (
      <BrowserRouter>
    <Container maxWidth="xl">
      <Navbar />
      <Routes>
        <Route path='/' Component={()=> <Navigate   to='/posts' />}/> 
          <Route path='/posts' Component={Home} />
           <Route path='/posts/search' Component={Home} />
            <Route path='/posts/:id' Component={PostDetails} />
            <Route path='/auth' Component={Auth} />
            <Route path='/allposts' Component={Allpost} />
      </Routes>
    </Container>
    </BrowserRouter>
  );
};

export default App;
