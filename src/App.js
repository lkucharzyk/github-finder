import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/user/Users';
import User from './components/user/User';
import axios from 'axios';
import Alert from './components/layouts/Alert';
import Search from './components/user/Search';
import About from './components/pages/About';


const App = ()=>{

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

 const searchUsers = async text =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUsers(res.data.items);
    setLoading(false);
  }

  const  getUser = async username =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setUser(res.data);
    setLoading(false);
  }

  const getUserRepos = async username =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    setRepos(res.data);
    setLoading(false);
  }

  const clearUsers = ()=>{
    this.setUsers([]);
  }

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
      <Router>
        <div className='App'>
          <Navbar title="Github Finder" icon ="fa-brands fab fa-github"/>
          <div className="container">
            <Alert alert={alert} />
            <Routes>
              <Route exact path ='/' element={
                <Fragment>
                  <Search searchUsers={searchUsers} setAlert={showAlert} clearUsers={clearUsers} showClear={users.length > 0 ? true : false}/>
                  <Users loading = {loading} users={users}/>
                </Fragment>
              }/>
             <Route exact path='/user/:login' element={
                <User  getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading}/>  
              }/>
              <Route exact path='/about/' element={
                <About/>
              }/>
            </Routes>
          </div>
        </div>
    </Router>
    )
  
}

export default App;
