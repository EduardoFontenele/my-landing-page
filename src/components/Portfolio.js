import React from 'react';
import PropTypes from 'prop-types';

export default function Portfolio({ animationState }) {
  return (
    <div className="portfolio hidden" id="Portfolio" data-animate={animationState}>
      <h1>Portfolio</h1>
      <p>
        Some projects of mine. You can check my GitHub profile at https://github.com/EduardoFontenele
      </p>
      <div className="portfolio-images">
        <div className="flex-images">

          <a href="https://github.com/EduardoFontenele/Construction-Company-Landing-page" target="_blank" rel="noreferrer">
            <img src={require('../assets/constructionCompany.png')} alt="" />
          </a>
          <h2>Landing page</h2>
        </div>

        <div className="flex-images">
          <a href="https://github.com/EduardoFontenele/Task-list-with-React" target="_blank" rel="noreferrer">
            <img src={require('../assets/taskListReact.png')} alt="" />
          </a>
          <h2>To-do-list app with React</h2>
        </div>

        <div className="flex-images">
          <a href="https://github.com/EduardoFontenele/TechApp-Landing-Page" target="_blank" rel="noreferrer">
            <img src={require('../assets/orbitapp.png')} alt="" />
          </a>
          <h2>Landing page</h2>
        </div>

      </div>
    </div>
  );
}

Portfolio.propTypes = {
  animationState: PropTypes.string,
};

Portfolio.defaultProps = {
  animationState: '',
};
