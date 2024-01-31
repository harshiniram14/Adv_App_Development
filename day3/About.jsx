// Import React and other necessary components
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/About.css"; // Import your about styling if needed
import Banner from "./Banner";

// Define your About component
const About = () => {
  return (
    <React.Fragment>
      {/* Add Google Fonts link */}
      <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Noto+Color+Emoji&family=Silkscreen:wght@400;700&display=swap" rel="stylesheet"/>

      {/* Main content */}
      <div>
        {/* Navbar and Banner components */}
        <Navbar />
        <Banner/>
        <br />
        
        {/* About section */}
        <div className="about-container">
          <h2 className="about-head">WELCOME TO EVENTOLOGY!</h2>
          <p className="about-para">
            At Eventology, we believe that every event is a special moment worth celebrating.
            Our mission is to make event planning an enjoyable and stress-free experience.
            Whether its a wedding, birthday, or any other special occasion, we have got you covered.
          </p>
          <p className="about-para">
            Our team of experienced event planners is dedicated to turning your dreams into reality.
            From conceptualization to execution, we handle every detail with precision and creativity.
            Let us bring your vision to life and create memories that will last a lifetime.
          </p>
          <p className="about-para">
            Explore our website for seamless event planning, personalized services, and a touch of magic.
            Join us in making your events extraordinary!
          </p>
        </div>

        {/* Image Gallery */}
        <h2 className="gallery-head">GALLERY</h2>
        <div className="gallery-container">
          <div className="gallery-item"><img src="https://i.postimg.cc/LhKnV0tg/img2.jpg" alt="Event 1" /></div>
          <div className="gallery-item"><img src="https://i.postimg.cc/Wzh4dswT/img3.jpg" alt="Event 2" /></div>
          <div className="gallery-item"><img src="https://i.postimg.cc/dVT48dVT/img4.jpg" alt="Event 3" /></div>
          {/* Add more images as needed */}
        </div>

        {/* Testimonials section */}
        <div className="testimonials-container">
          <h2 className="testimonials-head">Testimonials</h2>
          <div className="testimonial-card">
            <div className="testimonial">
              <img src="https://i.postimg.cc/zBsN2Vhz/human1.jpg" alt="Author" className="testimonial-author-image" />
              <p className="testimonial-text">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus finibus lacinia nisi nec scelerisque. Integer tempor tristique arcu, nec fringilla elit ultrices quis.&quot;</p>
              <p className="testimonial-author">- John Doe</p>
            </div>
            {/* Add more testimonials */}
            <div className="testimonial">
              <img src="https://i.postimg.cc/fLZjcv2D/human2.jpg" alt="Author" className="testimonial-author-image" />
              <p className="testimonial-text">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus finibus lacinia nisi nec scelerisque. Integer tempor tristique arcu, nec fringilla elit ultrices quis.&quot;</p>
              <p className="testimonial-author">- Jane Smith</p>
            </div>
            {/* Add more testimonials */}
            <div className="testimonial">
              <img src="https://i.postimg.cc/LsvhWB4H/human3.jpg" alt="Author" className="testimonial-author-image" />
              <p className="testimonial-text">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus finibus lacinia nisi nec scelerisque. Integer tempor tristique arcu, nec fringilla elit ultrices quis.&quot;</p>
              <p className="testimonial-author">- Emily Johnson</p>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </React.Fragment>
  );
};

// Export the About component
export default About;
