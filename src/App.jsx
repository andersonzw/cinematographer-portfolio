import { Route, Routes } from "react-router-dom";
import ServicesTiles from "./routes/ServicesTiles";
import Contact from "./routes/Contact";
import Footer from "./routes/Footer";
import Header from "./routes/Header";
import Hero from "./routes/Hero";
import Reel from "./routes/Reel";
import Portfolio from "./routes/Portfolio";
import About from "./routes/About";
function App() {
  
  return (
    <div className="relative w-full">

      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <>
                <Hero />
                <ServicesTiles />
                <Reel />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
