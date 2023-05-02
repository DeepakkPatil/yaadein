import React , { useState} from 'react'
import { Avatar, Button, Paper, Grid,Typography,Container } from '@material-ui/core'
import { GoogleLogin} from 'react-google-login'
import { gapi } from 'gapi-script'; // for error pop-up failed
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

  import "react-toastify/dist/ReactToastify.css";

import { Navigate, useNavigate } from 'react-router-dom';
import { signin,signup } from '../../actions/auth'

import Icon from './Icon';
import useStyles  from './styles' ;
import Input from './Input'; // made custom input field

gapi.load('client:auth2', () => {
    window.gapi.client.init({
        clientId: '499565496401-hl9j161bimpggug36p506i8l5uvktm2v.apps.googleusercontent.com',
            prompt: 'select_account',
        plugin_name: "chat"
    })})

const initialState={

    firstName : '' ,
    lastName: '',
    password : '' ,
    confirmPassword : ''
}

const Auth = () => {

   
    const classes =useStyles() ;
    const [isSignup,setIsSignUp]= useState(false) ;
    const [ showPassword,setShowPassword]= useState(false) ;
    const [formData,setFormData]= useState(initialState) ;
    const dispatch =useDispatch() ;
    const history =useNavigate() ;
     const user = JSON.parse(localStorage.getItem('profile')) ;
    if(user)
      return (<Navigate to='/posts'/>) ;

    const handleSubmit=(e)=>{
        
        e.preventDefault() ;
       if(isSignup)
       {
            dispatch(signup(formData,history)) ; // history to navigate to something
       }
       else
       {
          dispatch(signin(formData,history)) ; 
       }
    }
    const handleChange=(e)=>{
           setFormData({...formData , [e.target.name]: e.target.value }) // change only selected one , current wli
    }
    const handleShowPassword=()=>( setShowPassword((prevState)=> !prevState))
    const switchMode=()=>{

        setIsSignUp((prevState)=>!prevState) // using this we are toggling bw signup and signIn
        setShowPassword(false );
    }
    
    const googleSuccess=async(res)=>{

        const result=res?.profileObj ;
        const token=res?.tokenId ;

        try {
            
            dispatch({ type: 'AUTH' , data: { result, token}})
            toast.success('🦄 Google signin Successfull', {
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
            history('/') ; // redirecting to home page
        } catch (error) {
        toast.error('🦄  signin Unsuccessfull. Try again Later!', {
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
            console.log(error) ;
        } 
    }
    const googleFailure=(error)=>{
        console.log(error) ;
         toast.error('🦄 Google signin Unsuccessfull. Try again Later!', {
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});
        console.log("Google signin Unsuccessfull. Try again Later")
    }
    
    
  return (
     <Container component="main" maxWidth="xs">
    <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.Avatar}>
            <LockOutlinedIcon/>
        </Avatar>
        <Typography variant="h5">{isSignup?'Sign Up':'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                         
                            <Input name='firstName' label='firstName' handleChange={handleChange}  half />
               
                            <Input name='lastName' label='lastName' handleChange={handleChange}  half />
                            
                            </>
                        )
                    }
                    <Input  name='email' label='Email Address' handleChange={handleChange} type='email' />
                    <Input name='password' label='Password' handleChange={handleChange} type={ showPassword ? 'text' :'password'} handleShowPassword={handleShowPassword} />
                    {
                         isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password'/>
                    }
                    
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                        {
                            isSignup ? 'Sign Up': 'Sign In'
                        }
                </Button>
                <GoogleLogin 
                    clientId='499565496401-hl9j161bimpggug36p506i8l5uvktm2v.apps.googleusercontent.com'
                    render={(renderProps)=>(
                        <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant='contained'>
                            Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
                <Grid container justify='flex-end' >
                        <Grid item>
                            <Button onClick={switchMode} >
                                    {
                                        isSignup? 'Already have an account? Sign In' : 'Dont have an account? Sign Up'
                                    }
                            </Button>
                        </Grid>
                </Grid>
        </form>

    </Paper>

 </Container>
  )
}

export default Auth

