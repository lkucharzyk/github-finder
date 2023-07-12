import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext)
  const {alert} = alertContext
  return (
    alert !== null && 
        <div className={`alert alert-${alert.type}`}>
            <i class="fa-solid fa-circle-info"></i>{alert.msg}
        </div>
  )
}
export default Alert