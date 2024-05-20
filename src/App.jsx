import About from "./routes/About";
import Header from "./routes/Header";
import Hero from "./routes/Hero";
import Reel from "./routes/Reel";

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <About />
      <Reel />
    </div>
  );
}

export default App;
