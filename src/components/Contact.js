import React from 'react';
import './contact.css';

const name = "Duane Gutierrez";
const avatar = "https://randomuser.me/api/portraits/men/50.jpg";
const isOnline = false;
const onlineTrigger = isOnline ? "status-online" : "status-offline";
const onlineStatus = isOnline ? "Online" : "Offline";

function Contact() {
  return (
    <div className='Contact'>
      <img className='avatar' src={avatar}/>
      <span>
        <h4 className='name'>{name}</h4>
        <div className='status'>
          <div className={onlineTrigger}></div>
          <p className='status-text'>{onlineStatus}</p>
        </div>
      </span>
    </div>
  )
}

export default Contact