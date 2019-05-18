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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import styles from "./styles";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {connect} from 'react-redux'

class DrawerMenu extends React.Component {
  constructor( props) {
    super (props);

    this.state = {
      openMenu: false,
      anchorEl: null,
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
  } 
  handleLogIn =  () => {
    this.setState({ anchorEl: null });
    alert('Loged off');
  } 
  render() {
    const {user} = this.props;
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    console.log(user);
    
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
                <MenuItem onClick={this.handleCloseAuthMenu}>Profile</MenuItem>
                <MenuItem onClick={ this.handleLogOff}>Log out</MenuItem>
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
          <Divider />
          {/* TODO move next items of the drawer to the draweContent component*/}
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}


export default withStyles(styles, { withTheme: true })(connect(mapStateToProps)(DrawerMenu))