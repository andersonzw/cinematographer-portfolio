import React, { useRef } from "react";

export const ScrollContext = React.createContext({
    scrollToRef: () => {},
});

export const ScrollProvider = ({ children }) => {
  // set up reference points, then assign these to each component
  const contactRef = useRef(null);
  const showreelRef = useRef(null)
  const heroRef = useRef(null)

  // scroll function
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const value = { contactRef,showreelRef,heroRef, scrollToRef };
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
