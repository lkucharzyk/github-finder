import React, {Fragment, Component} from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/user/Users';
import User from './components/user/User';
import axios from 'axios';
import Alert from './components/layouts/Alert';
import Search from './components/user/Search';
import About from './components/pages/About';


class App extends Component{
  state ={
    users: [],
    user: {},
    repos: [],
    loading : false,
    alert: null
  }

//  async componentDidMount(){
//     this.setState({loading: true})
//     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
//     this.setState({users: res.data, loading:false })
//   }

  searchUsers = async text =>{
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading:false })
  }

  getUser = async username =>{
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user: res.data, loading:false })
  }

  getUserRepos = async username =>{
    this.setState({loading: true});
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({repos: res.data, loading:false })
  }

  clearUsers = ()=>{
    this.setState({users: []})
  }

  setAlert = (msg, type) =>{
    this.setState({alert:{
      msg,
      type
    }})
    setTimeout(() => {
      this.setState({alert:null})
    }, 1000);
  }

  render(){
    const {users, user, repos, loading} = this.state;
    
    return(
      <Router>
        <div className='App'>
          <Navbar title="Github Finder" icon ="fa-brands fab fa-github"/>
          <div className="container">
            <Alert alert={this.state.alert} />
            <Routes>
              <Route exact path ='/' element={
                <Fragment>
                  <Search searchUsers={this.searchUsers} setAlert={this.setAlert} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false}/>
                  <Users loading = {loading} users={users}/>
                </Fragment>
              }/>
             <Route exact path='/user/:login' element={
                <User  getUser={this.getUser} getUserRepos={this.getUserRepos} repos={repos} user={user} loading={loading}/>  
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
}

export default App;
