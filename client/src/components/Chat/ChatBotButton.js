import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineMessage } from 'react-icons/ai';
import img from '../../images/happy-chatbot-unscreen.gif'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ChatBotButton = () => {
  const classes = useStyles();
  const history = useNavigate();

  const handleClick = () => {
    history('/bot');
  };

  return (<>
    <Fab  className={classes.fab} onClick={handleClick}>
      <AiOutlineMessage />
      <img src={img} style={{width:100}} />
    </Fab>
    </>
  );
};

export  {ChatBotButton};
