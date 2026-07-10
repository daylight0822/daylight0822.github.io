import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Career from "../components/Career";
import Works from "../components/Works";
import AICinema from "../components/AICinema";
import MoodBoards from "../components/MoodBoards";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Profile />
      <Career />
      <Works />
      <AICinema />
      <MoodBoards />
      <Gallery />
      <Footer />
    </>
  );
}
