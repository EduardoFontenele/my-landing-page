import React from 'react';

export default function Header() {
  return (
    <header id="Header">
      <img src={require('../assets/logo2.png')} alt="" />
      <div>
        <h1>FontDev</h1>
        <p>Soluções em software</p>
      </div>
    </header>
  );
}
