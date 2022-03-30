import React from 'react';
import PropTypes from 'prop-types';

export default function About({ animationState }) {
  return (
    <session className="about-me hidden" id="About" data-animate={animationState}>
      <div className="description">
        <h1>About me</h1>
        <p>
          I started my professional life as a freelance graphic designer after taking a two-year course, in parallel I studied Chemistry Technician at a
          federal institution, and worked as a trainee technician in the geochemistry laboratory at the Universidade Federal Fluminense (UFF), in Niterói.
          But after completing my studies, I realized in technology an old passion, since I was a child I was fascinated by computers and games, so I decided to completely
          turn my life around and focus on the area of software development. I am looking for a first opportunity to evolve professionally, mainly in the area of web development,
          where the passion for technology meets the passion for design. I am fully committed to the commitments I sign and I try to be learning at any time.
        </p>
      </div>

      <div className="social-media-links">
        <a href="https://github.com/EduardoFontenele?tab=repositories" target="_blank" rel="noreferrer">
          <img src={require('../assets/githublogo.png')} alt="" />
        </a>

        <a href="https://www.linkedin.com/in/eduardo-fontenele-755a17230/" target="_blank" rel="noreferrer">
          <img src={require('../assets/linkedinlogo.png')} alt="" />
        </a>

        <a href="https://www.behance.net/EduFonten" target="_blank" rel="noreferrer">
          <img src={require('../assets/behancelogo.png')} alt="" />
        </a>
      </div>

    </session>
  );
}

About.propTypes = {
  animationState: PropTypes.string,
};

About.defaultProps = {
  animationState: '',
};
