import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className='Contact'>
      <img className='avatar' src='https://randomuser.me/api/portraits/men/50.jpg'/>
      <span>
        <h4 className='name'>Duane Gutierrez</h4>
        <div className='status'>
          <div className='status-online'></div>
          <p className='status-text'>Online</p>
        </div>
      </span>
    </div>
  )
}

export default Contact