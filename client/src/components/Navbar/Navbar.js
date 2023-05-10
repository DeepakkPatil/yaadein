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

const Navbar = () => {

      const classes = useStyles();
      const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile'))) ;
      const dispatch=useDispatch() ;
      const history = useNavigate() ;
    const location = useLocation() ;
  
    
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
        <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Link to='/'>
        <img className={classes.image} src={memories} alt="icon" height="70"  />
        </Link>
          { user && <Button  component={Link} to='/allposts' variant='outlined' color='primary' hint='your posts' >
          <BsFillPostcardHeartFill style={{fontSize :'1rem'}}/>
          <span className={classes.logoutText}>Posts</span>
          </Button>
          }
        </div>
        <Toolbar className={classes.toolbar}>
            {
                user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageurl}>
                        { user.result.name.charAt(0)}
                    </Avatar>
                    <Typography className={classes.userName} >
                        { user.result.name }
                    </Typography>
                    <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
                        <FiLogOut />&nbsp;<span className={classes.logoutText}>Logout</span>
                    </Button>
                </div>):(
                    <Button component={Link} to='/auth' variant='contained' color='primary' 
                     >
                        SignIn
                    </Button>
                    
                )
                
            }
        </Toolbar>
      </AppBar>
  )
}

export  {Navbar}