/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Pagination as Pag, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const Pagination = ({ page }) => {


  const classes = useStyles();


  return (
    <Pag
      classes={{ ul: classes.ul }}
      count={5}
      page={8}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
    />
  );
};

export default Pagination ;
