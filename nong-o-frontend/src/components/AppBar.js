import React, {
  memo,
} from 'react';

import { withStyles } from '@material-ui/core/styles';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import image1 from './img/logo.png';
import image2 from './img/github.svg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
    color: theme.palette.getContrastText('#FFFFFF')
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const AppBar = memo((props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <MuiAppBar position="static" className={classes.appBar}>
        <Toolbar>
            
            <img src={image1} height="48px" alt="logo" onClick={()=> window.location.reload()} style={{cursor: 'pointer'}} />
            <Typography variant="h6" color="inherit" className={classes.grow} style={{marginLeft:8 ,marginTop:10, fontSize:27 }} onClick={()=> window.location.reload()}>
            nong-o
          </Typography>
          
          <Button color="inherit" onClick={()=> window.open("https://github.com/finality5/nong-o", "_blank")}>
            <img src={image2} height="35px" alt="logo" />
          </Button>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
});

export default withStyles(styles)(AppBar);
