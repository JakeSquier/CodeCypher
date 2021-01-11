import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from './hooks/useLocalStorage'
import { AppBar, Toolbar, Button, Typography, Grid, Paper, Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText} from '@material-ui/core';

const SaveBtn = (props) => {

    return(
        <Button 
        fullWidth
        style={{backgroundColor: "hsl(225, 6%, 25%)", borderRadius: "0px", color: "powderblue", marginTop: '4px'}}
        variant="outlined"
        onClick={props.handleClickOpen}>
            Save
        </Button>
    );
}
export default SaveBtn;