
const Reel = () => {
  return (
    <div className="w-full max-w-screen-lg ">
      <div className="">
        <iframe
          src="https://www.youtube.com/embed/NcBjx_eyvxc?si=0-0IOo4Pb1ncuMzZ"
          title="showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-screen h-screen"
        ></iframe>
      </div>
    </div>
  );
};

export default Reel;
