import React, {useContext, useState} from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('')

  const onChange = e => setText(e.target.value)
    
  const onSubmit = e =>{
        e.preventDefault();
        if(text === ''){
          alertContext.setAlert('please fill fieald', 'light')
          return
        }
        githubContext.searchUsers(text);
        setText('')
    }

    return (
      <div>
        <form onSubmit={onSubmit} className="form"> 
            <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange}></input>
            <input type='submit' content='Search' className='btn btn-dark btn-block'></input>
        </form>
        {githubContext.users.length > 0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
        
      </div>
    )
}

export default Search