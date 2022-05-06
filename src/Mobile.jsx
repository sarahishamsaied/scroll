import React, { Fragment,useEffect } from 'react'
import './Mobile.css';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import UIUX from './UIUX'
import { FadeIn, ScrollContainer,ScrollPage,Sticky,MoveOut,batch,Fade,Animator,ZoomIn,StickyIn , MoveIn, ZoomOut} from 'react-scroll-motion'
import ReactLottie from './ReactLottie';
import NodeJs from './NodeJs';
import fivesImg from './fives-globe.png'
import thineLogo from './thine-globe.png'
import iubendaImg from './iubenda-globe.png'
export default function Mobile() {

    useEffect(()=>{
   
       
    },[])
  return <Fragment>
      <div className='container'>
      <ScrollContainer>
  <ScrollPage page={0}>
    <Animator animation={batch(Sticky(), MoveOut(0, -900))}>
      <h1  className='aboutUs-mobile'>we build custom  <span className='specialBlue'>softwares</span> </h1>
    </Animator>
  </ScrollPage>
  <ScrollPage page={1}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -900))}>
      <h1  className='aboutUs-mobile' > to ensure your business's <span className='specialBlue'>success</span> </h1>
    </Animator>
  </ScrollPage>
  <ScrollPage page={3}>
    <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
      <h1 className='checkOut-mobile' >Checkout our latest work!</h1>
    </Animator>
  </ScrollPage>
  {/* {   */}

  <ScrollPage page={4}>
    <Animator animation={batch(Fade(),Sticky(), MoveIn(0, -900),)}>
    <h1 className='fivesMobileTitle' ><span className='pink'>fives</span></h1>
    </Animator>
  </ScrollPage>
  <ScrollPage page={5}>
    <Animator animation={batch(Sticky(),MoveIn(0, -1000),)}>
        <div  className='fivesContainer-mobile'>
          <div className="textContainer">
          <h1 className='pink fives-mobile'>fives</h1>
        <h1 className='fives-mobile'>California’s next NFT marketplace</h1>
          </div>
        <img src={fivesImg} alt="" className='fivesGlobe'/>
        </div>
    </Animator>
  </ScrollPage>
  {/* {,  Assessing lawyers all over the US at top legal firms.} */}
  <ScrollPage page={6}>
    <Animator animation={batch(Sticky(), MoveIn(0, -900))}>
        <div className='thineContainer-mobile'>
        <h2 className='thineMobileTitle specialBlue' >Thine.co</h2>
        </div>
    </Animator>
  </ScrollPage>
  <ScrollPage page={7}>
    <Animator animation={batch(Sticky(), MoveIn(0, -900))}>
        <div className='thineContainer-mobile'>
          <div>
          <h2 className='thine-mobile' > <span className='specialBlue'>Thine.co</span></h2>
        <h2 className='thine-mobile' >Assessing lawyers all over the US at top legal firms.</h2>
          </div>
        <img src={thineLogo} alt="" />
        </div>
    </Animator>
  </ScrollPage>
  {/* {, The world’s top compliance solutions company.} */}
  <ScrollPage page={8}>
    <Animator animation={batch(Sticky(), MoveIn(0, -900))}>
    <div className='iubendaContainer-mobile' id='iubendaContainer'>
      <h2 className='iubendaMobileTitle pink' > Iubenda.com</h2>
                </div>
    </Animator>
  </ScrollPage>
  <ScrollPage page={9}>
    <Animator animation={batch( Sticky(), MoveIn(0, -900))}>
    <div className='iubendaContainer-mobile' id='iubendaContainer'>
      <div className='textContainer'>
      <h2 className='pink'>Iubenda.com</h2>
    <h2 className='iubenda-mobile' >The world’s top compliance solutions company. </h2>
      </div>
    <img src={iubendaImg} alt="" />

    </div>
    </Animator>
  </ScrollPage>
  <ScrollPage page={10}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -900))}>
    <div className='iubendaContainer-mobile' id='iubendaContainer'>
                </div>
    </Animator>
  </ScrollPage>
  <ScrollPage page={11}>
  <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn(),ZoomOut())}>
      <h1 className='checkOut-mobile' >Our Services</h1>
    </Animator>
  </ScrollPage>
  <ScrollPage page={12}>
  <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -900))}>
      <UIUX/>
    </Animator>
  </ScrollPage>
  <ScrollPage page={13}>
  <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -900))}>
                    <h1 className='figma ux-softwares-mobile'> <FiIcons.FiFigma className='#000'/> Figma</h1>
                    {/* <h1 className='adobeXD'> <SiIcons.SiAdobexd color='#430134'/> Adobe XD</h1>
                    <h1 className = "sketch"> <AiIcons.AiOutlineSketch color='#FDAF00'/> Sketch</h1> */}
    </Animator>
  </ScrollPage>
  <ScrollPage page={14}>
  <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -900))}>
  <h1 className='adobeXD ux-softwares-mobile'> <SiIcons.SiAdobexd color='#430134'/> Adobe XD</h1>
    </Animator>
  </ScrollPage>
  <ScrollPage page={15}>
  <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -900))}>
  <h1 className = "sketch ux-softwares-mobile"> <AiIcons.AiOutlineSketch color='#FDAF00'/> Sketch</h1>
    </Animator>
  </ScrollPage>
  <ScrollPage page={16}>
  <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -900))}>
    <div className='space'></div>
    </Animator>
  </ScrollPage>
  <ScrollPage page={17}>
  <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -900))}>
  <ReactLottie/>
    </Animator>
  </ScrollPage>
  <ScrollPage page={18}>
  <Animator animation={batch(Fade(), Sticky(), MoveIn(0, -900))}>
  <NodeJs/>
    </Animator>
  </ScrollPage>
  </ScrollContainer>
      </div>
      
  </Fragment>
}
