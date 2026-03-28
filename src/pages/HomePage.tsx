import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Career from "../components/Career";
import Filmography from "../components/Filmography";
import Works from "../components/Works";
import Journal from "../components/Journal";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Profile />
      <Career />
      <Filmography />
      <Works />
      <Journal />
      <Footer />
    </>
  );
}
