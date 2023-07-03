import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

import { Button, Card, Container, Grid, Paper, Typography } from '@material-ui/core';


import { client } from '../apiSanity/client';
import { UploadData, getData } from '../apiSanity/fetch';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(3),
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: theme.shadows[4],
    },
  },
}));


function Expression() {

  const videoRef = useRef();
  const canvasRef = useRef();
  const classes = useStyles();
  const [expressionScore, setExpressionScore] = useState(null);
  const [imgSrc, setImgSrc] = useState('');
  const [isCamOpen, setCamOpen]= useState(false) ;
  const [isUpload,setUpload]=useState(false) ;
  const [Expressiondata,setData] = useState([] );
  
  const user = JSON.parse(localStorage.getItem('profile')) ;

  const loadModels = () => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    ]).then(() => {
      faceDetection();
    })
  };

  const startVideo = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((currentStream) => {
        videoRef.current.srcObject = currentStream;
      })
      .catch((err) => {
        console.error(err)
      });
  }

  const openCam=()=>{
  setCamOpen(true) ;
    startVideo();
    videoRef && loadModels();
  }
  const faceDetection = async () => {
    setInterval(async() => {
    const media = videoRef.current;
        const input = await faceapi.toNetInput(media);
      const detections = await faceapi.detectAllFaces(input, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();

      canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current);
      faceapi.matchDimensions(canvasRef.current, {
        width: 940,
        height: 650,
      })

      const resized = faceapi.resizeResults(detections, {
        width: 940,
        height: 650,
      });

      faceapi.draw.drawDetections(canvasRef.current, resized)
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resized)
      faceapi.draw.drawFaceExpressions(canvasRef.current, resized)

      // Set the expression score state
      if (detections.length > 0) {
        setExpressionScore(detections[0].expressions);
      } else {
        setExpressionScore(null);
      }
    }, 1000)
  }

  const handleCanvasClick = async() => {
  
    setUpload(true) ;
    setImgSrc('');

  // Remove the old canvas
  const oldCanvas = canvasRef.current;
  oldCanvas?.parentNode?.removeChild(oldCanvas);

  // Create a new canvas element
  const newCanvas = document.createElement('canvas');
  newCanvas.width = videoRef.current.videoWidth;
  newCanvas.height = videoRef.current.videoHeight;
  newCanvas.style.display = 'none';

  // Draw video image onto the new canvas
  const context = newCanvas.getContext('2d');
  context.drawImage(videoRef.current, 0, 0);

  // Draw expressions image onto the new canvas
  const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
  const resized = faceapi.resizeResults(detections, {
    width: newCanvas.width,
    height: newCanvas.height,
  });
  faceapi.draw.drawDetections(newCanvas, resized);
  faceapi.draw.drawFaceLandmarks(newCanvas, resized);
  faceapi.draw.drawFaceExpressions(newCanvas, resized);

  // Get merged image data URL and set state
  const dataURL = newCanvas.toDataURL();
  setImgSrc(dataURL);

  // Append the new canvas element to the container
  const container = videoRef.current.parentNode;
  container.appendChild(newCanvas);

  // Set the canvasRef to the new canvas element
  canvasRef.current = newCanvas;
  }
  
    const handleUpload=()=>{
      
   
   UploadData({ user, imgSrc,expressionScore})
    
    }
  
useEffect(() => {
const fetchData = async () => {
try {
const result = await client.fetch(`*[_type == "user" && uId == "${user.result.googleId}"]`);

console.log(result);
setData(result) ;
} catch (error) {
// Handle error
}
};
fetchData();
}, [user]);
    
  return (
  <>
 
  <Paper style={{padding:10}}>
 {  !isCamOpen?(<Button variant="contained" onClick={openCam}>Open Camera</Button>):
    (<Button variant="contained" onClick={()=>{  const stream = videoRef.current.srcObject;
  const tracks = stream?.getTracks();
  tracks?.forEach(track => track.stop());
  videoRef.current.srcObject = null;
  setCamOpen(false) ;
  }}>Stop Camera</Button>)}
     
      { isCamOpen &&<Grid container spacing={2}>
  <Grid item xs={12} sm={6} style={{ display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
  <div style={{ position: 'relative', }}>
    <Container className='app__video' align='center'>
      <video crossOrigin='anonymous' ref={videoRef} autoPlay style={{ width: '80%' }}></video>
    </Container>
    <canvas
      ref={canvasRef}
      width="auto"
      height="auto"
      className='app__canvas'
      onClick={handleCanvasClick}
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  </div>
    <Button variant="contained" onClick={handleCanvasClick}>Capture Image</Button>
    { isUpload && <Button variant="contained" onClick={handleUpload}>Upload Image</Button>}
</Grid>
  { (
    <Grid item xs={12} sm={6}>
      <Card style={{border:'1px solid black', padding:10}}>
        <Typography gutterBottom variant="h5">Expressions</Typography>
        <ul style={{textAlign:'justify'}}>
          <li>😀 Happy: {expressionScore?.happy.toFixed(2)}</li>
          <li>😢 Sad: {expressionScore?.sad.toFixed(2)}</li>
          <li>😠 Angry: {expressionScore?.angry.toFixed(2)}</li>
          <li>😮 Neutral: {expressionScore?.neutral.toFixed(2)}</li>
        </ul>
        { imgSrc && <img src={imgSrc} alt='expression' style={{objectFit:'contain' , width:'100%'}} />}
      </Card>
    </Grid>
  )}
</Grid>}
</Paper>
<Paper style={{marginTop:10}}>
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Your Previous Clicks
      </Typography>
      <Grid container spacing={3}>
 {
 
    Expressiondata[0]?.data?.map((item)=> (
          <Grid item xs={12} sm={2} md={2} key={item?._key}>
            <img src={item?.image?.imgSrc} alt="gallery item" className={classes.image} />
          </Grid>
        ))}
</Grid>
    </div>
</Paper>
</>
  )
}
export default Expression ;
        
        
   