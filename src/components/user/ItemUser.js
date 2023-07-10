import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemUser = ({user : {login, avatar_url, html_url}}) =>{

  return (
    <div className='card text-center'>
      <img src = {avatar_url} className='round-img' style={{width: '60px' }}></img>
      <h3>{login}</h3>
      <div>
      <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>More</Link>
      </div>
    </div>
  )
}

ItemUser.propTypes = {
  user: PropTypes.object.isRequired
}

export default ItemUser