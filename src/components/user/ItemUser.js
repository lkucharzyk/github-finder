import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ItemUser = ({user : {login, avatar_url, html_url}}) =>{

  return (
    <div className='card text-center'>
      <img src = {avatar_url} className='round-img' style={{width: '60px' }}></img>
      <h3>{login}</h3>
      <div>
          <a className='btn btn-dark btn-sm my-1' href={html_url}>More</a>
      </div>
    </div>
  )
}

ItemUser.propTypes = {
  user: PropTypes.object.isRequired
}

export default ItemUser