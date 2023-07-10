import React, { Component, Fragment, useEffect, useContext} from 'react';
import { useParams } from "react-router-dom";
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';

//NIE DZIAŁA POBRANIE LOGINU Z URL

const User = ({getUser, user, loading})=> {
    const { login } = useParams();

    
    useEffect(() => {
      getUser(login);
      
    }, []);
    

    const {name, avatar_url, location, bio, blog, html_url, company, followers, following, public_repos, public_gists, hireable} = user;
    if(loading){
      return <Spinner/>
    }else{
      return (
        <Fragment>
            <Link to='/' className='btn btn-light'>
              Back to search
            </Link>
            Hireable: {hireable ? <i class="fa-solid fa-check text-success"></i> : <i class="fa-solid fa-x text-danger"></i>}
            <div className="card grid-2">
              <div className="all-center">
                <img src={avatar_url} alt={name} className='round-img' style={{width: '150px'}} />
                <h1>{name}</h1>
                <p>location: {location}</p>
              </div>
              <div>
                {bio && <Fragment>
                    <h3>
                      Bio
                    </h3>
                    <p>
                      {bio}
                    </p>
                  </Fragment>}
                  <a href={html_url} className='btn btn-dark my-1'> Visit Github profile</a>
                  <ul>
                    <li>
                      {login && (
                        <Fragment>
                          <strong>Username: </strong> {login}
                        </Fragment>
                      )}
                    </li>

                    <li>
                      {company && (
                        <Fragment>
                          <strong>Company: </strong> {company}
                        </Fragment>
                      )}
                    </li>

                    <li>
                      {blog && (
                        <Fragment>
                          <strong>Website: </strong> {blog}
                        </Fragment>
                      )}
                    </li>
                  </ul>
              </div>
            </div>
            <div className='card text-center'>
              <div className='badge badge-primary'>Followers: {followers}</div>
              <div className='badge badge-success'>Following: {following}</div>
              <div className='badge badge-light'>Public Repos: {public_repos}</div>
              <div className='badge badge-dark'>Public Gists: {public_gists}</div>
            </div>
            
        </Fragment>
      )
    }

}

export default User