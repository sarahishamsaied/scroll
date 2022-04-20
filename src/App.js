import logo from './logo.svg';
import './App.css';
import { useEffect,useRef } from 'react';
import {Fragment} from 'react'
import video from '../src/Video1.mp4'

function App() {
  const videoRef = useRef(null);
  useEffect(()=>{
    console.log(videoRef.current)
    const playbackConst = 1300;
    window.addEventListener("scroll",(e)=>{
      console.log(window.scrollY)
      videoRef.current.currentTime = window.scrollY/playbackConst
      console.log(videoRef.current.currentTime)
    })
  });
  return <Fragment>
    <div>
      <video ref={videoRef} controls>
        <source src={video} type='video/mp4'>
        </source>
      </video>
    </div>
  </Fragment>
}

export default App;
