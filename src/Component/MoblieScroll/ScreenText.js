import React, { useEffect, useRef, useState } from 'react'

const ScreenText = ({screen, setCurrentImg, i}) => {
    const [showAnimation, setshowAnimation]= useState(false);
    const ref = useRef(null);
    const toggleAnimation = (e)=>{
        if(e[0].isIntersecting){
            setshowAnimation(true);
            setCurrentImg(i)
        }
    };

    const options ={
        root: null,
        rooMargin: '0px',
        threshold: 0.7,
    }

    useEffect(()=>{
        const observer = new IntersectionObserver(toggleAnimation, options);
       
            if(ref.current){
                observer.observe(ref.current);
            }
       
        return ()=>{
            if(ref.current){
                observer.unobserve(ref.current);
            }
        };
    });

  return (
    <div className={`screen-text ${showAnimation ? 'text-visible' :''}`} ref={ref}>
      <div className='screen-heading' key={screen.id}>{screen.heading} </div>
      <div className="mobile-mockup-wrapper only-mobile">
    <div className="mobile-mockup">
        <div className="mobile-mockup-screen flex absolate-center">
          <img
          src={screen.mobile_img}
          className="mobile-screen-img"
          key={i}
          />
        </div>
    </div>
   </div>
   <div className='screen-description' key={Math.random}>{screen.description}</div>
    </div>
  )
}

export default ScreenText
