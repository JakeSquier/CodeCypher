import React from 'react';
import { IconButton, Button, Typography, Grid,  Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText} from '@material-ui/core';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import BlockIcon from '@material-ui/icons/Block';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
//import history from '../history';
import Header from './components/header'
import NewProjectBtn from './components/newProjectBtn'
import Index from './components/index'
import LandArea from './components/landArea';
import { ThumbDownSharp } from '@material-ui/icons';

class HomePage extends React.Component {

    projectsURL = 'http://localhost:3000/api/v1/projects/'
    usersURL = 'http://localhost:3000/api/v1/users/'
  
    state = {
        user: null, 
        allProjects: [],
        loginWarningOpened: false,
        accountInfo: false,
        criminal: false

    }
    updateProjects = (projects) => {
        this.setState({allProjects: projects})
    }
  
    componentDidMount(){
        console.log(this.props.user)
        this.setState({user: this.props.user})
        fetch(this.projectsURL)
            .then(res => res.json())
            .then(projects => {
                setTimeout(this.setState({allProjects: projects}), 1000)
                //this.setState({allProjects: projects})
                console.log(this.state.allProjects)
            })
    }

    handleInfoOpen = () => {
        this.setState({accountInfo: true})
    }

    handleLogout = () => {
        this.setState({user: null})
        this.props.setUser(null)
        localStorage.token = null
    }

    renderProjects = () => {
        console.log('hellp')
    }

    userProjects = (userInfo) => {
        return this.state.allProjects.filter(project => project.user_id === userInfo.user.id)
    }

    createUser = sign => {
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: sign.username,
                password: sign.password,
                email: sign.email
            })
        })
        .then(res => res.json())
        .then(console.log)
    }

    handleLogin = (login) => {
        console.log(login.username, login.password)
        fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: login.username,
                password: login.password
            })
        })
        .then(res => res.json())
        .then(userInfo => {
            this.setState({user: userInfo.user})
            localStorage.token = userInfo.token
            this.props.setUser(userInfo.user)
        })
    }


    handleNewProject = (e) => {
        console.log('here')
        fetch('http://localhost:3000/api/v1/projects', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user_id: this.state.user.id,
                project_name: 'pog',
                theme: 'dark',
                html: '',
                css: '',
                javascript: ''
            })
        })
        .then(res => res.json())
        .then(project => {
            this.readyRedirect(project)
            this.props.history.push("/project")
        })
    }

    readyRedirect = (project) => {
        this.props.setProject(project)
        this.props.setUser(this.state.user)
    }

    userProjectsDenied = () => {
        console.log('log in')
        this.setState({loginWarningOpened: true})
    }

    renderStatus = () => {
        if(this.state.user != null){
            console.log()
        }
    }

    deleteProject = () => {
        alert('here')
    }

    closeInfo = () => {
        this.setState({accountInfo: false})
    }
    closeCriminal = () => {
        this.setState({criminal: false})
    }
    openCriminal = () =>{
        this.setState({criminal: true})
    }

    render(){

        return(
        <>
            <Dialog open={this.state.criminal} close={this.closeCriminal}>
                <DialogTitle style={{marginLeft: '110px', color: 'red'}}>
                    EXCUSE ME!!
                </DialogTitle>
                <DialogContent>
                    Stop trying to vandalize
                    other peoples property!!
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.closeCriminal} style={{color: 'red'}} fullWidth>PROMISE!</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={this.state.accountInfo} close={this.closeInfo}>
                <DialogTitle>
                    Account Information
                </DialogTitle>
                <DialogContent>
                    <Typography style={{textAlign: 'center'}}>{this.state.user? this.state.user.username : 'null'}</Typography>
                    <Typography style={{textAlign: 'center'}}>{this.state.user? this.state.user.email : 'null'}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.closeInfo}>Close</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={this.state.loginWarningOpened}>
                <DialogTitle>
                    <i class='fas fa-ban fa-7x' style={{color: 'red', marginLeft: '32px'}}/>
                </DialogTitle>
                <DialogContent>
                    <Typography variant='p' style={{alignText: 'center'}}>Please Login to gain access!</Typography>
                </DialogContent>
                <DialogActions>
                    <Button style={{marginRight: '80px'}}onClick={()=> this.setState({loginWarningOpened: false})}>Close</Button>
                </DialogActions>
            </Dialog>
            <div>
                <Header state={this.state} handleInfoOpen={this.handleInfoOpen} createUser={this.createUser} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
                <Grid container style={{flexGrow: 1, height: "1600px", width: "100%"}}>
                    <Grid item container style={{backgroundColor: "#262B3B", height: "46%"}}>
                        <LandArea state={this.state} userProjectsDenied={this.userProjectsDenied} handleNewProject={this.handleNewProject}/>
                    </Grid>
                    <Grid item container style={{backgroundColor: "#262B3B", height: ""}}>
                        <Index updateProjects={this.updateProjects}userProjectsDenied={this.userProjectsDenied} user={this.state.user} setProject={this.props.setProject} history={this.props.history} projects={this.state.allProjects} state={this.state} setUser={this.props.setUser} openCriminal={this.openCriminal}/>
                    </Grid>
                </Grid>
            </div>
        </>
    );
  }
}

export default HomePage;