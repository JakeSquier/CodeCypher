import React from 'react';
import { Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { propTypes } from 'react-codemirror';

const NewProjectBtn = (props) => {
    const buttonStyles = makeStyles({
        root: {
            backgroundColor: "blue",
            marginTop: "100px"
        }
    })

    const classes = buttonStyles();

    return(
        <div>
            <Button className={classes.root} style={{marginTop: "300px", marginLeft: "650px" }} onClick={() => {
                if(props.state.user != null){
                    props.handleNewProject()
                    return 0;
                }else{props.userProjectsDenied()}
            }}>newProject</Button>
        </div>
    );
}

export default NewProjectBtn;
