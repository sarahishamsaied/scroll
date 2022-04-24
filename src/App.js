import React, { Fragment, useEffect, useRef,useState } from 'react';
import {Controller,Scene} from 'react-scrollmagic'
import '../src/App.css'
import Navbar from './Navbar';
import logo from './scheddar.png';
import {Timeline, Tween} from 'react-gsap'
import 'jquery/dist/jquery'
import 'bootstrap/dist/css/bootstrap.min.css' 

const IMAGE_URL ='/frames2/Vid5';
const App = () => {
  let [counter,setCounter] = useState(1)
  let canvasRef = React.createRef();
  const html = document.documentElement;
  const frameCount = 714;
  const section1 = useRef(null)
  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const initialFrameSetup = (img, ctx) => {
    img.src = currentFrame(1);
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
  };
  const updateImage = (index, img, ctx) => {
    img.src = currentFrame(index);
    ctx.drawImage(img, 0, 0);
  };

  const onScroll = (img, ctx) => {
    window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );
      requestAnimationFrame(() => updateImage(frameIndex + 1, img, ctx));
    });
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    initialFrameSetup(img, ctx);
    preloadImages();
    onScroll(img, ctx);
  }, []);

  const currentFrame = (index) =>`${IMAGE_URL}${index.toString().padStart(4, '0')}.png`;

  return ( <Fragment>
          <section>
            <div className='uppderheader'>
              <div className='logo'>
              <img src={logo} alt = "logo" className='logoImg'/>
              </div>
              <div className='counter'>
                <h1>{counter}/03</h1>
              </div>
              <div className='contactUs'>
                  <h1>contact us</h1>
              </div>
            </div>
            <canvas ref={canvasRef} id='globe' width={1920} height = {1080} />
          <Navbar  />
          <div className='bigContainer'>
            <Controller>
              <Scene pin duration={500}  >
                {(p,e)=>{
                   if(e.type === 'start')
                   setCounter(1)
                   if(e.type === 'leave' && e.scrollDirection === 'FORWARD')
                   setCounter(2)
                   if(e.type === 'end' && e.scrollDirection === 'REVERSE')
                   setCounter(1)
                  return <div className='sec1Container' ref={section1}>
                  <h2 className='section1Text' >We build custom <span className='specialBlue'>softwares</span>  to ensure your business's <span  className='specialBlue'>success</span></h2>
                  </div>
                }}

              </Scene>
              <Scene pin duration={500} offset = {100} >
                {(p,e)=>{
                  if(e.type === 'start')
                  setCounter(2)
                  if(e.type === 'leave' && e.scrollDirection === 'REVERSE')
                  setCounter(1)
                  return <div className='sec2Container'>
                  <h2 className='section2Text specialBlue'  id='section2Text'>check out our latest work</h2>
                  </div>
                }}

              </Scene>
              <Scene pin duration={500} offset = {100}>
                <Timeline target={
                   <div className='sec3Container'>
                   <h2 className='section2Text' > <span className='pink'>fives</span> , California’s next NFT marketplace.</h2>
                   </div>}>
                  <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={.5} />
               
                </Timeline>

              </Scene>
              <Scene pin duration={1300}  offset = {100}>
                  <div>
                  <h2 className='section3Text'id='section4Text' > <span className='specialBlue'>Thine.co</span>,  Assessing lawyers all over the US at top legal firms.</h2>
                  </div>
              </Scene>
              <Scene pin duration={1000}  offset = {100}>
                  <div>
                  <h2 className='section4Text' > <span className='pink'>Iubenda.com</span>, The world’s top compliance solutions company.</h2>
                  </div>
                </Scene>
            </Controller>
            <div className='extraDiv'>
                  <h1>HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII</h1>
            </div>
          </div>
          </section>

  </Fragment>
    
  );
};

export default App;