import { Container, Grow, Grid, Paper, TextField, AppBar, Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Posts from '../Posts/Posts'
import Form from '../Form/Form';
import { getPosts, getPostsBySearch } from '../../actions/posts'
import {  useLocation, redirect, useNavigate } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input' ;  

import useStyles from './styles.js' ;
import Pagination from '../Pagination';

function useQuery(){
  
  const url= new URLSearchParams(useLocation().search) ;
  return url ;

}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const query = useQuery();
  const history= useNavigate() ;
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      //search
    }
  };

  const handleAdd = (tag) => setTags([...tags, tag]);
  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  // map is used to transform each element of an array into a new array of the same length. It takes a function as its argument that is applied to each element of the array, and returns a new array of the same length where each element is the result of applying the function to the corresponding element of the original array.
// filter, on the other hand, is used to create a new array with all elements that pass a certain test. It takes a function as its argument that returns a boolean value, and returns a new array with only the elements for which the function returns true.
  
  
  const handleSearch = (e) => { 
  
  e.preventDefault();

  if(search.trim() || tags)
  {

  //dispatch a search
  dispatch(getPostsBySearch({ search , tags: tags.join(',') }))
   history(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
  }
  else
  {
    redirect('/') ;
  }
  }
  
  
  return (
    <Grow in>
      <Container maxWidth={"xl"}>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={7} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                fullWidth={true}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyPress={handleKeyPress}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                value={tags}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Search Tags "
                variant="outlined"
              />
              <Button onClick={handleSearch} variant="contained" color="primary" >
              Submit
              </Button>
              
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home