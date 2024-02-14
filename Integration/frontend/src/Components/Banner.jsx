
import "../assets/Banner.css"; // Import CSS file
import video from "../Media/video1.mp4";

const Banner = () => {
  return (
    <div className="banner">
      <video className="banner-video" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        {/* Add additional <source> elements for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="banner-text">
        <h2>eventology.</h2>
      </div>
    </div>
  );
};

export default Banner;
