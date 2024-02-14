import "../assets/Wedding.css"; // Import your wedding page styling if needed
import Navbar from "./Navbar";

const Wedding = () => {
  return (
    <div>
        <Navbar/>
        <br />
        <div className="catchphrase">
        <p>Your Lifes Special Moments Deserve Unforgettable Events.</p>
      </div>
    {/* <div className="intro-img">
    <img src="https://i.postimg.cc/dVvv0GL2/intro.png" alt="Intro image" className="cls-intro" />
    </div> */}

    <br />
    <div className="wed-img">
    <img src="https://i.postimg.cc/cLqpBLb4/headwed.png" alt="Wedding image" className="wed-img" />
    </div>
    <div className="wedding-container">
      <section className="wedding-quote-section">
        <div className="wedding-quote">
          <p>Love is not just spiritual; its also physical and emotional. May your love continue to grow and blossom!</p>
        </div>
      </section>

      <section className="wedding-gallery-section">
        <div className="image-container">
          <div className="image-overlay">
            <p className="image-text">less than 50 people</p>
          </div>
          <img src="https://i.postimg.cc/bY9wYjbs/swedd.png" alt="Wedding Image 1" className="gallery-image" />
        </div>

        <div className="image-container">
          <div className="image-overlay">
            <p className="image-text">more than 50 people</p>
          </div>
          <img src="https://i.postimg.cc/nhckSZK7/bwedd.png" alt="Wedding Image 2" className="gallery-image" />
        </div>
        {/* Add more image containers as needed */}
      </section>

      <section className="wedding-booking-section">
        <div className="booking-form">
          <h2 className="header-wed">Book Your Dream Wedding</h2>
          <form className="form-wed">
            {/* Add form fields for booking */}
            <label className="label-wed">Name:</label>
            <input className="input-wed" type="text" name="name" />
            
            <label className="label-wed">Email:</label>
            <input className="input-wed" type="email" name="email" />

            <label className="label-wed">Date of Event:</label>
            <input className="input-wed" type="date" name="eventDate" />

            {/* Add more form fields as needed */}

            <button className="button-wed" type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Wedding;
