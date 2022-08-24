import React from "react";
import { useState } from "react";
// import "./Header.css";
import Data from "./Section1Data";
const Section1 = () => {
  const [menuData, setMenuData] = useState(Data);
  return (
    <section className="mainSec">
       <div className="sec1">
         <div className="caption">Popular Now</div>
           <div className="flex">
      {menuData.map((item) => {
        const { img, desc, star, facePrice, netPrice } = item;
        return (
          <>
        
           <div className="CardBody">
                  <div className="CardParent">
                    <div className="CardChild">
                      <img
                        src={img}
                        className="card-media"
                        alt=""
                                    />
                    </div>
                  </div>
                  <div className="des">
                    <p className="txt">{desc}</p>
                    <input id="rating"  type="button" value={star}></input>
                    <div className="flex1Parent">
                    <div className="flex1">
                    <div className="price">
                      <p id="cutRate">{facePrice}</p>
                      <p id="ActualRate">{netPrice}</p>
                    </div>
                    <div className="btn">
                      <button>Explore</button>
                    </div>
                    </div>
                    </div>
                  </div>
                </div>
             </>
        );
      })}
       </div>
    </div>
    </section>
  );
};
export default Section1;
