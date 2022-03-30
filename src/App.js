import React from 'react';
import './css/App.css';
import Main from './components/Main';

function App() {
  function animateScroll() {
    const element = document.querySelectorAll('.hidden');
    const windowTop = window.pageYOffset + (window.innerHeight * 0.80);

    element.forEach((div) => {
      if ((windowTop) > div.offsetTop) {
        div.classList.add('animate');
        div.classList.remove('hidden');
      }
    });
  }

  window.addEventListener('scroll', () => {
    animateScroll();
  });

  return (
    <Main />
  );
}

export default App;
