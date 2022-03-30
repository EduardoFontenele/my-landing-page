import React from 'react';

import '../css/App.css';
import Nav from './Nav';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

export default class Main extends React.Component {
  state = {
    animationState: '',
  };

  render() {
    const { animationState } = this.state;

    return (
      <>
        <Nav />
        <Header />
        <About
          data-animate={animationState}
        />
        <Portfolio
          data-animate={animationState}
        />
        <Contact
          data-animate={animationState}
        />
        <Footer />
      </>
    );
  }
}
