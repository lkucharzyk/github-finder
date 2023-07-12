import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/user/Users';
import User from './components/user/User';
import Alert from './components/layouts/Alert';
import Search from './components/user/Search';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';


const App = ()=>{
    return(
      <GithubState>
        <AlertState>
          <Router>
            <div className='App'>
              <Navbar title="Github Finder" icon ="fa-brands fab fa-github"/>
              <div className="container">
                <Alert/>
                <Routes>
                  <Route exact path ='/' element={
                    <Fragment>
                      <Search/>
                      <Users/>
                    </Fragment>
                  }/>
                <Route exact path='/user/:login' element={
                    <User/>  
                  }/>
                  <Route exact path='/about/' element={
                    <About/>
                  }/>
                </Routes>
              </div>
            </div>
        </Router>
      </AlertState>
    </GithubState>
    )
  
}

export default App;
