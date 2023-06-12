
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';



import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link , useNavigate, useLocation} from 'react-router-dom'
import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode' ;
import useStyles from './styles'
import { FiLogOut  } from 'react-icons/fi'
import memories from '../../images/lala.png';
import {toast} from 'react-toastify'
import { BsFillPostcardHeartFill } from 'react-icons/bs'



const pages = ['All Posts', 'Your Vault', 'Chatbot'];
const settings = ['Logout'];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


     const classes = useStyles();
      const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile'))) ;
      const dispatch=useDispatch() ;
      const history = useNavigate() ;
    const location = useLocation() ;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
    const logout=()=>{

        dispatch({ type:'LOGOUT'}) ;
        toast.success('🦄 logged Out!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
        history('/') ;
        setUser(null) ;
      }

      useEffect(() => {
        
        const token =user?.token ;
         
         if(token)
         {
            const decodedToken= decode(token) ;
            if(decodedToken.exp*1000 < new Date().getTime() )
            logout() ;
         }

         setUser(JSON.parse(localStorage.getItem('profile')))
         
         
      }, [location,user?.token]) // because if the location or url changes then user must be fetched and ui must be rendered
      
     

  return (
    <AppBar  className={classes.appBar}>
      <Container maxWidth="xl" className={classes.brandContainer}>
        <Toolbar disableGutters>
          <Link to='/'>
        <img className={classes.image} src={memories} alt="icon" height="70"  />
        </Link>
            
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex',lg:'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color:'black'}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'flex',lg:'none' },
              }}
            >
          
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography component={Link} to='/allposts' variant='outlined' color='primary' style={{textDecoration:'none'}}>All Posts</Typography>
                </MenuItem>
                 <MenuItem onClick={handleCloseNavMenu}>
                  <Typography component={Link} to='/check' variant='outlined' color='primary' style={{textDecoration:'none'}}>Your Vault</Typography>
                </MenuItem>
                 <MenuItem onClick={handleCloseNavMenu}>
                  <Typography component={Link} to='/bot' variant='outlined' color='primary' style={{textDecoration:'none'}}>Chatbot</Typography>
                </MenuItem>
            </Menu>
          </Box>
      
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            
              <Button
           component={Link} to='/allposts'  style={{textDecoration:'none'}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                All Posts
              </Button>
                <Button
           component={Link} to='/check'  style={{textDecoration:'none'}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Your Vault
              </Button>
                <Button
           component={Link} to='/bot'  style={{textDecoration:'none'}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              ChatBot
              </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              
                {
                user ? (<>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageurl}>
                        { user.result.name.charAt(0)}
                    </Avatar>
                </div>
                  </IconButton>
                  
                </>
                ):(
                    <Button component={Link} to='/auth' variant='contained' color='primary' 
                     >
                        SignIn
                    </Button>
                    
                )
                
            }
              
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
                        <FiLogOut />&nbsp;<span className={classes.logoutText}>Logout</span>
                    </Button>
                </MenuItem>
        
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export  { Nav};