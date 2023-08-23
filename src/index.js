import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
// import "./headline.css"
// import 'https://unicons.iconscout.com/release/v4.0.0/css/unicons.css';
import myImage from './profile-img.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons'
import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import "./headline.js"
// import $ from 'jquery'; 

import MultiHeadline from './multiheadline'
// import MultiHeadline from './MultiHeadline'

function Hi() {
  return <div>
    <main className="container">

      <section className="profile">
        <div className="left">
          <div className="profile-img">
          <img src={myImage} alt="My Image" />
          <span>
          <a href="#"><Icon.ChatDots/></a>
          </span>
          </div>
        
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>SAMI SHAIKH</h1>
        <MultiHeadline />
        
          </div>
        </div>

        <div className="right">
          <ul className="contact">
            <li>
              <a href="#"><Icon.TelephoneFill /></a>
              <strong>Phone :</strong> 0318-2818801
            </li>
            <li>
              <a href="#"><Icon.EnvelopeFill /></a>
              <strong>Email :</strong> samishaikh737@gmail.com
            </li>
          </ul>
          <ul className='socials'>
              <li>
                <a href="#"><Icon.Facebook /></a>
              </li>
              <li>
                <a href="#"><Icon.Instagram /></a>
              </li>
              <li>
                <a href="#"><Icon.Github /></a>
              </li>
          </ul>
        </div>
      </section>


      {/* about sec  */}
      <div className="about" id="about">
  <div className="left">
    <h2>About Me</h2>
    <hr />
    <p>
      I am Sami Shaikh. A passionate individual with a strong interest in Frontend Development. I believe in the power of clean and efficient code to create exceptional user experiences. My skills and dedication drive me to constantly improve and innovate.
    </p>
    <button className="btn btn-primary">Download CV</button>
  </div>
  <div className="right">
    <h3>Details</h3>
    <ul>
      <li><strong>Name :</strong> Sami Shaikh</li>
      <li><strong>Languages :</strong> Urdu, English</li>
      <li><strong>Nationality :</strong> Pakistan</li>
      <li><strong>Date of Birth :</strong> 1999</li>
      <li><strong>Interest :</strong> Cricket</li>
    </ul>
  </div>
</div>

{/* info section  */}
<div className="education-skills">
  <div className="left">
    <div className="education">
      <i className="bi bi-award"></i>
      {/* <h3>Education</h3>
      <ul>
        <li>Bachelor's in Computer Science</li>
        <li>XYZ University</li>
        <li>Year: 2022</li>
      </ul> */}
    </div>
    <div className="skills">
      <i className="bi bi-tools"></i>
      <h3>Skills</h3>
      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>UI/UX Design</li>
        <li>Graphic Design</li>
      </ul>
    </div>
  </div>
  <div className="right">
    <div className="expertise">
      <div className="field">
        <i className="bi bi-code-slash"></i>
        <h3>HTML & CSS</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: "100%" }}>
            100%
          </div>
        </div>
      </div>
      <div className="field">
        <i className="bi bi-palette"></i>
        <h3>UI/UX Design</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: "80%" }}>
            80%
          </div>
        </div>
      </div>
    </div>
    <div className="graphic-design">
      <i className="bi bi-paint-bucket"></i>
      <h3>JavaScript</h3>
      <div className="progress-bar">
        <div className="progress" style={{ width: "60%" }}>
          80%
        </div>
      </div>
    </div>
  </div>
</div>

 {/* icon sectin  */}
 <div className="tools-technologies">
  <h3><i className="fa fa-wrench tools-icon"></i>Tools & Technologies</h3>
  <div className="tools-list">
    <div className="tool">
      <i className="fab fa-js-square"></i>
      <span>jQuery</span>
    </div>
    <div className="tool">
      <i className="fab fa-wordpress"></i>
      <span>WordPress</span>
    </div>
    <div className="tool">
      <i className="fas fa-paint-brush"></i>
      <span>Design</span>
    </div>
    <div className="tool">
      <i className="fas fa-code"></i>
      <span>Web Development</span>
    </div>
    {/* Add more tools here */}
  </div>
</div>


{/* contact section  */}
<div className="contact-section" id="contact">
  <div className="left">
    <div className="contact-header">
      <h2>Contact Me</h2>
      <hr />
      <p>Feel free to reach out to me.</p>
    </div>
    <ul className="contact-info">
      <li><strong>Contact :</strong>  0318-2818801</li>
      <li><strong>Email  :</strong> samishaikh737@gmail.com</li>
      <li><strong>Location :</strong> </li>
    </ul>
  </div>
  <div className="right">
    <div className="form-header">
      <h2>Get In Touch</h2>
      <hr />
      <p>Have any questions? Send me a message.</p>
    </div>
    <form className="contact-form">
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button className="btn btn-primary">Submit</button>
    </form>
  </div>
</div>

    </main>
  </div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));