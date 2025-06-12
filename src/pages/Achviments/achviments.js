import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Achviments = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current.innerText;
    const words = text.split("\u200D"); // zero-width joiner

    textRef.current.innerHTML = words
      .map((word) => `<span class="word">${word}</span>`)
      .join("");

    gsap.from(".word", {
      y: -100,
      opacity: 0,
      rotation: () => gsap.utils.random(-80, 80),
      stagger: 0.1,
      duration: 1,
      ease: "back.out(1.7)"
    });
  }, []);

  return (
    <div className="container">
      <h1 ref={textRef}>#I‍Really‍Love‍GSAP</h1>
    </div>
  );
};

export default Achviments;
