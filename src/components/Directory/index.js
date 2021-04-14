import React from 'react';
import Böcker from './../../assets/böcker.jpg';

import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${Böcker})`
          }}
        >
          <a>
            eHandel
          </a>
        </div>
    
      </div>
    </div>
  );
};

export default Directory;
