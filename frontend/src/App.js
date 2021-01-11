
import { Home } from '@material-ui/icons';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import history from './history';
import HomePage from './/HomePage/HomePage'
import ProjectPage from './ProjectPage/ProjectPage'

function App() {

  const[project, setProject] = useState({})
  const[user, setUser] = useState({})



  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={(props) => <HomePage setUser={setUser} user={user} setProject={setProject} {...props}/>}/>
        <Route exact path="/project" component={(props) => <ProjectPage user={user} project={project} {...props}/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
