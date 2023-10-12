import "./App.scss";
import HeroSection from "./components/hero-section/HeroSection";
import Header from "./components/header/Header";
import Landing from "./components/landing/Landing";
import Works from "./components/works/Works";
import About from "./components/about/About";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Landing></Landing>
      <Header></Header>
      <HeroSection></HeroSection>
      <Works></Works>
      <About></About>
    </div>
  );
}

export default App;
