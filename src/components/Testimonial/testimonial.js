import React, { useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import profile1 from '../../assets/imgs/profileImg.png';
import profile2 from '../../assets/imgs/profileImg.png';

const testimonials = [
  {
    text: "Using this tool has completely transformed how our team operates. We’re more organized, meet our deadlines consistently, and collaboration has never been smoother. It’s a game-changer!",
    author: "Ketul adani",
    position: "CEO of xyz company",
    image: profile1
  },
  {
    text: "This platform has improved our productivity significantly. The design is clean and intuitive, and onboarding new members has never been easier.",
    author: "Jane Doe",
    position: "Project Manager at ABC",
    image: profile2
  },
];

function Testimonial() {
  const [index, setIndex] = useState(0);
  const nodeRef = useRef(null); // ✅ Create ref for CSSTransition

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="testimonial">
      <h2>Testimonial</h2>
      <div className="testimonial-card">
        <div className="testimonial-image">
          <img src={testimonials[index].image} alt={testimonials[index].author} />
        </div>

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={index}
            nodeRef={nodeRef} // ✅ add nodeRef
            timeout={300}
            classNames="fade"
          >
            <div ref={nodeRef} className="testimonial-content"> {/* ✅ apply ref here */}
              <div className="quote">“</div>
              <p>{testimonials[index].text}</p>
              <div className="author">
                <strong>{testimonials[index].author}</strong>
                <span>{testimonials[index].position}</span>
              </div>
              <div className="arrow" onClick={handleNext}>
                <span>&#10132;</span>
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
}

export default Testimonial;
