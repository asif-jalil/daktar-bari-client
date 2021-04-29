import React from "react";
import Footer from "../../Footer/Footer";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import CallToAction from "../CallToAction/CallToAction";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import Header from "../../Header/Header";
import IntroInfo from "../IntroInfo/IntroInfo";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <main>
      <Header />
      <Banner />
      <IntroInfo />
      <Service />
      <About />
      <CallToAction />
      <Testimonial />
      <Blog />
      <Doctors />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
