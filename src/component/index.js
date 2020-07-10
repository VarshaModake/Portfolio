import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './App';
import '../index.css';
import Jokes from './Joke';
import Header from './Header';

ReactDOM.render(
<Router history={createBrowserHistory()}>
    <Switch >
        <Route exact path='/' render={()=><Header><App /></Header>}/>
        <Route path='/Joke' render={()=><Header><Jokes /></Header>}/>
        
    </Switch>
</Router>
,document.getElementById('root'));

