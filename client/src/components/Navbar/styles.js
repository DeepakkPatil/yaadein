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
    [theme.breakpoints.down('sm')]: {
    },
  },
  image: {
    marginTop: '2px',
     [theme.breakpoints.down('sm')]: {
     maxWidth:'45%',
     height:'auto',
     minWidth:'180px',
     minHeight:'60px',
    },
  },
  toolbar: {
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    width: '30%',
     alignItems: 'center',
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
      justifyContent: 'center',
    },
  },
  logout: {
    right:0,
    marginLeft:10
  },
 logoutText: {
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
},
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: 'gray',
    fontWeight: '300',
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