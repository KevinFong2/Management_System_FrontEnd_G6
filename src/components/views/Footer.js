// Footer.js

import React from 'react';
import '../../css/Footer.css';

const Footer = () => {
  return (
    <footer className="mt-auto py-5 bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Project Repo</h5>
            <ul>
              <li><a target="_blank" href="https://github.com/KevinFong2/Management_System_FrontEnd_G6" className="text-light">Go to frontend repo</a></li>
              <li><a target="_blank" href="https://github.com/KevinFong2/Management_System_BackEnd_G6" className="text-light">Go to backend repo</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Our Creators</h5>
            <ul>
              <li>Jun - <a target="_blank" href="#" className="text-light">GitHub</a></li>
              <li>Kevin - <a target="_blank" href="#" className="text-light">GitHub</a></li>
              <li>Noman - <a target="_blank" href="#" className="text-light">GitHub</a></li>
              <li>Yicheng - <a target="_blank" href="#" className="text-light">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
