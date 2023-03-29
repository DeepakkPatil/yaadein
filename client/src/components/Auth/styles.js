import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container:{
  height:'100%',
  width:'100%',
  border:'10px solid black',
   backgroundSize: 'contain',
    backgroundImage: "url('https://images.pexels.com/photos/8848776/pexels-photo-8848776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
 
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
}));