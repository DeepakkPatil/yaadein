import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core'
import { Link , useNavigate, useLocation} from 'react-router-dom'
import React,{useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import decode from 'jwt-decode' ;

import useStyles from './styles'
import memories from '../../images/memories.png';

const Navbar = () => {

      const classes = useStyles();
      const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile'))) ;
      const dispatch=useDispatch() ;
      const history = useNavigate() ;
    const location = useLocation() ;
          console.log(user) ;
      const logout=()=>{

        dispatch({ type:'LOGOUT'}) ;
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
      }, [location]) // because if the location or url changes then user must be fetched and ui must be rendered
      
     return (
    <div>
        
        <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
        <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center" >Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>
        <Toolbar className={classes.toolbar}>
            {
                user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageurl}>
                        { user.result.name.charAt(0)}
                    </Avatar>
                    <Typography className={classes.userName} variant='h6'>
                        { user.result.name }
                    </Typography>
                    <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
                        Logout
                    </Button>
                </div>):(
                    <Button component={Link} to='/auth' variant='contained' color='primary'>
                        SignIn
                    </Button>
                )
            }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar