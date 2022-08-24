import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <hr id="hr_line" />
      <div className="container">
        <div className="child-container">
          <div className="flexParent">
            <div className="location">
              <p id="Company_name">GeeksforGeeks</p>
              <div className="full_address">
                <p>5th Floor,A-118,</p>
                <p>Sector-136, Noida, Uttar Pradesh - 201305</p>
                <div id="feedback">
                  <p>feedback@geeksforgeeks.org</p>
                </div>
              </div>
            </div>
            <div className="Footer_content">
              <div className="company">
                <p>Company</p>
               
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Privacy Policy</li>
                  <li>Contact Us</li>
                  <li>Terms of sercice</li>
                </ul>
              </div>
             
              <div className="company">
                <p>Learn</p>
                  <ul>
                  <li>Algorithms</li>
                  <li>Data Structures</li>
                  <li>Languages</li>
                  <li>CS Subjects</li>
                  <li>Video Tutorials</li>
                </ul>
                
                
              </div>
              <div className="company">
                <p>Practice</p>
                <div className="ul">
                <ul>
                  <li>Courses</li>
                  <li>Company-wise</li>
                  <li>Topic-wise</li>
                  <li>How to begin?</li>
                  {/* <li>Terms of sercice</li> */}
                </ul>
              </div>
              </div>
              <div className="company">
                <p>Contribute</p>
                <div className="ul">
                <ul>
                  <li>Write an Article</li>
                  <li>Write Intervew Experience</li>
                  <li>Interships</li>
                  <li>Videos</li>
                  {/* <li>Terms of sercice</li> */}
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="rights"> @geeksforgeeks, All rights reserved</p>
      </div>
    </>

    //   <h1>Footer</h1>
  );
};

export default Footer;
