import React from 'react'
import { useState , Component , useEffect } from 'react';
import './OurProjects.css';
import Slider from "react-slick";


const slides = [
    {
      class : "project-item-1",
      title: "Machu Picchu",
      subtitle: "Peru",
      description: "Adventure is never far away",
      image:
        "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      class : "project-item-2",
      title: "Chamonix",
      subtitle: "France",
      description: "Let your dreams come true",
      image:
        "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      class : "project-item-3",
      title: "Mimisa Rocks",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      class : "project-item-4",
      title: "Four",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    },
    {
      class : "project-item-5",
      title: "Five",
      subtitle: "Australia",
      description: "A piece of heaven",
      image:
        "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
    }
  ];

  const settings = {
    className: "center",
      centerMode: true,
      dots: true,
      // fade: true ,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500 ,
      slidesToScroll: 1 ,
      arrows: false
  };




function Ourprojects() {


    return (
        <div className="Mainbox">
            <Slider {...settings}>
          {slides.map(slide => (
            
              <div className={slide.class} className="project-items">  
                   
                    <img src={slide.image} className="project-img" alt={slide.title}/>  
                   
                    <div className="project-content">
                      <div >
                      <a href="#" className="hover-4">{slide.title}</a>
                        <br/>
                        <p className="project-desc">{slide.description} </p>
                        
                      </div>
                        
                    </div>
                </div>
            
            ))}
          </Slider> 

          
            
        </div>
    )
}

export default Ourprojects
