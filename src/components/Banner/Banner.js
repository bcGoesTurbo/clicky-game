import React from 'react';
import './Banner.css';



// Import the necessary styles, or include them another way with your build process
import 'react-star-wars-crawl/lib/index.css'

const Banner = () => (
  <div className="banner"> 
  <div class="starwars-demo"/>
    <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" class="star"/>
    <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" class="wars"/>
    <h2 class="byline" id="byline">The Clicky Game Awakens</h2>
</div>
)

export default Banner;
