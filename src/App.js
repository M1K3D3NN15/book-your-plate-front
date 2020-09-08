import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import './App.css';
import Navbar from "./components/layout/navbar";
import HomeClient from "./components/client/home";
import DescriptionCard from "./components/client/descriptionCard";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const ciao = [
  {
    id: 1,
    title: 'Ciao',
    description: 'Description Ciao',
    image: 'https://unsplash.com/photos/5E5N49RWtbA',
    date: 1595073600,
    cost: 20
  },
  {
    id: 2,
    title: 'Miao',
    description: 'Description Miao',
    image: 'https://unsplash.com/photos/5E5N49RWtbA',
    date: 1595160000,
    cost: 15
  },
  {
    id: 3,
    title: 'Bau',
    description: 'Description Bau',
    image: 'https://unsplash.com/photos/5E5N49RWtbA',
    date: 1595246400,
    cost: 10
  },
  {
    id: 4,
    title: 'CiaoMiao',
    description: 'Description CiaoMiao',
    image: 'https://unsplash.com/photos/5E5N49RWtbA',
    date: 1595246400,
    cost: 5
  },
  {
    id: 5,
    title: 'CiaoBau',
    description: 'Description CiaoBau',
    image: 'https://unsplash.com/photos/5E5N49RWtbA',
    date: 1595246400,
    cost: 7
  }
]

function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const receiveChildValue = (value) => {
    handleClickOpen();
  };

  const descriptionsCards = ciao.map((card , index) => <DescriptionCard key={index} di={card} getId={receiveChildValue}/>)

  return (
    <div className="App">
      <Navbar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} direction={"row"} justify={"center"} alignContent={"center"} alignItems={"center"}>
            {/* List of dishes to Order */}
            <Grid item xs={6}>
              {descriptionsCards}
            </Grid>
          </Grid>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Order</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To order this dishes tap your name and pay with stripe :)
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Type your name"
                type="email"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary">
                Subscribe
              </Button>
            </DialogActions>
          </Dialog>
        </Container>
      </main>
    </div>
  );
}

export default App;
