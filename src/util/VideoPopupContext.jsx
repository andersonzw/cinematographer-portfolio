import React, { useState } from "react";

export const VideoPopupContext = React.createContext({
  openVidPopup: false,
  setOpenVidPopup: () => {},
});

export const VideoPopupProvider = ({children }) => {
  const [openVidPopup, setOpenVidPopup] = useState(false);
  const value = { openVidPopup, setOpenVidPopup };
  return (
    <VideoPopupContext.Provider value={value}>
      {children}
    </VideoPopupContext.Provider>
  );
};
