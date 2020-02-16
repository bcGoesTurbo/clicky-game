import React, { Component } from 'react';
import './Banner.css';
import CWlogo from '../../images/CWlogo.png'


const Banner = () => (
  <div className="banner text-center d-flex align-items-center justify-content-center">
    <img src={CWlogo} alt="Logo" />
  </div>
)


export default Banner;

