import TeamMemberCard from "../../Components/TeamMemberCard/TeamMemberCard"
import './OurTeam.css'
import React , { useState } from 'react'
// import OurTeam1 from "../OurTeam/OurTeam1"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './OurTeam.css'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);
const OurTeam = () => {
  const [clicked2020, setClicked2020] = useState(true);
  const [clicked2019, setClicked2019] = useState(false);
  const [clicked2018, setClicked2018] = useState(false);
  const [clicked2017, setClicked2017] = useState(false);

  const on2020Click = () => {
      setClicked2020(true);
      setClicked2018(false);
      setClicked2017(false);
      setClicked2019(false);
  };
  const on2019Click = () => {
    setClicked2019(true);
    setClicked2018(false);
    setClicked2017(false);
    setClicked2020(false);
  };
  const on2018Click = () => {
    setClicked2018(true);
    setClicked2020(false);
    setClicked2017(false);
    setClicked2019(false);
  };
  const on2017Click = () => {
    setClicked2017(true);
    setClicked2018(false);
    setClicked2020(false);
    setClicked2019(false);
  };
  return (
    
    <div className="App">
     <div className="SwiperHide ">
     <Swiper
    //  pagination={true}
      spaceBetween={120}
      slidesPerView={4}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
        <div className="SwiperScrollDiv">
      <SwiperSlide ><button onClick={on2020Click}>2020</button></SwiperSlide>
      <SwiperSlide><button onClick={on2019Click}>2019</button></SwiperSlide>
      <SwiperSlide><button onClick={on2018Click}>2018</button></SwiperSlide>
      <SwiperSlide><button onClick={on2017Click}>2017</button></SwiperSlide>
      </div>
    </Swiper>
    </div>
       <div >
        <h2 className="teamName" >
          2020
        </h2>
      
      </div>
      <div className={ clicked2020 ? "grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mobileShow" : "grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mobileHide"}>
        <TeamMemberCard name="Satvik Sinha" department="Frontend"/>
        <TeamMemberCard name="Nachiket Kotalwar" department="Frontend" />
        <TeamMemberCard name="Anant Jain" department="Frontend" />
        <TeamMemberCard name="Sarthak Tayal" department="Frontend" />
        <TeamMemberCard name="Harsh Neema" department="Frontend" />
        <TeamMemberCard name="Sanyam Garg" />
        <TeamMemberCard name="Dhruv Singh" />
        <TeamMemberCard />
        <TeamMemberCard name="Aditya SSV" />
      </div>
      <div style={{marginTop:"10%"}}>
        <h2 className="teamName" >
          2019
        </h2>
      
      </div>
      <div className={ clicked2019 ? "grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mobileShow" : "grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mobileHide"} >
        
        {/* <TeamMemberCard name="Satvik Sinha" department="Frontend"/> */}
        <TeamMemberCard name="Nachiket Kotalwar" department="Frontend" />
        <TeamMemberCard name="Anant Jain" department="Frontend" />
        <TeamMemberCard name="Sarthak Tayal" department="Frontend" />
        {/* <TeamMemberCard name="Harsh Neema" department="Frontend" /> */}
        <TeamMemberCard name="Sanyam Garg" />
        <TeamMemberCard name="Dhruv Singh" />
        <TeamMemberCard />
        <TeamMemberCard name="Aditya SSV" />
        
      </div>
      <div style={{marginTop:"10%"}}>
        <h2 className="teamName" >
          2018
        </h2>
      
      </div>
      <div className={ clicked2018 ? "grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mobileShow" : "grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mobileHide"} >
        
        <TeamMemberCard name="Satvik Sinha" department="Frontend"/>
        <TeamMemberCard name="Nachiket Kotalwar" department="Frontend" />
        <TeamMemberCard name="Anant Jain" department="Frontend" />
        {/* <TeamMemberCard name="Sarthak Tayal" department="Frontend" /> */}
        <TeamMemberCard name="Harsh Neema" department="Frontend" />
        <TeamMemberCard name="Sanyam Garg" />
        <TeamMemberCard name="Dhruv Singh" />
        <TeamMemberCard />
        <TeamMemberCard name="Aditya SSV" />
      </div>
   
   
    </div>
  );
};

export default OurTeam;
