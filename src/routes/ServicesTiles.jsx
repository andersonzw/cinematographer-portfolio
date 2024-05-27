import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the count up happens once
    threshold: 0.5, // Triggers when 50% of the element is in view
  });

  return (
    <section className="bg-white  ">
      <div className="bg-white min-h-[30vh] text-black text-center text-2xl flex p-8">
        <h1 className="max-w-screen-xl mx-auto my-auto">
          Dedicated, creative, and professional videography that brings your
          vision to life.
        </h1>
      </div>
      {/* Tiles */}
      <div className="max-h-[80vh] mx-auto w-full flex cursor-pointer">
        {/* Left flex */}
        <div className="relative w-1/2 overflow-hidden">
          <img
            src="/portrait.jpg"
            alt="camera "
            className=" w-full h-full object-cover hover:scale-110 "
          />
          <a
            href="/about"
            className="bottom-0 left-0 w-full h-full absolute bg-[rgba(0,0,0,0.76)]  backdrop-blur-md opacity-0 hover:opacity-100 tiles-hover-transition  px-8 py-12 flex flex-col items-center justify-center"
          >
            <h1 className="text-4xl font-bold uppercase ">About</h1>
            <p>Samuel Liu</p>
          </a>
        </div>
        {/* Right flex */}
        <div className="flex flex-col  w-1/2">
          <div className="relative w-full h-1/2 ">
            <img
              src="/wedding.jpg"
              alt="camera "
              className=" w-full h-full object-cover"
            />
            <div className="bottom-0 left-0 w-full h-full absolute bg-[rgba(0,0,0,0.76)]  backdrop-blur-md opacity-0 hover:opacity-100 tiles-hover-transition px-8 py-12 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold uppercase ">Film Services</h1>
              <p>
                Events &#8226; Weddings &#8226; Interviews &#8226;
                Advertisements
              </p>
            </div>
          </div>
          <div className=" relative w-full h-1/2 ">
            <img
              src="/event.jpg"
              alt="camera "
              className=" w-full h-full object-cover"
            />
            <div className="bottom-0 left-0 w-full h-full absolute bg-[rgba(0,0,0,0.76)]  backdrop-blur-md opacity-0 hover:opacity-100 tiles-hover-transition px-8 py-12 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold uppercase ">video editing</h1>
              <p>Drone Reels &#8226; Montages &#8226; Compilations </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[30vh] text-black text-center text-2xl flex p-8">
        <h1 ref={ref} className="max-w-screen-xl mx-auto my-auto">
          {inView && (
            <span>
              <CountUp start={1} end={99} duration={3.5} /> +
            </span>
          )}
          {""} videos produced and edited,{" "}
          <span>
            <CountUp start={1} end={5} duration={3.5} />
          </span>{" "}
          years of experience.
        </h1>
      </div>
    </section>
  );
};

export default About;
