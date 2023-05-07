import React, { useState, useEffect } from "react";
import * as api from '../../api/flaskapi'
import { Avatar, ButtonBase, Card, Grid, Typography } from "@material-ui/core";

import useStyles from './styles'

import { useNavigate } from "react-router-dom";

const Trends = () => {
  const [trends, setTrends] = useState({ trending_creator: {}, trending_posts: [] });
  const classes = useStyles();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const {data} = await api.fetchTrends();
     
        setTrends(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
    
    
  }, []);
  
  const history= useNavigate();
  const user = JSON.parse(localStorage.getItem('profile')) ;

const openPost = (post) =>{ 
console.log("check",post) ;
return history(`/posts/${post.id}`)

};
    
    function truncate(input) {
   if (input.length > 200) {
      return input.substring(0, 50) + ' ...';
   }
   return input;
};

  return (
  <>
  <div className={classes.container} style={{background:'white' ,padding:20,borderRadius:4, marginTop:20}}>
     
             <h1 >Trending Creators 👨‍💻</h1>
             {
             !user && <p>Please login to access this feature</p>
             }
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {user && trends.trending_creator && Object.values(trends.trending_creator).map((creator) => (   
         <Grid item xs={12} sm={12} md={6}  lg={4}  >
           <div style={{display:'flex' ,flexDirection:'column' ,alignItems:'center' ,justifyContent:'center' , padding:10,border:'1px solid gray'}}>
            <Avatar className={classes.purple} alt={creator[1].name} >
                        { creator[1].name.charAt(0)}
            </Avatar>
            <Typography    gutterBottom variant="h6" component="h6">{creator[1].name}</Typography>
       
           </div>
          </Grid>
      ))}
      </Grid>
      </div>
      
       <div className={classes.container} style={{background:'white' ,padding:20,borderRadius:4, marginTop:20}}>
     
       <h1 >Trending Posts 🔥</h1>
       {
             !user && <p>Please login to access this feature</p>
             }
       <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {user && trends.trending_posts && Object.values(trends.trending_posts).map((post) => (   
      
    
          <Grid key={post.id} item xs={12} sm={12} md={6}  lg={4}  >
            <Card className={classes.card} raised elevation={6} >
    <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={()=>openPost(post)}
      ><img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
    
      <div className={classes.details}>
        <Typography variant="body2" color="textHint" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <div style={{ border:'1px solid black' , display:'flex' , flexDirection:'column' , alignItems:'center' , justifyContent:'center' , background:'#4C3D3D' ,color:"white"}} >
      <Typography className={classes.title}   gutterBottom variant="h5" component="h5">{post.title}</Typography>
       <Typography  className={classes.title} variant="body2"   >{ truncate(post.message)}</Typography>
      
      </div>

      </ButtonBase>
      
     
    </Card>
          </Grid>
   
      
      
      ))}
      </Grid>
    </div>
  </>
    
  );
};

export default Trends;


