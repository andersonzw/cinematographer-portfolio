import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Footer from "./routes/Footer";
import Header from "./routes/Header";
import Hero from "./routes/Hero";
import Reel from "./routes/Reel";
import Portfolio from "./routes/Portfolio";
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
                <About />
                <Reel />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
