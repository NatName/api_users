import React, { Component } from 'react';
import { BrowserRouter, Switch, Route }    from "react-router-dom";
import Users from './list/usersList.jsx'
import showUser from './show/userShow.jsx'
import Home  from './home/home.jsx'
import './App.scss';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={Users}/>
            <Route path='/user/:id' component={showUser}/>
          </Switch>
       </BrowserRouter>
      </>
    );
  }
}

export default App;
