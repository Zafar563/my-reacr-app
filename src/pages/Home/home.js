import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import CardsSection from "../../components/card/cardsection";
import WhoWeAreSection from '../../components/whoWeAre/whoWeAreSection';
import HeroSection from '../../components/heroSection/heroSection';
import Testimonial from '../../components/Testimonial/testimonial';
import SubscribeSection from '../../components/SubscribeSection/subscribeSection'; 
import Footer from "../../components/Footer/footer";

// SplitText plaginini ro'yxatdan o'tkazish
gsap.registerPlugin(SplitText);

const Home = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    // Blob animatsiyasi
    gsap.to("#blob", {
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      attr: {
        d: `
          M300,300
          L420,270
          Q440,300 410,360
          L340,410
          Q280,430 240,390
          L180,330
          Q150,260 210,220
          L300,180
          Q360,200 420,270
          Z
        `
      }
    });

    // Font yuklanganda animatsiyani sozlash
    document.fonts.ready.then(() => {
      const textElements = titleRef.current.querySelectorAll("h4, h1, p");
      gsap.set(textElements, { opacity: 1 });

      // Har bir element uchun SplitText yaratish
      const splitTexts = Array.from(textElements).map((el) => new SplitText(el, {
        type: "chars, words",
        charsClass: "char"
      }));

      // Avtomatik animatsiya
      splitTexts.forEach((splitText) => {
        if (!splitText.isSplit) {
          splitText.split({ type: "chars, words", charsClass: "char" });
        }
        gsap.from(splitText.chars, {
          duration: 3,
          opacity: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: "back",
          stagger: 0.05,
         
        });
      });
    });
  }, []);

  return (
    <div className='wrapper' style={{ position: "relative", overflow: "hidden" }}>
      {/* Orqa fon blob shakli */}
      <svg
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          top: "-3%",
          left: "25%",
          width: "800px",
          height: "800px",
          zIndex: -1,
          opacity: 1,
          filter: "blur(0) drop-shadow(0 0 50px #a855f7)",
          transform: "rotate(0deg)"
        }}
      >
        <defs>
          <radialGradient id="grad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f0f" />
            <stop offset="40%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#0f0c29" />
          </radialGradient>
        </defs>
        <path
          id="blob"
          fill="url(#grad)"
          d={`
            M300,300
            L400,250
            Q430,270 420,340
            L350,400
            Q300,420 250,400
            L180,340
            Q160,280 200,230
            L300,200
            Q360,220 400,250
            Z
          `}
        />
      </svg>

      <div className="container">
        <div className="home-title" ref={titleRef}>
          <h4>Welcome to Solve.</h4>
          <h1>Manage Your Task <br /> Efficiently</h1>
          <p>Solve Your Project Management Problems <br /> For Your Satisfaction</p>
        </div>

        <div className="card-section">
          <CardsSection />
        </div>

        <div className="who-we-are-section">
          <WhoWeAreSection /> 
        </div>

        <div className="hero-section">
          <HeroSection />
        </div>

        <div className="testimonial">
          <Testimonial />
        </div>

        <div className="subscribe">
          <SubscribeSection />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;