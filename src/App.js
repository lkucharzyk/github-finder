import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/user/Users';
import User from './components/user/User';
import Alert from './components/layouts/Alert';
import Search from './components/user/Search';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';


const App = ()=>{
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) =>{
    setAlert({
      msg,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

    return(
      <GithubState>
        <Router>
          <div className='App'>
            <Navbar title="Github Finder" icon ="fa-brands fab fa-github"/>
            <div className="container">
              <Alert alert={alert} />
              <Routes>
                <Route exact path ='/' element={
                  <Fragment>
                    <Search setAlert={showAlert}/>
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
    </GithubState>
    )
  
}

export default App;
