import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../assets/css/navbar.css';
import Datetime from './Datetime';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  abRoot:{
    backgroundColor: "black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar classes={{ 
    root: classes.abRoot}} position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            Dmujeres Beauty Market
          </Typography>
          <Datetime />
        </Toolbar>
      </AppBar>
    </div>
  );
}