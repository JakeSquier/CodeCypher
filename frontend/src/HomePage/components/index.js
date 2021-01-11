import React from 'react';
import { Button, Typography, Grid, AppBar, Toolbar, requirePropFactory} from '@material-ui/core';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { defaultProps, propTypes } from 'react-codemirror';
import ProjectCard from './ProjectCard';
import { TabPanel } from '@material-ui/lab';
import { render } from '@testing-library/react';

const Index = (props) => {

    const [selectedTab, setTab] = React.useState(1);

    const [selectedProjects, setProjects] = React.useState([])

    var projects = props.projects

    const indexStyles = makeStyles({
        root: {
            color: "white",
            position: "static",
            height: "46px",
            borderRadius: "8px",
            position: "static"
        }
    })

    const classes = indexStyles();

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    }

    const deleteProject = (project) => {
        const container = document.querySelector('.container')
        fetch(`http://localhost:3000/api/v1/projects/${project.id}`, {
            method: 'DELETE',
        })
        .then(res => res.json)
        .then(data => {
            projects = props.state.allProjects.filter(p => p.id != project.id)
            props.updateProjects(projects)
        })
    }

    const renderProjects = (projects) => {
        if(projects != 0){
            return(projects.map((project)=> <ProjectCard setProject={props.setProject} project={project} history={props.history} state={props.state} deleteProject={deleteProject} userProjectsDenied={props.userProjectsDenied} setUser={props.setUser} openCriminal={props.openCriminal}/>));
        }
        return (<Typography variant='h1'>You Have no Projects!</Typography>)
    }

    return(
            <Grid container style={{backgroundColor: "", marginRight: "20px", marginLeft: "20px", marginBottom: "20px", borderRadius: "20px", borderStyle: "solid", borderColor: "black", borderWidth: "5px"}} elevation={3}>
                <AppBar className={classes.root} >
                    <Tabs variant="fullWidth" value={selectedTab} onChange={handleTabChange}>
                        <Tab label="My Projects"onClick={()=>{
                            if(props.user === null ){
                                props.userProjectsDenied()
                                setTab(1)
                            }
                        }}/>
                        <Tab label="Community Projects"/>
                    </Tabs>
                </AppBar>
                <div style={{overflowX: 'hidden', overflowY: 'auto', padding: '20px', height: '850px'}}>
                    <Grid container className='container'>
                        {/* {projects.map((project)=> <ProjectCard setProject={props.setProject} project={project} history={props.history}/>)} */}
                        {selectedTab === 0 && props.state.allProjects.filter(project => project.user_id === props.user.id).map(project=><ProjectCard setProject={props.setProject} project={project} history={props.history} state={props.state} deleteProject={deleteProject} userProjectsDenied={props.userProjectsDenied} setUser={props.setUser} openCriminal={props.openCriminal}/>)}
                        {selectedTab === 1 && props.state.allProjects.map(project=> <ProjectCard setProject={props.setProject} project={project} history={props.history} state={props.state} deleteProject={deleteProject} userProjectsDenied={props.userProjectsDenied} setUser={props.setUser} openCriminal={props.openCriminal}/>)}
                    </Grid>
                </div>
            </Grid>
    );
}

export default Index;