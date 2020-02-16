import React from 'react';
import './Banner.css';
import CWlogo from '../../images/CWlogo.png'


const Banner = () => (
  <div className="banner text-center d-flex align-items-center justify-content-center">
    <img src={CWlogo} alt="Logo" />
    {/* <p className="text"></p> */}
  </div>
)


export default Banner;

