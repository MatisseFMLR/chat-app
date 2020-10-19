import React from 'react';
import './contact.css';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      online: false
    };
  }


render() {
  return (
    <div className='Contact'>
      <img className='avatar' src={this.props.avatar}/>
      <span>
        <h4 className='name'>{this.props.name}</h4>
        <div 
          className='status'
          onClick={event => {
            this.setState({ online: !this.state.online });
          }}   
        >
          <div className={this.state.online ? "status-online" : "status-offline"}></div>
          <p className='status-text'>{this.state.online ? "Online" : "Offline"}</p>
        </div>
      </span>
    </div>
  )
}
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  names: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Contact