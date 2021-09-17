import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import './OurProjects.css';
import slides from './projects.json'


function OurProjects() {


    return (
      <div className="project-main">
      <Hero>
        <div className="container">
          <div className="row">
            {slides.map((card, i) => (
              <div className="column" key={card.id}>
                <Card>
                  <div className="project-card-title"><a href={card.target}> {card.title} </a></div>
                  <div className="project-card-body">{card.description}</div>
                  <div className="project-card-skill">{card.skills}</div>
                  <Image ratio={900/900} src={card.image} />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Hero>
    </div>
         

          
 
    );
}

function Card({ children }) {
  const ref = useRef();
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      xys: [0, 0, 1],
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.to(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}

function Hero({ children }) {
  return (
    <div className="project-hero">
      <div className="project-hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + "%"
          }}
        >
          <div className="ratio-inner">
            <img src={src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}


export default OurProjects
