import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>({
  media: {
    width:'120%',
    height:'250px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
    objectFit:'cover',
    marginTop:'-20%'
  },
  border: {
    border: 'solid',
  },
  card: {
  display: 'flex',
  border:'1px solid gray',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems:'center' ,
  minHeight: 400,
  maxWidth: 320,
  overflow: 'hidden',
  position: 'relative',
},

  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
  textAlign:'center',
  width:'50%',
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