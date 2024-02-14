import { Link } from 'react-router-dom'; // Import Link component
import "../assets/Terms.css"
const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>
      <br />
      <div className="terms-content">
      <p className="terms-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero vitae felis
          consectetur, et eleifend quam ultrices. Phasellus eu feugiat lacus. Integer nec eros non mi
          commodo varius sit amet in ligula. Suspendisse semper nec leo eu tincidunt. Aliquam nec
          risus a est pulvinar cursus. Cras viverra tortor et magna volutpat vehicula. Ut feugiat dui
          eget felis posuere, id dignissim orci fermentum. Proin in ante vel nisi pharetra interdum at
          id ligula. Proin pharetra congue odio, nec interdum arcu tincidunt vel. Vestibulum nec
          turpis non risus eleifend efficitur. Nullam laoreet metus vitae orci tincidunt, et mollis dui
          ultrices. Donec tincidunt diam a nibh sollicitudin, vel pharetra quam pellentesque.
        </p>
        <p className="terms-paragraph">
          Vestibulum rutrum, quam id gravida convallis, odio mauris tempor lorem, in ultricies lacus
          lorem at nisi. Mauris nec dolor justo. Phasellus sollicitudin, nisi in pharetra malesuada,
          felis nisl blandit orci, eget aliquam tortor libero at sapien. Nulla id magna nec eros
          consectetur malesuada. Nam auctor ex sit amet magna posuere lacinia. Curabitur sodales
          ligula et neque volutpat, vel efficitur enim malesuada. Fusce congue scelerisque mauris, ut
          venenatis libero mollis nec. Nullam tempor ligula nec nulla tempus, in fringilla eros
          vehicula. Sed in nulla vestibulum, laoreet nunc id, fermentum mauris. Ut vitae quam non
          odio tempus convallis vel nec risus.
        </p>
        <p className="terms-paragraph">
          Duis quis luctus dolor, a consectetur velit. Proin et diam non risus consequat feugiat.
          Suspendisse potenti. Duis malesuada dui in sapien eleifend tempus. In ac quam ac purus
          fermentum hendrerit. Proin suscipit tincidunt felis, vel venenatis libero accumsan ut.
          Aliquam consequat libero a bibendum tincidunt. Fusce tempor quam sed aliquet vehicula. Ut
          fermentum eros eget augue venenatis, sit amet aliquet lectus laoreet.
        </p>
        {/* Back button */}
        <Link to="/About" className="back-button">Back</Link>
      </div>
    </div>
  );
};

export default Terms;
