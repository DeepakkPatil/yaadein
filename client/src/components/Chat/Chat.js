import React ,{ useEffect, useState } from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import useStyles from './styles';
import * as api from '../../api/index'

const Chat = () => {
  
  
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles() ;
  const [search,setSearch]= useState(''); 
  const [friends,setFriends]= useState([]) ;
  
  console.log("user: ",user) ;
  
  useEffect(()=>{
  const handleFriends=async()=>{
  
    const { data } = await api.getFriends(user?.result?._id);
    setFriends(data.friends) ;
  }
  handleFriends();
  },[]) ;
  
  
  
  
  return (
      <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
            {/* <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/> */}
          <Typography variant="h8" component="h2">Friends</Typography>
          
          <Divider style={{ margin: '20px 0' }} />
            
            {/* {
            friends.map((friend)=>{
            
            return(
            <>
            <Typography variant="body1"><strong>{friend}</strong></Typography>
            <Divider style={{ margin: '20px 0' }} />     
            </>
            )
            })
            } */}
      
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={ 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt='img'/>
        </div>
      </div>
         
    </Paper>
  );
};


export default Chat