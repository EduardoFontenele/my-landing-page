import React from 'react';
import PropTypes from 'prop-types';

export default function Contact({ animationState }) {
  return (
    <div className="contact hidden" data-animate={animationState} id="Contact">
      <h1>Contact</h1>
      <p>You can get in contact with me via Whatsapp or email me on the links below:</p>

      <h3>Whatsapp</h3>
      <a href="https://wa.me/+5521985149506" target="_blank" rel="noreferrer" className="contact">
        <img src={require('../assets/wppicon.png')} alt="" />
        <p>+5521985149506</p>
      </a>

      <h3>Email</h3>
      <a href="mailto:eduardofontedev@gmail.com" target="_blank" rel="noreferrer">
        <img src={require('../assets/email-icon.png')} alt="" />
        <p>eduardofontedev@gmail.com</p>
      </a>

    </div>
  );
}

Contact.propTypes = {
  animationState: PropTypes.string,
};
Contact.defaultProps = {
  animationState: '',
};
