import React, { useContext } from 'react';
import ItemUser from './ItemUser';
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users= () => {
  const githubContext = useContext(GithubContext);
  const {loading, users} = githubContext

    if(loading){
      return <Spinner/>
    }else{
      return (
        <div style={userStyle}>
          {users.map(user =>(
              <ItemUser key={user.id} user = {user}/>
          ))}
        </div>
      )
    }
 
}


const userStyle ={
  display: 'grid',
  gridTemplateColumns :' repeat(3, 1fr)',
  gridGap: '1rem'

}

export default Users