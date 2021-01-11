import React from 'react';
import { Button, Typography, Grid, Paper} from '@material-ui/core';
import { makeStyles, ThemeProvider} from '@material-ui/core/styles';
import ProjectArea from './components/ProjectArea'
import './css/project.css';


class ProjectPage extends React.Component {

    render(){
        return(
            <div>
                <ProjectArea project={this.props.project} user={this.props.user} history={this.props.history}/>
            </div>
        );
    }
}

export default ProjectPage;

{/* <div>
<Grid container style={{backgroundColor: 'powderblue'}}>  
    <Grid item container container style={{backgroundColor: 'powderblue', height: '63px'}}>
            <Header />
    </Grid>
</Grid>
<Grid container style={{backgroundColor: 'grey', height: '730px'}}>
        <Grid container style={{backgroundColor: 'pink', height: '99.99%', width: '33.33%'}}>
            <h1>first</h1>
        </Grid>
        <div style={{backgroundColor: 'purple', height: '99.99%', width: '33.33%'}}>
            <Editor state={this.state} onEditorChange={this.onEditorChange} onRun={this.onRun}/>
        </div>
        <Grid container style={{backgroundColor: 'powderblue', height: '99.99%', width: '33.33%'}}>
            <Console />
        </Grid>
</Grid>
</div> */}