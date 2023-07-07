import React, {Fragment, Component} from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/user/Users';

class App extends Component{
  render(){
    return  (
    <div className='App'>
      <Navbar title="Github Finder" icon ="fa-brands fab fa-github"/>
      <div className="container">
        <Users/>
      </div>
    </div>
    )
  }
}

export default App;
