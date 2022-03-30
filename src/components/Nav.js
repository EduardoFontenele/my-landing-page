import React from 'react';

export default function Nav() {
  return (
    <nav>
      <a href="/">
        <img src={require('../assets/logo1.png')} alt="" />
      </a>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#About">About me</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
}
