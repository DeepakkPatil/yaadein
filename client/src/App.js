import { Container } from '@material-ui/core';

import { BrowserRouter ,Route,Routes , Navigate } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import Allpost from './components/AllpostsUser/Allpost';
import {BotpressBot} from './components/Chat/Chat'
import {DrawerAppBar, Nav } from './components/Navbar/Appbar' 
import Expression from './components/Expression';

const App = () => {
 
  
  return (
      <BrowserRouter>
    <Container maxWidth="xl">
      <Nav />
      <Routes>
        <Route path='/' Component={()=> <Navigate   to='/posts' />}/> 
          <Route path='/posts' Component={Home} />
           <Route path='/posts/search' Component={Home} />
            <Route path='/posts/:id' Component={PostDetails} />
            <Route path='/auth' Component={Auth} />
            <Route path='/allposts' Component={Allpost} />
            <Route path='/bot' Component={BotpressBot} />
            <Route path='/check' Component={Expression} />
            
      </Routes>
    </Container>
    </BrowserRouter>
  );
};

export default App;
