# Yaadein : A life's StoryBook

<h2><a href="https://life-storybook.netlify.app">Deployed App Link</a></h2>
<h6><a href="https://github.com/DeepakkPatil/flaskbackend-yaadein">Flask Backend</a></h6>
<h6><a href="https://github.com/DeepakkPatil/sanity-yaadein">Sanity CMS backend </a></h6>

<p align="center">
  <img src="https://i.ibb.co/TgbrjTg/translogo-Dark.png" alt="translogo-Dark" width="240" />

<p align="justify"> <b> ⭐"life's StoryBook" </b> is a full-stack web application developed using ReactJS, Redux, MongoDB, and Google Authentication, with an added Flask backend. The application is designed to serve as a life's StoryBook, where users can create, edit, and share stories/memories, and search for similar posts based on tags.<br /><br />
⭐ The app provides authentication and authorization mechanisms to ensure secure user access. The Flask backend enhances the application by providing trending posts and creators based on likes, and complete sentiment analysis of all posts sent by the user, with suggestions for quotes and actionables. <br /> <br />
⭐ Additionally, the app includes a new feature where users can upload a random selfie to their personal vault, and the face-api is used to recognize the user's facial expression. Based on the average mood of the user in a week, the app suggests some activities and quotes. The user's images are stored in the Sanity CMS, ensuring secure and reliable storage of user data."</p>
  


</p>

<br /> 
<p align="center">
    <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"> </a>
    <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"> </a>
    <img alt="flask" src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"> </a>
     <img alt="express" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"> </a> 
     <img alt="Netlify" src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"> </a> 
     <img alt="vercel" src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"> </a> 
     
</p>

<hr />
<h2>Functionality: </h2>

- Yaadein is a full-stack website built with React and a MongoDB backend that allows users to create and share stories/memories.
- Users can perform all CRUD operations on their stories/memories including creating, updating, deleting, and viewing details of a story.
- The website features authentication and authorization mechanisms for secure user access.
- Users can log in through Google OAuth, and also sign up with a traditional MongoDB authentication mechanism.
- The app features a powerful search function based on tags that allows users to search for stories based on their interests.
- The search results feature pagination for better user experience.
- The website provides recommendations to users based on tags to suggest similar stories they might be interested in.
- Users can like and comment on stories, and receive notifications on new activity.
- The app now includes a Flask backend that provides trending posts and creators on the basis of likes.
- The backend also provides sentiment analysis for each user's posts, as well as an overall sentiment analysis of all the user's posts.
- On the basis of average mood of user in a week we would suggest some activities and quotes.
- Once the user uploads the pic using face-api we would recognize the face-expression of user.
- The images of users are stored in Sanity CMS.
- Users can view their personal vault where they can upload a random selfie. It won't be public.
- The sentiment analysis is performed using VaderSentiment, and the quotes suggested are from Unsplash.
- "Yaadein" also features a chat bot called "TravelTalk" built using Botpress. Users can interact with the bot to obtain information about different places in a concise and simple manner. The chat bot feature enhances the user experience by providing an additional way to obtain information and explore new places
- The app uses Material UI for a sleek and responsive UI, and Toastify for notifications.
- Dependencies: npm i material-ui@latest, npm i react-tostify, npm i gapi-script, npm i react-redux, npm i react-router-dom, npm i jwt-decode, npm i axios, Flask, pymongo.
- The app is deployed on Vercel and Netlify.

<img src="https://i.ibb.co/rtR6hC3/final-Yaadein.png" />



<h2> Tech Stack: </h2>

- Front-end: React, Redux, Material UI, Toastify
- Back-end: MongoDB, ExpressJS, NodeJS, Flask
- Database: MongoDB , Sanity CMS
- Authentication: Google OAuth, MongoDB authentication
- Sentiment Analysis: VaderSentiment
- Face Expression Recognition: Face-api
- Image Quotes: Unsplash API
- ChatBot: TravelTalk with Botpress
- Deployment: Netlify (front-end), Vercel (back-end)
  

  
 <h3>Dependencies (install them->)</h3>
 
```yaml

npm i material-ui@latest
npm i react-tostify
npm i gapi-script
npm i react-redux
npm i react-router-dom
npm i jwt-decode
npm i axios
npm i sanity-client
pip install Flask
pip install Flask-Cors
pip install pymongo
pip install vaderSentiment
pip install face-api


```

<h2>For Face Expression Recognition</h2>





<p align="center" >
 
  <img src="https://i.ibb.co/xhr3Jx4/Face-Recog.jpg" width="200"/>
  
  <img src="https://i.ibb.co/VqzFCD9/one.png" width="200"/>
</p>


- A personal vault will be created for each user, where they can upload their own selfie images. The uploaded images will be stored securely in sanity CMS and will not be made public to other users.
- The uploaded images will be processed using face-api, a JavaScript library for face detection and recognition. Specifically, we will use face-api to recognize the user's face-expression from the uploaded image.
- We will store the mood data for each user, by aggregating their daily face-expression data over a week. We will use this data to determine the average mood of the user during that week.
- Based on the average mood of the user during the week, we will suggest some relevant activities and quotes. This will involve analyzing the user's mood data and matching it with predefined activity and quote data, which will be stored in our system.


<h2>For Sentiment Analysis and Motivation </h2>

<p align="center">
  
<img src="https://i.ibb.co/JC4cQ0m/d1.png" />

  - Analysis on Posts and Recommmendation of quotes for motivation.
 
<img src="https://i.ibb.co/2krmMBV/d2.png" />
</p>

- Sentiment analysis on the comments of the posts is done to seek feedback from the users
- On the basis of this Quotes are shared to the user for keeping him motivated.


