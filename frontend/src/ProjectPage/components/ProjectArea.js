import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import useLocalStorage from './hooks/useLocalStorage'
import Savebtn from './SaveBtn'
import { AppBar, Toolbar, Button, Typography, Grid, Paper, Dialog, DialogTitle, DialogContent, TextField, DialogActions, DialogContentText} from '@material-ui/core';

function ProjectArea(props) {
  const [html, setHtml] = useState(props.project.html)
  const [css, setCss] = useState(props.project.css)
  const [js, setJs] = useState(props.project.javascript)
  const [srcDoc, setSrcDoc] = useState('')
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState(props.project.project_name)


  

  const handleClickOpen = () => {
    console.log(props)
    if(props.user != null){
      if(props.user.id === props.project.user_id){
        setOpen(true)
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleSave = event => {
      setOpen(false);
      const project = {
        project_name: title,
        html: html,
        css: css,
        javascript: js,
        theme: 'dark'
      }
      console.log(project)
      fetch(`http://localhost:3000/api/v1/projects/${props.project.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(project)
  
    })
    .then(res => res.json())
    .then(console.log)
  }

  const returnHome = () => {
    if(props.user != null){
        if(props.user.id === props.project.user_id){
            handleSave()
        }
    }
    props.history.push("/")
  }

  useEffect(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
  })

  return (
    <div style={{border: '5px', borderColor: 'hsl(225, 6%, 25%)', borderStyle: 'solid', backgroundColor: "hsl(225, 6%, 25%)"}}>
     <Button className='a' style={{marginLeft: '1267px'}} onClick={returnHome}>Go Home</Button>
     <Button 
      fullWidth
      style={{backgroundColor: "hsl(225, 6%, 25%)", borderRadius: "0px", color: "powderblue", marginTop: '4px'}}
      variant="outlined"
      onClick={handleClickOpen}>
          Save
      </Button>
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle id="save-form">Save Project</DialogTitle>
          <DialogContent>
          <DialogContentText>
            Please provide a Project Name
            so we can save your terrible code.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="projectName"
            label="Project Name here..."
            type="email"
            onChange={handleTitle}
            fullWidth
            />
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cry
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane" style={{backgroundColor: 'white'}}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}

export default ProjectArea;