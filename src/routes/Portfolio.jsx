import { useContext } from "react";
import VideoPopup from "../component/VideoPopup";
import { VideoPopupContext } from "../util/VideoPopupContext";

const Portfolio = () => {
  const { setOpenVidPopup } = useContext(VideoPopupContext);
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
      <div className="max-h-[300px] overflow-hidden">
        <img
          onClick={() => setOpenVidPopup(true)}
          className=" h-full w-full cursor-pointer object-cover hover:scale-105"
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
        <h1 className="text-xl mt-[5rem] mb-[5rem] ">Portfolio Page...</h1>
        <p>
          Videography is a powerful medium to connect with your audience. It can
          be used for corporate videography, event videography, and creating
          social media ads that perform better than the competition’s. Whether
          you’re looking to increase your social presence with social media ads
          that perform better, or you’re looking for a way to showcase your
          brand at a corporate event, we can help! With over 5 years in the
          professional videography business, we have the experience and
          expertise you need to get the results you want.
        </p>
        {/* Video gallery */}
        <div className=" grid grid-cols-3 gap-5 mx-auto max-w-screen-xl">
          {videoData.map((data, i) => {
            return <PreviewTile key={i} url={data.url} alt={data.alt} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
