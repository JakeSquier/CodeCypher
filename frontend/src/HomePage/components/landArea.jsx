import React from 'react';
import { Button, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import NewProjectBtn from './newProjectBtn'

const LandArea = props => {

    return(
        <Grid item>
            <NewProjectBtn style={{marginTop: "0px"}} state={props.state} userProjectsDenied={props.userProjectsDenied} handleNewProject={props.handleNewProject}/>
        </Grid>
    );
}

export default LandArea;