
import Login from "./Components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Wedding from "./Components/Wedding";
import Logo from "./Components/Logo";
import LandingPage from "./Components/Landingpage";
import AdminLogin from "./Components/Adminlogin";
import Adminsignup from "./Components/Adminsignup";
import Events from "./Components/Events";
import Booking from "./Components/Booking";
import Adminview from "./Components/Adminview";
import Adminnavbar from "./Components/Adminnavbar";
import Adminadd from "./Components/Adminadd";
import Allbookings from "./Components/Allbookings";
import Adminedit from "./Components/Adminedit";
import Admindelete from "./Components/Admindelete";
import Eventbanner from "./Components/Eventbanner";
import Bookingbanner from "./Components/Bookingbanner";
import Editbooking from "./Components/Editbooking";
import Addbooking from "./Components/Addbooking";
import Viewbooking from "./Components/Viewbooking";
import Editbanner from "./Components/Editbanner";
import Mybookingbanner from "./Components/Mybookingbanner";
import Terms from "./Components/Terms";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Logo />}></Route>
        <Route path="/Landingpage" element={<LandingPage />}></Route>
        <Route path="/Adminlogin" element={<AdminLogin />}></Route>
        <Route path="/Adminsignup" element={<Adminsignup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Navbar" element={<Navbar />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Footer" element={<Footer />}></Route>
        <Route path="/Banner" element={<Banner />}></Route>
        <Route path="/Wedding" element={<Wedding />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Booking" element={<Booking />}></Route>
        <Route path="/Adminview" element={<Adminview />}></Route>
        <Route path="/Adminnavbar" element={<Adminnavbar />}></Route>
        <Route path="/Adminadd" element={<Adminadd />}></Route>
        <Route path="/Allbookings" element={<Allbookings />}></Route>
        <Route path="/Adminedit" element={<Adminedit />}></Route>
        <Route path="/Admindelete" element={<Admindelete />}></Route>
        <Route path="/Logo" element={<Logo />}></Route>
        <Route path="/Eventbanner" element={<Eventbanner />}></Route>
        <Route path="/Bookingbanner" element={<Bookingbanner />}></Route>
        <Route path="/Editbooking" element={<Editbooking />}></Route>
        <Route path="/Addbooking" element={<Addbooking />}></Route>
        <Route path="/Viewbooking" element={<Viewbooking />}></Route>
        <Route path="/Editbanner" element={<Editbanner />}></Route>
        <Route path="/Mybookingbanner" element={<Mybookingbanner />}></Route>
        <Route path="/Terms" element={<Terms />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App