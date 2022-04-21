import React, { useEffect } from 'react';
import '../src/App.scss'
const IMAGE_URL =
  '/frames2/Vid5';

const App = () => {
  let canvasRef = React.createRef();
  const html = document.documentElement;
  const frameCount = 752;

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
      if(window.scrollY>1000 && window.scrollY <= 1014)
        window.scrollTo({
          top:window.scrollY+500,
          behavior:'smooth'
        })
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop -.4;
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

  const currentFrame = (index) =>
    `${IMAGE_URL}${index.toString().padStart(4, '0')}.png`;

  return (
    <section className='section1'>
      <div className='content'>
        We build custom softwares to ensure your business's success
      </div>
      <canvas ref={canvasRef} id='hero-apple' width={1920} height={1080} />
    </section>

  );
};

export default App;