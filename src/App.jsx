import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./routes/Footer";
import Header from "./routes/Header";
import Hero from "./routes/Hero";
import Reel from "./routes/Reel";

function App() {
  return (
    <div className="relative w-full">
      <Header />
      <Hero />

      <About />
      <Reel />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
