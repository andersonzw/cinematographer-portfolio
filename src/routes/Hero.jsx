import HeroBackgroundVideo from "../component/HeroBackgroundVideo";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-950 flex justify-center items-center">
      <div className="z-10 text-center">
        <h3 className="text-xl uppercase tracking-wider">videography | photography</h3>
        <h1 className="text-7xl my-4 font-bold text-white-500 trackin"> Samuel Liu</h1>
        <h2 className="text-2xl my-4 tracking-wider up">
          Melbourne, Australia
        </h2>
        <p className="uppercase text-sm tracking-widest underline-red text-red-500 cursor-pointer">Contact</p>
      </div>
      <HeroBackgroundVideo/>
    </section>
  );
};

export default Hero;
