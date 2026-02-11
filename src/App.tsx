import NavBar from "./components/NavBar";
import Benefit from "./sections/Benefit";
import Hero from "./sections/Hero";
import Message from "./sections/Message";
import Flavor from "./sections/Flavor";
import Nutrition from "./sections/Nutrition";
import Testimonials from "./sections/Testimonials";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });
  });
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavor />
          <Nutrition />
          <div>
            <Benefit />
            <Testimonials />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default App;
