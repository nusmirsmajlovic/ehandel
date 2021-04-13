import React from 'react';
import Böcker from './../../assets/böcker.jpg';
import Kurser from './../../assets/kurser2.jpg';
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
            Shop Böcker
          </a>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${Kurser})`
          }}
        >
          <a>
            Shop Kurser
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
