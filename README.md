# Yaadein : A life's ScrapBook

<h2><a href="https://life-storybook.netlify.app">Deployed App Link</a></h2>

<p align="center">
  <img src="https://i.ibb.co/TgbrjTg/translogo-Dark.png" alt="translogo-Dark" width="240" />

<p align="justify"> <b>"life's ScrapBook" </b> is a full-stack web application developed using ReactJS, Redux, MongoDB, and Google Authentication, with an added Flask backend. The application is designed to serve as a life's StoryBook, where users can create, edit, and share stories/memories, and search for similar posts based on tags.<br /><br />
The app provides authentication and authorization mechanisms to ensure secure user access. The Flask backend enhances the application by providing trending posts and creators based on likes, and complete sentiment analysis of all posts sent by the user, with suggestions for quotes and actionables. <br /> <br />
Additionally, the app includes a new feature where users can upload a random selfie to their personal vault, and the face-api is used to recognize the user's facial expression. Based on the average mood of the user in a week, the app suggests some activities and quotes. The user's images are stored in the Sanity CMS, ensuring secure and reliable storage of user data."</p>
  


</p>
<div></div>
<p align="center">
    <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"> </a>
    <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"> </a>
    <img alt="flask" src="https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"> </a>
     <img alt="express" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"> </a> 
     <img alt="Netlify" src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7"> </a> 
     <img alt="vercel" src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"> </a> 
     
</p>


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
- The app uses Material UI for a sleek and responsive UI, and Toastify for notifications.
- Dependencies: npm i material-ui@latest, npm i react-tostify, npm i gapi-script, npm i react-redux, npm i react-router-dom, npm i jwt-decode, npm i axios, Flask, pymongo.
- The app is deployed on Vercel and Netlify.

![image](https://github.com/DeepakkPatil/yaadein/assets/108725514/c5274f75-ed71-42c8-bd36-52a61e665276)


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

<!-- ![WhatsApp Image 2023-05-13 at 8 25 15 AM](https://github.com/DeepakkPatil/yaadein/assets/108725514/6115dbb9-b5e4-4044-b054-4e1483e5264e) -->

<img src="https://github-production-user-asset-6210df.s3.amazonaws.com/108725514/238108731-6115dbb9-b5e4-4044-b054-4e1483e5264e.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230513%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230513T025959Z&X-Amz-Expires=300&X-Amz-Signature=9df0c6e96e3abcbd1868a3a28221174ea32ad3ba1fbd4be8bf123641b4df36fc&X-Amz-SignedHeaders=host&actor_id=108725514&key_id=0&repo_id=619127856" alt="image description" style="width: 400px;">

- A personal vault will be created for each user, where they can upload their own selfie images. The uploaded images will be stored securely in sanity CMS and will not be made public to other users.
- The uploaded images will be processed using face-api, a JavaScript library for face detection and recognition. Specifically, we will use face-api to recognize the user's face-expression from the uploaded image.
- We will store the mood data for each user, by aggregating their daily face-expression data over a week. We will use this data to determine the average mood of the user during that week.
- Based on the average mood of the user during the week, we will suggest some relevant activities and quotes. This will involve analyzing the user's mood data and matching it with predefined activity and quote data, which will be stored in our system.






