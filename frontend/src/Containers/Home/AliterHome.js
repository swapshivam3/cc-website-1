import "./AliterHome.css";
import Carousel from "../../Components/Carousel/Carousel";
import CubeCarousel from "../../Components/CubeCarousel/CubeCarousel";
import Landing from "../../Components/Landing/Landing";

import React from 'react'
import ScrollSnap from 'scroll-snap'


function callback() {
  console.log('snapped')
}

class AliterHome extends React.Component {
  container = React.createRef()

  bindScrollSnap() {
    const element = this.container.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '90%', duration: 120, timeout:75
    })

    snapElement.bind(callback)
  }

  componentDidMount() {
    this.bindScrollSnap()
  }

  render() {
    return (
      <div id="container" ref={this.container}>
        <div className="page first-page">
          <Landing />
        </div>
        <div className="page second-page">
          <Carousel />
        </div>
        <div className="page third-page">
          <CubeCarousel />
        </div>
      </div>
    )
  }
}

export default AliterHome;
