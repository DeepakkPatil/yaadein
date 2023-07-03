import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@material-ui/core';

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
    	<>
      <BrowserRouter>
    <Container maxWidth="xl">
       {/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
      
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box> */}
     
     <Nav />
      <Routes>
        <Route path='/' Component={()=> <Navigate   to='/posts' />}/> 
          <Route path='/posts' Component={Home} />
           <Route path='/posts/search' Component={Home} />
            <Route path='/posts/:id' Component={PostDetails} />
            <Route path='/auth' Component={Auth} />
            <Route path='/allposts' Component={Allpost} />
            {/* <Route path='/bot' Component={BotpressBot} /> */}
            <Route path='/check' Component={Expression} />
            
      </Routes>
    </Container>
    </BrowserRouter>
    <div >
    	<BotpressBot />
    </div>
    	</>
  );
};

export default App;
