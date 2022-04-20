import './App.css';
import {Fragment, useEffect,useRef} from 'react';
function App() {
  const frameCount = 500;
  const ref = useRef(null);
  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };
  const currentFrame = (index)=>{
      //public folder 
    return `/frames2/vid2${index.toString().padStart(4, '0')}.png`
  }
  const updateImage = (index,img,ctx) => {
    img.src = currentFrame(index);
    ctx.drawImage(img, 0, 0);
  }
  useEffect(()=>{
   let canvas = ref.current;
   let context = canvas.getContext("2d");
   const img = new Image()
  img.src = currentFrame(1);
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  console.log(img)
  img.onload=()=>{
  context.drawImage(img, 0, 0);
}
preloadImages()
window.addEventListener("scroll",()=>{
  const scrollTop = document.documentElement.scrollTop;
  const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  requestAnimationFrame(() => updateImage(frameIndex + 1,canvas,context))
})
  });
  return <Fragment>
    <div>
   <canvas ref={ref} height={1000} width={1000}>
   </canvas>
  </div>
   
  </Fragment>
}

export default App;
