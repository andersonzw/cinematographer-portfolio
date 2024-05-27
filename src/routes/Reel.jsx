import { useContext } from "react";
import { ScrollContext } from "../util/ScrollContext";

const Reel = () => {
  const { showreelRef } = useContext(ScrollContext);
  return (
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
  );
};

export default Reel;
