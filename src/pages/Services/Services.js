import React, { useEffect } from 'react';
import gsap from 'gsap';

const gsapEffects = [
  { 
    id: "fadeSlideTo",  
    props: { opacity: 0.5, x: 300, yoyo: true, repeat: -1 }
  },
  { 
    id: "fadeSlideFrom", 
    animate: 'from',
    props: { opacity: 0.25, x: 300, yoyo: true, repeat: -1 }
  },
  { 
    id: "fadeSlideFromTo", 
    animate: 'fromTo', 
    props: { opacity: 0.1, x: 300}, 
    props2: { opacity: 1, x: 600, yoyo: true, repeat: -1 }
  }
];

const Services = () => {
  useEffect(() => {
    gsapEffects.forEach(effect => {
      if (effect.animate === 'from') {
        gsap.from(`.${effect.id}`, {...effect.props });
      } else if (effect.animate === 'fromTo') {
        gsap.fromTo(`.${effect.id}`, {...effect.props }, {...effect.props2});
      } else {
        gsap.to(`.${effect.id}`, {...effect.props });
      }
    });
  }, []);

  return (
    <div>
      <div
        className="box purple fadeSlideTo"
        style={{
          width: "100px",
          height: "100px",
          background: "red",
          marginBottom: "10px",
        }}
      >
        to
      </div>
      <div
        className="box green fadeSlideFrom"
        style={{
          width: "100px",
          height: "100px",
          background: "green",
          marginBottom: "10px",
        }}
      >
        from
      </div>
      <div
        className="box blue fadeSlideFromTo"
        style={{
          width: "100px",
          height: "100px",
          background: "blue",
          marginBottom: "10px",
        }}
      >
        fromTo
      </div>
    </div>
  );
};

export default Services;
