import React from 'react';
import './contact.css';


function Contact(props) {
  return (
    <div className='Contact'>
      <img className='avatar' src={props.avatar}/>
      <span>
        <h4 className='name'>{props.name}</h4>
        <div className='status'>
          <div className={props.isOnline ? "status-online" : "status-offline"}></div>
          <p className='status-text'>{props.isOnline ? "Online" : "Offline"}</p>
        </div>
      </span>
    </div>
  )
}

export default Contact