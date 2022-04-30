import React, { Fragment, useEffect, useRef,useState} from 'react';
import {Controller,Scene} from 'react-scrollmagic'
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Sidebar from './Sidebar';
import Header from './Header';
//===================== Image URL ==================== 
const IMAGE_URL ='/frames54/Vid2';
const App = () => {
  let [counter,setCounter] = useState(1)
  let canvasRef = React.createRef();
  const [activeSections,setActiveSections] = useState({
    aboutUs:false,
    ourClients:false,
    portfolio:false
  })
  const html = document.documentElement;
  const frameCount = 714;
  const changeCounter = (e,section)=>{
    if(section === 1)
    {

      if(e.type === 'start')
      setCounter(1)
      if(e.type === 'leave' && e.scrollDirection === 'FORWARD')
      setCounter(2)
      if(e.type === 'end' && e.scrollDirection === 'REVERSE')
      setCounter(1)
    }
    else if(section === 2){

      if(e.type === 'start')
      setCounter(2)
      if(e.type === 'leave' && e.scrollDirection === 'REVERSE')
      setCounter(1)
    }
  }
  const scrollSpy = (counter)=>{
    if(counter === 1)
        setActiveSections({
        aboutUs:true,
        ourClients:false,
        portfolio:false
      })
      if(counter === 2)
      setActiveSections({
        aboutUs:false,
        ourClients:true,
        portfolio:false
      })
  }
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
  useEffect(()=>{
    scrollSpy(counter)
  },[counter])
  const currentFrame = (index) =>`${IMAGE_URL}${index.toString().padStart(4, '0')}.png`;

  return ( <Fragment>
            <Sidebar activeSections = {activeSections}/>
           <Header counter={counter}/>
            <canvas ref={canvasRef} id='globe' width={1920} height = {1080} />
            <div className='bigContainer'  >
            <Controller>
              <Scene pin duration={500}  >
                {(p,e)=>{
                   changeCounter(e,1)
                  return <div className='aboutUsContainer' id='aboutUsContainer' >
                  <h2 className='aboutUs' >We build custom <span className='specialBlue'>softwares</span>  to ensure your business's <span  className='specialBlue'>success</span></h2>
                  <div className='sectionOneFooter w-100 d-flex justify-content-around'>
                <h3>designing.</h3>
                <h3>building.</h3>
              </div>
                  </div>
                }}
              </Scene>
              <Scene pin duration={250} offset = {1700} reverse >
                {(p,e)=>{
                  changeCounter(e,2)
                  // tween()
                  
                  return <div className='checkOutContainer' id='checkOutContainer' >
                  <h2 className='checkOut specialBlue'  id='checkOut'>check out our latest work</h2>
                  </div>
                }}
              </Scene>
              <Scene pin duration={600} offset = {400} reverse>
                {(p,e)=>{
                  return <div className='fivesContainer'id='fivesContainer' >
                  <h2 className='fives'> <span className='pink'>fives</span>, California’s next NFT marketplace.</h2>
                  </div>
                }}

              </Scene>
              <Scene pin duration={1300}  offset = {100} reverse>
                  <div className='thineContainer'>
                  <h2 className='thine' > <span className='specialBlue'>Thine.co</span>,  Assessing lawyers all over the US at top legal firms.</h2>
                  </div>
              </Scene>
              <Scene pin duration={1000}  offset = {100} reverse>
                <div className='iubendaContainer'>
                <h2 className='iubenda' > <span className='pink'>Iubenda.com</span>, The world’s top compliance solutions company.</h2>
                </div>
                </Scene>
            </Controller>
          </div>
  </Fragment>
    
  );
};

export default App;