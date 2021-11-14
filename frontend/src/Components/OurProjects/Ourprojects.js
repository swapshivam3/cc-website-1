import React, { useState, useRef , Component } from "react";
import ReactDOM from "react-dom";

import './OurProjects.css';
import slides from './projects.json'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import  { Breakpoint, BreakpointProvider } from 'react-socks';
import ReactCardCarousel from "react-card-carousel";



function OurProjects() {



  const [open1, setOpen1] = React.useState(false);
  const ModalRef1 = React.useRef(null);
  const [open2, setOpen2] = React.useState(false);
  const ModalRef2 = React.useRef(null);
  const [open3, setOpen3] = React.useState(false);
  const ModalRef3 = React.useRef(null);
  const [open4, setOpen4] = React.useState(false);
  const ModalRef4 = React.useRef(null);
  const [open5, setOpen5] = React.useState(false);
  const ModalRef5 = React.useRef(null);
  const [open6, setOpen6] = React.useState(false);
  const ModalRef6 = React.useRef(null);


  function handleModal(e) {
    
    if (e.target.id == 1) { setOpen1(true) } 
    if (e.target.id == 2) { setOpen2(true) } 
    if (e.target.id == 3) { setOpen3(true) } 
    if (e.target.id == 4) { setOpen4(true) } 
    if (e.target.id == 5) { setOpen5(true) } 
    if (e.target.id == 6) { setOpen6(true) } 
    
  }


  
    return (
    
    
      <div>
    <BreakpointProvider>  
      <Breakpoint medium up>
        <div className="project-main">
      <Hero>
        <div className="container">
          <div className="row">
            {slides.map((card, i) => (
              <div className="column" key={card.id}>
                <Card>
                  <div className="project-card-title"><a id={card.id} onClick={(e) => handleModal(e)}> {card.title} </a></div>
                  <div className="project-card-body">{card.description}</div>
                  <div className="project-card-techstack">{card.techstack}</div>
                  <Image ratio={900/900} src={card.image} />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Hero>
    </div>


        <div>
            <div ref={ModalRef1} />
            <Modal open={open1} onClose={() => setOpen1(false)} center container={ModalRef1.current} >
                  <div className="project-modal">
                      <h1>{slides[0].title}</h1>
                      <div className="project-modal-desc">
                        <img src={slides[0].image} alt="" />
                      <p>
                        {slides[0].description}
                      </p>
                      </div>
                      <a href={slides[0].target}>Visit</a>
                  </div>    
            </Modal>
        </div>

        <div>
              <div ref={ModalRef2} />
            <Modal open={open2} onClose={() => setOpen2(false)} center container={ModalRef2.current}>
               <div className="project-modal">
                      <h1>{slides[1].title}</h1>
                      <div className="project-modal-desc">
                        <img src={slides[1].image} alt="" />
                      <p>
                        {slides[1].description}
                      </p>
                      </div>
                      <a href={slides[1].target}>Visit</a>
                  </div>    
            </Modal>
        </div>

        <div>
            <div ref={ModalRef3} />
            <Modal open={open3} onClose={() => setOpen3(false)} center container={ModalRef1.current} >
            <div className="project-modal">
                      <h1>{slides[2].title}</h1>
                      <div className="project-modal-desc">
                        <img src={slides[2].image} alt="" />
                      <p>
                        {slides[2].description}
                      </p>
                      </div>
                      <a href={slides[2].target}>Visit</a>
                  </div>
            </Modal>
        </div>

        <div>
              <div ref={ModalRef4} />
            <Modal open={open4} onClose={() => setOpen4(false)} center container={ModalRef2.current}>
            <div className="project-modal">
                      <h1>{slides[3].title}</h1>
                      <div className="project-modal-desc">
                        <img src={slides[3].image} alt="" />
                      <p>
                        {slides[3].description}
                      </p>
                      </div>
                      <a href={slides[3].target}>Visit</a>
                  </div>
            </Modal>
        </div>

        <div>
            <div ref={ModalRef5} />
            <Modal open={open5} onClose={() => setOpen5(false)} center container={ModalRef1.current} >
            <div className="project-modal">
                      <h1>{slides[4].title}</h1>
                      <div className="project-modal-desc">
                        <img src={slides[4].image} alt="" />
                      <p>
                        {slides[4].description}
                      </p>
                      </div>
                      <a href={slides[4].target}>Visit</a>
                  </div>
            </Modal>
        </div>

        <div>
              <div ref={ModalRef6} />
            <Modal open={open6} onClose={() => setOpen6(false)} center container={ModalRef2.current}>
            <div className="project-modal">
                      <h1>{slides[5].title}</h1>
                      <div className="project-modal-desc">
                        <img src={slides[5].image} alt="" />
                      <p>
                        {slides[5].description}
                      </p>
                      </div>
                  </div>
            </Modal>
        </div>
      
        </Breakpoint> 

        <Breakpoint medium down>
        <div className="project-card-carousel">
        <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
        {slides.map((card, i) => (
              
             
                <div className="project-card-carousel-style">
                <h1 style={{padding: "10px" , fontSize: "3ch"}}><a href={card.target}> {card.title} </a></h1>
                  <div>{card.description}</div>
                  <div style={{padding: "10px" }}>{card.techstack}</div>
                  <Image ratio={200/200} src={card.image} />
                </div>
              

            ))}
          </ReactCardCarousel>
          </div>    
        </Breakpoint>
      
      </BreakpointProvider>
      </div>
      
         

          
 
    );
}

function Card({ children }) {
  const ref = useRef();


  return (
    <div
      ref={ref}
      className="project-card"
    >
      {children}
    </div>
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
