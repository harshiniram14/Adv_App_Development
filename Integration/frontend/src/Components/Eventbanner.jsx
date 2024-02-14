
import "../assets/Eventbanner.css"; // Import CSS file
import videos from "../Media/videoevent.mp4";

const Eventbanner = () => {
  return (
    <div className="event-banner">
      <video className="event-banner-video" autoPlay loop muted playsInline>
        <source src={videos} type="video/mp4" />
        {/* Add additional <source> elements for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="event-banner-text">
        <h2>our events.</h2>
      </div>
    </div>
  );
};

export default Eventbanner;
