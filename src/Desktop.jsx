import React, { Fragment, useEffect,useState} from 'react';
import {Controller,Scene} from 'react-scrollmagic'
import '../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Sidebar from './Sidebar';
import Header from './Header';
import Lottie from 'react-lottie';
import nodeJsLogo from './nodeJsLogo.svg'
import animationData2 from './react-animation.json'
import animationData from './ui-ux.json'
import * as FiIcons from 'react-icons/fi'
import * as AiIcons from 'react-icons/ai'
import * as SiIcons from 'react-icons/si'
//===================== Image URL ==================== 
const IMAGE_URL ='/frames45/Vid1';
const Desktop = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  let [counter,setCounter] = useState(1)
  let canvasRef = React.createRef();
  const [activeSections,setActiveSections] = useState({
    aboutUs:false,
    ourClients:false,
    portfolio:false
  })
  const html = document.documentElement;
  const frameCount = 741;
  const changeCounter = (e,section)=>{
    if(section === 1)
    {
      if(e.type === 'start'|| e === 'init')
        setCounter(1)
      if( e.scrollDirection === 'FORWARD')
        setCounter(2)
      if(e.scrollDirection === 'REVERSE' || e.scrollDirection === 'PAUSED')
        setCounter(1)
    }
     if(section === 2){
      if(e.type === 'start')
      setCounter(2)
      if(e.type === 'leave' && e.scrollDirection === 'REVERSE')
      setCounter(1)
      if(e.type === 'end' && e.scrollDirection === 'REVERSE')
      setCounter(1)
    }
     if(section === 3){
      
      if(e.type === 'start')
      setCounter(3)
      if(e.type === 'leave' && e.scrollDirection === 'REVERSE')
      setCounter(2)
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
      if(counter === 3)
      setActiveSections({
        aboutUs:false,
        ourClients:false,
        portfolio:true
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
              <Scene  duration={450}  offset={50} >
                {(p,e)=>{
                  changeCounter(e,2)                  
                  return <div className='checkOutContainer' id='checkOutContainer' >
                  <h2 className='checkOut specialBlue'  id='checkOut'>check out our latest work</h2>
                  </div>
                }}
              </Scene>
              <Scene pin duration={1800} offset = {50} reverse>
                {(p,e)=>{
                  return <div className='fivesContainer'id='fivesContainer' >
                  <h2 className='fives'> <span className='pink'>fives</span>, California’s next NFT marketplace.</h2>
                  </div>
                }}

              </Scene>
              <Scene pin duration={1450}  offset = {100} reverse>
                  <div className='thineContainer'>
                  <h2 className='thine' > <span className='specialBlue'>Thine.co</span>,  Assessing lawyers all over the US at top legal firms.</h2>
                  </div>
              </Scene>
              <Scene pin duration={1800}  offset = {0} >
                <div className='iubendaContainer' id='iubendaContainer'>
                <h2 className='iubenda' > <span className='pink'>Iubenda.com</span>, The world’s top compliance solutions company.</h2>
                </div>
                </Scene>
                <Scene>
                <h1 className='ourServices' id='ourServices'>Our Services</h1>
                </Scene>
                <Scene>
                  {(p,e)=>{
                    changeCounter(e,3);
                    return <div className='UIUX'>
                        <Lottie options={defaultOptions} height={1000} width={1000} className = "ui-ux-icon"/>
                        <div className='UX-softwares'>
                    <h1 className='figma '> <FiIcons.FiFigma className='#000'/> Figma</h1>
                    <h1 className='adobeXD'> <SiIcons.SiAdobexd color='#430134'/> Adobe XD</h1>
                    <h1 className = "sketch"> <AiIcons.AiOutlineSketch color='#FDAF00'/> Sketch</h1>
                    </div>
                  </div>
                  }}
                </Scene>
                <Scene>
                  <div className = "frontendDevelopmentContainer">
                    <h1 className='specialBlue frontendTitle'>Frontend Development</h1>
                    <div className='reactJsContainer'>
                      <h2>ReactJs</h2>
                      <Lottie options={defaultOptions2} className = "reactIcon" height={300} width={300} />
                    </div>
                  </div>
                </Scene>
                <Scene>
                <div className = "backendContainer">
                    <h1 className='specialBlue backendTitle'>Backend Development</h1>
                    <div className='reactJsContainer'>
                      <h2>NodeJs</h2>
                      <img src={nodeJsLogo} alt = 'nodeJs Logo '/>
                    </div>
                  </div>
                </Scene>
            </Controller>
          </div>
  </Fragment>
    
  );
};

export default Desktop;