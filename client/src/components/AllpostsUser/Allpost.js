import React, { useEffect, useState } from "react";
import useStyles from './styles'
import { Avatar, ButtonBase, Card, Grid, Typography } from "@material-ui/core";
import * as api from '../../api/flaskapi'
import gif from '../../constants/giphy.webp'
import happy from '../../constants/happy.gif'
import { Example } from "../Carousel";

const Allpost = () => {
  
  const classes = useStyles();
  const [yourPost,setYourPost] = useState({}) ;
const user = JSON.parse(localStorage.getItem('profile')) ;
    
    
      useEffect(() => {
    async function fetchData() {
      try {
        const {data} = await api.fetchSentiment({ userId: (user?.result?._id || user?.result?.googleId)});
        setYourPost(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
    
    
  }, []);
    
    let arr=[]
    if(yourPost?.sentiment)
         arr=Object.values(yourPost.sentiment) ;
    
  return (<div>
  
    <div className={classes.container} style={{background:'white' ,padding:20,borderRadius:4, marginTop:20}}>
     
       <h1 >Your Posts 🔥</h1>
      { user && yourPost?.sentiment && <>
      { arr[0]>=0 || arr[0]==="NA" ?( <img src={happy} style={{ width:200}}/>):( <img src={gif}  style={{ width:200}}/>) }
    <h1>Overall sentiment score: {arr[0]}</h1>
       <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {
        
        arr[1].length>0 && arr[1].map((post)=>(<>
           <Grid key={post?._id} item xs={12} sm={12} md={6}  lg={4}  >
            <Card  raised elevation={6} >
     <ButtonBase
         component="span"
         name="test"
         className={classes.cardAction}
       ><img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
    
     
     <div style={{ border:'1px solid black' , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'center' , background:'#4C3D3D' ,color:"white"}} >
     <Typography className={classes.title}   gutterBottom variant="h5" component="h5">{post.title}</Typography>
      <Typography  className={classes.title} variant="body2"   >{ post.sentiment }</Typography>
      
     </div>

     </ButtonBase>
      
     
   </Card>
         </Grid>
        </>))
        }
    
      </Grid>
        </>      
      
      }
      <Example positive={arr[0]} />
    </div>
  </div>)
  ;
};

export default Allpost;
