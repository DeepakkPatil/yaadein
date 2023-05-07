import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
  media: {
    width:'100%',
    height:'250px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    objectFit:'cover',
    marginTop:'-10%'
  },
  border: {
    border: 'solid',
  },


  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',

  },
  title: {
  textAlign:'center',
  width:'100%',
  },

  cardAction: {
    display: 'block',
    textAlign: 'initial',
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
}));