import React from "react";
import "./Header.css";
import Section1 from './Section1';
import Section2 from './Section2';
const Header = () => {
  return (
    <>
    <divdiv id="head">
      <header className="header">
        <div className="div">
        <div className="mainDiv">
          <div className="child">
            <div className="list1">
              <li>
                <a href="#" id="problem">Problems</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Get Hired</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#"><span>{'</>'}</span>POTD</a>
              </li>
            </div>
            <div className="logo">
              <li><img src="" alt="" /></li>
              <li><p>Practice</p></li>
            </div>
            <div className="list2">
              <li>
                <a href="#">Search</a>
              </li>
              <li>
                <a href="#">Notificaton</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
            </div>
          </div>
        </div>
        </div>
      </header>
      <section className="Parent">
        <div className="childParent">
          <div className="heading">
            <p id="gfg">GeeksforGeeks Courses</p>
            <p id="para">Interactive LIVE <span>{'&'}</span> Self-Paced Courses</p>
          </div>
          <div className="search">
            <input type="text"  name="courses" placeholder="Search Courses..." id="input" ></input>
            <span></span>          
            </div>

        </div>
      </section>
      <Section1 />
      <Section2/>
      <Section2 />
      <Section2 />
      <Section2 />
      <Section2 />
    </divdiv>
    </>
  );
};
export default Header;
