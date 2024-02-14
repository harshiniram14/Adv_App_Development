import video1 from "../Media/videobooking.mp4"
import "../assets/Bookingbanner.css"

const Mybookingbanner = () => {
  return (
    <div className="booking-banner">
      <video className="booking-banner-video" autoPlay loop muted playsInline>
        <source src={video1} type="video/mp4" />
        {/* Add additional <source> elements for other video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="booking-banner-text">
        <h2>my bookings.</h2>
      </div>
    </div>
  )
}

export default Mybookingbanner