import { useContext } from "react";
import { VideoPopupContext } from "../util/VideoPopupContext";

const VideoPopup = () => {
  const { openVidPopup, setOpenVidPopup } = useContext(VideoPopupContext);
  return (
    <>
      {openVidPopup && (
        <section className="fixed top-0 left-0 w-full min-h-screen bg-black bg-opacity-70 z-50 flex justify-center items-center">
          <div
            className="fixed text-2xl top-[2rem] right-[2rem] cursor-pointer"
            onClick={() => setOpenVidPopup(false)}
          >
            X
          </div>
          <div className=" max-w-screen-lg">
            <img
              className="w-full h-full object-cover"
              src="/wedding.jpg"
              alt=""
            />
          </div>
        </section>
      )}
    </>
  );
};

export default VideoPopup;
