import { useContext } from "react";
import VideoPopup from "../component/VideoPopup";
import { VideoPopupContext } from "../util/VideoPopupContext";

const Portfolio = () => {
  const { openVidPopup, setOpenVidPopup } = useContext(VideoPopupContext);
  const videoData = [
    { url: "/wedding.jpg", alt: "" },
    { url: "/camera.jpg", alt: "" },
    { url: "/camera.jpg", alt: "" },
    { url: "/wedding.jpg", alt: "" },
    { url: "/camera.jpg", alt: "" },
    { url: "/wedding.jpg", alt: "" },
  ];

  const PreviewTile = ({ url, alt }) => {
    return (
      <div >
        <img
          onClick={() => setOpenVidPopup(true)}
          className="cursor-pointer object-cover hover:scale-105"
          src={url}
          alt={alt}
        />
      </div>
    );
  };

  return (
    <>
      <section className="relative bg-black min-h-screen pt-[5rem] px-12">
        <VideoPopup />
        <h1 className="text-center mt-[5rem] mb-[5rem]">Portfolio</h1>
        {/* Video gallery */}
        <div className=" columns-3 gap-2 mx-auto max-w-screen-xl">
          {videoData.map((data, i) => {
            return <PreviewTile key={i} url={data.url} alt={data.alt} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
