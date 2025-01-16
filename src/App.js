import './App.css';
import Faq from '../src/components/Faq';
import Footer from './common/Footer';
import Team from './components/Team';
import OurStory from './components/OurStory';
import AboutUs from './components/AboutUs';
import RoadMap from './components/RoadMap';
import Hero from './components/Hero';
import BackToTop from './common/BackToTop';
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  return (
    <>
      <Hero/>
      <OurStory />
      <AboutUs />
      <RoadMap />
      <Team />
      <Faq />
      <Footer />
      <BackToTop/>
    </>
  );
}

export default App;
