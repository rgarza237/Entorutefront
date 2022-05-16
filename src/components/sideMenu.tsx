import React, { useRef, useState, useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

/* import Button from '@material-ui/core/Button'; */

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        
      },
    },
  }),
);


function SideMenu() {

  const classes = useStyles();
  

  /* user state */
  const [user, setUser] = useState(false)

  const loginFunction = () => setUser(true)


  const ref = useRef<HTMLDivElement>(document.createElement('div'));
  const logoRef = useRef<HTMLDivElement>(document.createElement('div'));

  const openMenu = () => {
    const logo = logoRef.current; // corresponding DOM node
    const menuDom = ref.current; // corresponding DOM node
    const childMenu = menuDom.firstChild as HTMLElement
    logo.classList.add('d-none')
    menuDom.classList.remove('d-none')
    childMenu.classList.remove('slide')
  }
  const closeMenu = () => {
    console.log('close');
    const logo = logoRef.current; // corresponding DOM node
    const menuDom = ref.current; // corresponding DOM node
    const childMenu = menuDom.firstChild as HTMLElement
    childMenu.classList.add('slide')
    menuDom.classList.add('d-none')
    logo.classList.remove('d-none')
  };


  return (
    <>
      <h4 className="logo" onClick={openMenu}>CyberPunketo</h4>
      <div ref={ref} className='side-menu-container d-none' >
        <div className='side-menu'>
          <div className="close-menu">
            <IconButton aria-label="delete" onClick={closeMenu}>
              <CloseIcon />
            </IconButton>
          </div>
          {
            user ? <div className="user-menu">
                <Divider />
                <img src={`${process.env.PUBLIC_URL}/assets/images/user.png`} alt="" />
                <h2>James GH</h2>
                <div className='form-login'>
                  <form className={classes.root} noValidate autoComplete="off">
                    <button className="btn-main" onClick={() => setUser(false)}>
                      Logout
                    </button>
                  </form>
                </div>
              </div> :
              <>
                
                <Divider />
                <List >
                  <ListItem button>
                    <ListItemText primary="Login" />
                  </ListItem>
                  <div className='form-login'>
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField
                        required
                        type="text"
                        id="filled-required"
                        label="Email"
                        variant="filled"
                        
                      />
                      <TextField
                        required
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                      />
                      <button className="btn-main" onClick={loginFunction}>
                        Login
                      </button>
                    </form>
                  </div>
                  <Divider />
                  <ListItem button >
                    <ListItemText primary="Sing in" />
                  </ListItem>
                  <div className='form-login'>
                    <form className={classes.root} noValidate autoComplete="off">
                      <TextField
                        required
                        type="text"
                        id="filled-required"
                        label="Email"
                        variant="filled"
                        
                      />
                      <TextField
                        required
                        type="text"
                        id="filled-required"
                        label="Email"
                        variant="filled"
                        
                      />
                      <TextField
                        required
                        type="text"
                        id="filled-required"
                        label="Email"
                        variant="filled"
                        
                      />
                      <TextField
                        required
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                      />
                      <button className="btn-main" onClick={loginFunction} >
                        Register
                      </button>
                    </form>
                  </div>
                  <Divider />
                </List>
              </>
            
          }
          
        </div>
      </div>
    </>
  )
}

export default SideMenu;