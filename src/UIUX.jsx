import React from 'react'
import Lottie from 'react-lottie';
import animationData from './ui-ux.json'

export default function UIUX() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <Lottie options={defaultOptions} height={1000} width={1000} />
  )
}
