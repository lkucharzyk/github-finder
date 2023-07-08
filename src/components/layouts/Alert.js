import React from 'react'

const Alert = ({alert}) => {
  return (
    alert !== null && 
        <div className={`alet alert-${alert.type}`}>
            <i class="fa-solid fa-circle-info"></i>{alert.msg}
        </div>
  )
}
export default Alert