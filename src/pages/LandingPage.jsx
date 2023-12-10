import Navbar from "../components/organisms/Navbar";
import Home from "../components/organisms/Home";
import Feature from "../components/organisms/Feature";
import Menu from "../components/organisms/Menu";
import Rating from "../components/organisms/Rating";
import Services from "../components/organisms/Services";
import Footer from "../components/organisms/Footer";

export default function LandingPage() {
  return (
    <div className="grid place-items-center">
      <div className="transition duration-300 ease-in-out w-max shadow-xl shadow-gray-600">
        <Navbar />
        <Home />
        <Feature />
        <Menu />
        <Rating />
        <Services />
        <Footer />
      </div>
    </div>
  );
}
