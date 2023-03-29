/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { Pagination as Pag, PaginationItem } from '@material-ui/lab';
import { Link, Navigate } from 'react-router-dom';

import useStyles from './styles';
import { useDispatch ,useSelector } from 'react-redux';
import { getPosts } from '../actions/posts';

const Pagination = ({ page }) => {
  
  const dispatch = useDispatch() ;
  const classes = useStyles();
  const { numberOfPages} = useSelector((state)=> state.posts) ;
  
  
    useEffect(() => {
    
    if(page)
    dispatch(getPosts(page));
  }, [page,dispatch]);




  return (
    <Pag
      classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) =>{ 
      return(
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
      )}
      }
    />
  );
};

export default Pagination ;
