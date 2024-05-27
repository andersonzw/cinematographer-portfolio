import { useContext } from "react";
import { ScrollContext } from "../util/ScrollContext";
import CountUp from "react-countup";
import {  useInView } from "framer-motion";

const Reel = () => {
  const { showreelRef } = useContext(ScrollContext);
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the count up happens once
    threshold: 0.5, // Triggers when 50% of the element is in view
  });
  return (
    <>
      {/* <div className="bg-white min-h-[30vh] text-black text-center text-2xl flex p-8">
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
        </div> */}
      <section  ref={showreelRef} className="w-full ">
        <div className="">
          <iframe
            src="https://www.youtube.com/embed/NcBjx_eyvxc?si=0-0IOo4Pb1ncuMzZ"
            title="showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-screen"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Reel;
