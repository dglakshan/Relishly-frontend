import { Helmet } from "react-helmet-async";
import AboutUs from "../Components/About";
import BookTable from "../Components/BookTable";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Hero from "../Components/Hero";
import Menu from "../Components/Menu";
import NavBar from "../Components/NavBar";
import Offers from "../Components/Offers";
import Testimonial from "../Components/Testimonial";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Relishly Restaurant</title>
        <meta
          name="description"
          content="Explore our fresh menu and book your table today."
        />
      </Helmet>
      <div className="w-full min-h-screen grid grid-cols-1 bg-primary-2">
        {/* NavBar */}
        <div className="w-full h-fit fixed top-0 left-0 z-100">
          <NavBar />
        </div>

        {/* Hero */}
        <div className="w-full h-fit">
          <Hero />
        </div>

        {/* Offers */}
        <div className="w-full h-fit">
          <Offers />
        </div>

        {/* About */}
        <div className="w-full h-fit">
          <AboutUs />
        </div>

        {/* Menu */}
        <div className="w-full h-fit">
          <Menu />
        </div>

        {/* gallery */}
        <div className="w-full h-fit">
          <Gallery />
        </div>

        <div className="w-full h-fit">
          <BookTable />
        </div>

        {/* Testimoniols */}
        <div className="w-full h-fit">
          <Testimonial />
        </div>

        {/* Footer */}
        <div className="w-full h-fit">
          <Footer />
        </div>
      </div>
    </>
  );
}
