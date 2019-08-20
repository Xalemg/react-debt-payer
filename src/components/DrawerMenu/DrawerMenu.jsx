import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {HomeIcon, SettingsIcon, Own, Owned, Stats} from '../../assets/Icons/Icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styles from "./styles";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import { logOut } from '../../redux/actions/users/logOut';
import AddDebtFab from '../AddDebtFab/AddDebtFab'

class DrawerMenu extends React.Component {
  constructor( props) {
    super (props);

    this.state = {
      openMenu: false,
      anchorEl: null,
      showAddDebtModal: false,
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleDrawerOpen = () => {
    this.setState({openMenu: true });
  };
  handleDrawerClose = () => {
    this.setState({ openMenu: false });
  };
  handleCloseAuthMenu = () => {
    this.setState({ anchorEl: null });
  };

  handleLogOff =  () => {
    this.setState({ anchorEl: null });
    alert('Loged off');
    this.props.logOut();
  } 

  render() {

    const user = this.props.user;
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const login = checkLogin(user, this.handleCloseAuthMenu, this.handleLogOff);
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
          })}
        >
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.state.openMenu ? this.handleDrawerClose : this.handleDrawerOpen}
              className={classNames(classes.menuButton)}
            >
               {!this.state.openMenu? <MenuIcon /> : <ChevronLeftIcon/>}
            </IconButton>
            <Typography className= {classes.appTitle} variant="h6" color="inherit" noWrap>
              Debt payer
            </Typography>
            <div className = {classNames(classes.authMenu)} >
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
              <AccountCircle/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleCloseAuthMenu}
              >
                {login}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.openMenu,
            [classes.drawerClose]: !this.state.openMenu,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.openMenu,
              [classes.drawerClose]: !this.state.openMenu,
            }),
          }}
          open={this.state.openMenu}
        >
          <div className={classes.toolbar}>
          </div>
          <Divider/>
          <List>
          <Link to = '/overview'  style = {{textDecoration: "none"}}>
          <ListItem button key={'Overview'}>
              <ListItemIcon><HomeIcon/></ListItemIcon>
              <ListItemText primary='Overview' />
          </ListItem>
          </Link>
          <Link to = '/own' style = {{textDecoration: "none"}}>
          <ListItem button key={'Debts I own'}>
              <ListItemIcon><Own/></ListItemIcon>
              <ListItemText primary='Debts I owe'/>
          </ListItem>
          </Link>  
          <Link to = 'owned' style = {{textDecoration: "none"}}>
          <ListItem button key={'Debts being Owed'}>
              <ListItemIcon><Owned/></ListItemIcon>
              <ListItemText primary='Debts being owed'/>
          </ListItem>
          </Link>  
          <Link to = 'stats' style = {{textDecoration: "none"}}>
          <ListItem button key={'Stats'}>
              <ListItemIcon><Stats/></ListItemIcon>
              <ListItemText primary='Stats' />
          </ListItem>
          </Link>
          <Link to = 'friends' style = {{textDecoration: "none"}}>
          <ListItem button key={'Friends'} >
            <ListItemIcon><SettingsIcon/></ListItemIcon>
              <ListItemText primary='Friends' />
          </ListItem>
          </Link>
          </List>
          <Divider />
          <List>
          <Link to = 'friends' style = {{textDecoration: "none"}}>
          <ListItem button key={'Friends'} >
            <ListItemIcon><SettingsIcon/></ListItemIcon>
              <ListItemText primary='Friends' />
          </ListItem>
          </Link>
          <Link to = 'stats' style = {{display: "none"}}>
          <ListItem  button key={'About this'} to = 'stats'>
              <ListItemIcon><MailIcon/></ListItemIcon>
              <ListItemText primary='About this'/>
          </ListItem>
          </Link>  
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
        <AddDebtFab/>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
   user: state.user
  }
}

const checkLogin = (user, handleCloseAuthMenu, handleLogOff) => {
  if (user.id != null) {
    return  [ <MenuItem key="logedIn1" onClick={handleCloseAuthMenu}>Profile</MenuItem>,
    <MenuItem  key="logedIn2" onClick={ handleLogOff}>Log out</MenuItem>]
    }else {
      return (
        <Link to = 'login' style = {{textDecoration: "none"}}>
          <MenuItem  onClick={ handleCloseAuthMenu} style = {{textDecoration: "none"}}>
            Log in
          </MenuItem>
        </Link>
      )
  }
}


export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, {logOut})(DrawerMenu))