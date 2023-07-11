import React, {useState} from 'react';

const Search = ({searchUsers, setAlert, clearUsers, showClear}) => {
    const [text, setText] = useState('')


  const onChange = e => setText(e.target.value)
    
  const onSubmit = e =>{
        e.preventDefault();
        if(text === ''){
          setAlert('please fill fieald', 'light')
          return
        }
        searchUsers(text);
        setText('')
    }

    return (
      <div>
        <form onSubmit={onSubmit} className="form"> 
            <input type="text" name="text" placeholder="Search users..." value={text} onChange={onChange}></input>
            <input type='submit' content='Search' className='btn btn-dark btn-block'></input>
        </form>
        {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
        
      </div>
    )
}

export default Search