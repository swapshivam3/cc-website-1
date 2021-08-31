import React from 'react';


const Home = () => {

  window.addEventListener('scroll', () => {
    const logoText = document.getElementById('logo-text');
    // const right = document.getElementById('right');
    // const left = document.getElementById('left');
    const middle = document.getElementById('middle');
    const value = window.scrollY;
    if (logoText) {
      logoText.style.top = value * 0.1 + 5 + "rem"
    }
    if (middle) {
      middle.style.top = value * 0.04 + 14 + "rem"
    }
    
    // right.style.top = -value * 0.03 + 14 + "rem"
    // left.style.top = -value * 0.03 + 14 + "rem"
    
  })


  return (
    <React.Fragment>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
      
      <div className="container bg-black text-white scroll-smooth">
        <div className="container absolute w-full bottom-0 h-24 z-10 bg-opacity-0 text-black">.</div>
        <div className="relative w-full h-screen overflow-hidden">
        
        <div className="text-center text-5xl tracking-wider absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-20" id="logo-text">
        <div>
        CODING CLUB
        </div>
        <div>
        BITS PILANI
        </div>
        </div>

        <img src="./assets/left.png" id="left" className="object-right block absolute top-56"></img>
        <img src="./assets/middle.png" id="middle" className="object-right block absolute top-56 left-1/2 transform -translate-x-1/2"></img>
        <img src="./assets/right.png" id="right" className="object-right block absolute right-0 top-56"></img>
        </div>
        <div className="container mx-auto bg-gray-700 w-1/2 rounded-xl p-8 m-20 relative" id="lowerHero">
        We the members of Coding Club. All of the assets/graphics used are temporary.
        lorem ipsum dolor sit amit.s simply dummy text
        of the printing and typesetting industry. Lorem 
        Ipsum has been the industry's standard dummy 
          ever since the 1500s, when an unknown printer.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
      </React.Fragment>
    );
}

export default Home;

