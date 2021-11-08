import React, { useState } from "react";
import temp from './popuptemp.json';

const PopUp = (props) => {

    const [dept , setDept] = React.useState(props.alignment);

    return (
        <div>
        { dept == 1 ? <div className="Pop-up-1 Pop-up-box"> <div class="Pop-up-imgbox"> <img src={temp[0].src} class="Pop-up-img"/><h4>Technologies used:</h4> <div class ="Technologies"> {temp[0].technologies} </div></div> <div class="Pop-up-subbox"> <h1>{temp[0].title} </h1> <div class = "Pop-up-description"> {temp[0].description} </div></div></div> :
          dept == 2 ? <div className="Pop-up-2 Pop-up-box"> <div class="Pop-up-imgbox"> <img src={temp[1].src} class="Pop-up-img"/><h4>Technologies used:</h4> <div class ="Technologies"> {temp[1].technologies} </div></div> <div class="Pop-up-subbox"> <h1>{temp[1].title} </h1> <div class = "Pop-up-description"> {temp[1].description} </div></div> </div> : 
          dept == 3 ? <div className="Pop-up-3 Pop-up-box"> <div class="Pop-up-imgbox"> <img src={temp[2].src} class="Pop-up-img"/><h4>Technologies used:</h4> <div class ="Technologies"> {temp[2].technologies} </div></div> <div class="Pop-up-subbox"> <h1>{temp[2].title} </h1> <div class = "Pop-up-description"> {temp[2].description} </div></div></div> : 
          dept == 1 ? <div className="Pop-up-1 Pop-up-box"> <div>{dept}</div> </div> :
          dept == 2 ? <div className="Pop-up-2 Pop-up-box"> <div>{dept}</div> </div> : 
          dept == 3 ? <div className="Pop-up-3 Pop-up-box"> <div>{dept}</div> </div> : null }
        </div>
      );
}

export default PopUp;