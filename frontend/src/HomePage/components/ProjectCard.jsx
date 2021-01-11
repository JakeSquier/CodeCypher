import React from 'react';
import {AppBar, Toolbar, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText, Card, CardContent, CardActionArea, CardMedia, CardActions} from '@material-ui/core';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { TabPanel } from '@material-ui/lab';

const ProjectCard = (props) => {

    return(
      <Card id={props.project.id}style={{height: '400px', width: '250px', marginLeft: '40px', marginRight: '40px', marginTop: '40px', boxShadow: '4'}}>
        <CardActionArea style={{height: '90%', width: '100%'}}>
        <Typography variant='h5' style={{textAlign: 'center', marginBottom: '15px', marginTop: '-50px'}}>{props.project.project_name}</Typography>
          <CardMedia style={{height: '50%'}}
            component="img"
            alt="Project pic"
            height="160"
            image="https://journocode.com/wp-content/uploads/2016/06/htmlCssJS-1140x515.jpg"
            title="project pic"
          />
          <CardContent>
            
            <Typography variant="pre" color="textSecondary" component="p">
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=>{
            props.setProject(props.project)
            props.setUser(props.state.user)
            props.history.push("/project")
          }}>
            Go!
          </Button>
          <Button size="small" color="primary" onClick={(e)=>{
            if(props.state.user === null){
              props.userProjectsDenied()
            }
            else if(props.state.user != null && props.project.user_id === props.state.user.id){
              props.deleteProject(props.project)
            }else{
              props.openCriminal()
            }
          }}>
            Delete
          </Button>
        </CardActions>
      </Card>
    )
}

export default ProjectCard;