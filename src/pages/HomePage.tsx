import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import AICinema from "../components/AICinema";
import Career from "../components/Career";
import Works from "../components/Works";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Profile />
      <AICinema />
      <Career />
      <Works />
      <Gallery />
      <Footer />
    </>
  );
}
