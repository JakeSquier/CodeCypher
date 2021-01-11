import React from 'react';
import {Menu, MenuItem, IconButton, AppBar, Toolbar, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText} from '@material-ui/core';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import './forms.css'
import { Formik, Field, Form } from 'formik';
import { mixed, number, object, string} from 'yup';
import * as Yup from 'yup';
import { red } from '@material-ui/core/colors';
import { ContactlessOutlined } from '@material-ui/icons';


const Header = (props) => {

    const [openLogin, setOpenLogin] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [openLogoutPop, setLogoutPop] = React.useState(false);

    const [loginUsername, setLoginUsername] = React.useState('')

    const [loginPassword, setLoginPassword] = React.useState('')

    const [signUsername, setSignUsername] = React.useState('')

    const [signPassword, setSignPassword] = React.useState('')

    const [signEmail, setSignEmail] = React.useState('')

    const handleSignUsername = (e) => {
        setSignUsername(e.target.value)
    }

    const handleSignPassword = (e) => {
        setSignPassword(e.target.value)
    }

    const handleSignEmail = (e) => {
        setSignEmail(e.target.value)
    }

    const handleLoginUsername = (e) => {
        setLoginUsername(e.target.value)
    }

    const handleLoginPassword = (e) => {
        setLoginPassword(e.target.value)
    }
    
    const handleMenu = (event) => {
        if(props.state.user != null){
            setAnchorEl(event.currentTarget);
        }else{
            var circle = document.querySelector('.accountcircle')
            console.log(circle)
            //circle.style.color = 'red';
        
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpenLogin = () => {
        setOpenLogin(true);
    };
    
      const handleCloseLogin = () => {
        setOpenLogin(false);
    };

    const [openSignUp, setOpenSignUp] = React.useState(false);

    const handleClickOpenSignUp = () => {
        setOpenSignUp(true);
    }

    const handleCloseSignUp = () => {
        setOpenSignUp(false);
    }


    const navBar = makeStyles({
        title: {
            marginRight: "1170px"
        },
        loginButton: {
            fontSize: "14",
            fontFamily: "IBM plex sans",
            marginRight: "15px",
            variant: "outlined"
        },
        signUpButton: {

            backgroundColor: "#3485E4",
            marginRight: "-10px"
        }
    });
    
    const classes = navBar();

    const closePop = () => {
        setLogoutPop(false)
    }
    
    return(
        <>
            <Dialog open={openLogoutPop} onClose={closePop} style={{color: '#262B3B'}}>
                <DialogTitle variant='h6'>Are You Sure!</DialogTitle>
                <DialogActions>
                    <Button style={{width: '50%'}} onClick={closePop}><CloseIcon style={{color: 'red'}}/></Button>
                    <Button style={{width: '50%'}}onClick={()=>{
                        props.handleLogout()
                        setLogoutPop(false)
                        }}><CheckIcon style={{color: 'green'}}/></Button>
                </DialogActions>
            </Dialog>
        <AppBar boxShadow={3} position="static" width="100%" style={{ margin: 0 }}>
                <Toolbar>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircleIcon className='accountcircle' size='large'/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={()=>{
                                handleClose()
                                props.handleInfoOpen()
                            }}>My Account</MenuItem>
                            <MenuItem onClick={()=>{
                                handleClose()
                                setLogoutPop(true)
                            }}>Logout</MenuItem>
                        </Menu>

                        {props.state.user? <Typography className={classes.title}><CheckCircleIcon style={{color: 'green', marginTop: '6px'}}/></Typography>: <Typography className={classes.title}><ErrorOutlineIcon style={{color: 'red', marginTop: '6px'}}/></Typography>}
                        <Button 
                            className={classes.loginButton} 
                            style={{backgroundColor: "#262B3B", color: "#3485E4"}}
                            boxShadow={3} 
                            onMouseEnter={event=>{
                                event.target.style.backgroundColor = "#3485E4" 
                                event.target.style.color = "white"
                            }}
                            onMouseLeave={event=>{
                                event.target.style.backgroundColor = "#262B3B"
                                event.target.style.color = "#3485E4"
                            }}
                            onClick={handleClickOpenLogin}
                            >Log in</Button>
                            <Dialog open={openLogin} onClose={handleCloseLogin}>
                                <DialogTitle id="login" style={{marginLeft: '180px'}}>Login</DialogTitle>
                                <DialogContent>
                                    <Formik
                                    validationSchema={
                                        object({
                                            
                                        })
                                    }
                                    initialValues={{
                                        username: '',
                                        password: ''
                                    }}
                                    onSubmit={(values) => {
                                        console.log(props)
                                        handleCloseLogin();
                                    }}
                                    >
                                    {({values}) => (
                                        <Form>
                                            <TextField name='username' label='Username' fullWidth onChange={handleLoginUsername}/>
                                            <TextField name='password' label='Password' type='password' fullWidth onChange={handleLoginPassword}/>
                                            <Button type='submit' onClick={()=>{
                                                props.handleLogin({username: loginUsername, password: loginPassword})
                                                handleCloseLogin()
                                            }} fullWidth style={{marginTop: '20px', backgroundColor: 'blue'}}>Login</Button>
                                        </Form>
                                    )}
                                    </Formik>
                                    {/* <div id='loginWrapper'>
                                        <div className='login-form-container'>
                                            <form onSubmit={(e) => {
                                                props.handleLogin(e)
                                                handleCloseLogin()
                                            }}>
                                                <div className='login-input-group'>
                                                    <i className='fas fa-user'/>
                                                    <input type="text" name="username"/>
                                                    <span className='login-bar'/>
                                                </div>
                                                <div className='login-input-group'>
                                                    <i className='fas fa-envelope'/>
                                                    <input type="text" name="password"/>
                                                    <span className='login-bar'/>
                                                </div>
                                                <div className='login-input-group'>
                                                    <i className='fas fa-'/>
                                                    <input type="submit" value="Submit"/>
                                                    <span className='login-bar'/>
                                                </div>
                                            </form>
                                        </div>
                                    </div> */}
                                </DialogContent>
                        </Dialog>
                        <Button className={classes.signUpButton} boxShadow={3} onClick={handleClickOpenSignUp}>Sign up</Button>
                        <Dialog open={openSignUp} onClose={handleCloseSignUp}>
                                <DialogTitle id="signup" style={{marginLeft: '243px'}}>Sign Up</DialogTitle>
                                    <DialogContent>
                                    {/* <div className='signupWrapper'>
                                            <div className='signup-form-container'>
                                                <form onSubmit={(e)=>{
                                                    props.createUser(e)
                                                    handleCloseSignUp()
                                                }}>
                                                    <div className="signup-input-group">
                                                        <i class="fas fa-user"/>
                                                        <input type="text" name="username" placeholder="Username..."/>
                                                        <span className='signup-bar'/>
                                                    </div>
                                                    <div className="signup-input-group">
                                                        <i class="fas fa-envelope"/>
                                                        <input type="text" name="email" placeholder="Email..."/>
                                                        <span className='signup-bar'/>
                                                    </div>
                                                    <div className="signup-input-group">
                                                        <i className="fas fa-lock"/>
                                                        <input type="text" name="password" placeholder="Password..."/>
                                                        <span className='signup-bar'/>
                                                    </div>
                                                    <div className="signup-input-group">
                                                        <i class="fas fa-lock"/>
                                                        <input type="password" name="passwordConf" placeholder="Confirm password..."/>
                                                        <span className='signup-bar'/>
                                                    </div>
                                                    <div className="signup-input-group">
                                                        <i class="fas fa-telegram-plane"/>
                                                        <input type="submit" value="submit"/>
                                                        <span className='signup-bar'/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div> */}
                                        <Formik 
                                        validationSchema={
                                            object({
                                                
                                            })
                                        }
                                        initialValues={{
                                            firstname: '',
                                            surname: '',
                                            email: '',
                                            username: '',
                                            password: ''
                                        }}
                                        onSubmit={(event, values)=>{
                                            console.log(values)
                                            handleCloseSignUp();
                                            props.createUser()
                                            fetch('http://localhost:3000/api/v1/users', {
                                                method: 'POST',
                                                headers: {
                                                    "Content-Type": "application/json",
                                                },
                                                body: JSON.stringify({
                                                    name: values.firstname,
                                                    surname: values.surname,
                                                    username: values.username,
                                                    password: values.password,
                                                    email: values.email
                                                })
                                            })
                                            .then(res => res.json())
                                            .then(console.log)
                                        }}>
                                            {({values}) => (
                                                <Form>
                                                    <TextField name='username' label='Username' fullWidth onChange={handleSignUsername}/>
                                                    <TextField name='email' label='Email' fullWidth onChange={handleSignEmail}/>
                                                    <TextField name='password' label='Password' type='password' fullWidth onChange={handleSignPassword}/>
                                                    <Button type='submit' onClick={()=>{
                                                        props.createUser({username: signUsername, email: signEmail, password: signPassword})
                                                        handleCloseSignUp()
                                                    }}fullWidth style={{marginTop: '20px', backgroundColor: 'blue'}}>Sign Up</Button>
                                                </Form>
                                            )}
                                        </Formik>
                                    </DialogContent>
                        </Dialog>
                </Toolbar>
        </AppBar>
        </>
    );
}

export default Header;