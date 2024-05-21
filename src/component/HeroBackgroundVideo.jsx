
const HeroBackgroundVideo = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src="/bg-drone.mp4"
      ></video>
      <div
        className="absolute top-0 left-0 min-w-full h-full"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          backgroundImage: "radial-gradient(circle, black 10%, transparent 10%)",
           backgroundSize: "10px 10px",
          
        }}
      ></div>
    </div>
  );
};

export default HeroBackgroundVideo;
