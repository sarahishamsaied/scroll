import animationData from './react-animation.json'
import Lottie from 'react-lottie';
import React from 'react';

export default function ReactLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return <div>
      <h1 className='frontendTitle-mobile'>Frontend Development</h1>
      <h1 className='reactJs-mobile'>ReactJs</h1>
      <Lottie options={defaultOptions} className = "reactIcon" height={300} width={300} />
  </div> 
}

