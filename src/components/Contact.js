import React from 'react';
import './contact.css';
import PropTypes from 'prop-types';


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

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Contact