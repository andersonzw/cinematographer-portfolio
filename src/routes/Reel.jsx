
const Reel = () => {
  return (
    <div className="w-full px-8 ">
      <div className="">
        <iframe
          src="https://www.youtube.com/embed/NcBjx_eyvxc?si=0-0IOo4Pb1ncuMzZ"
          title="showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-full h-screen"
        ></iframe>
      </div>
    </div>
  );
};

export default Reel;
