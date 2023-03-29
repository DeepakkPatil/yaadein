import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    top: 0,
    left: 0,
    height:80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'left',
    padding: '10px 30px',
    [theme.breakpoints.down('sm')]: {
    },
  },
  image: {
    marginTop: '2px',
    padding:'5px',
    borderRadius:'50%',
     [theme.breakpoints.down('sm')]: {
     width:100
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft:5,
     [theme.breakpoints.down('sm')]: {
     display: 'none',
     }
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));