import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Career from "./components/Career";
import Works from "./components/Works";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-cinema-black">
      <Navigation />
      <Hero />
      <Profile />
      <Career />
      <Works />
      <Journal />
      <Footer />
    </div>
  );
}

export default App;
