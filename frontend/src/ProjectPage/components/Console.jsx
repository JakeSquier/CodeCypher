import React from 'react';
import { Button, Typography, Grid} from '@material-ui/core';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {UnControlled as CodeMirror} from 'react-codemirror2'
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import { transform } from "@babel/core";

const Console = props => {

    const test = `
    class TransformExample extends React.Component {

    boop = () => {
        console.log('boop')
    }

    render() {
        return (
        <center>
            <button onClick={this.boop}><h3>Boop!</h3></button>
        </ceçnter>
        )
    }
    }
    `;
    return(
        <div></div>
    );

}

export default Console;