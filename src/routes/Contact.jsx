import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { useContext } from "react";
import { ScrollContext } from "../util/ScrollContext";

const Contact = () => {
  const {contactRef} = useContext(ScrollContext);
  return (
    <section
      ref={contactRef}
      className="bg-white text-black min-h-[50vh] text-center p-8 pt-[8rem]"
    >
      <h3 className="text-4xl mb-8">Get in touch!</h3>
      <p className="mx-auto max-w-screen-lg text-xl">
        Ready to transform your ideas into engaging visual stories? I&apos;m
        here to help. As a dedicated videographer, I&apos;m committed to
        crafting videos that not only captivate but also convey your message
        effectively. If you&apos;re searching for someone who can turn your
        concepts into reality, look no further. Let&apos;s collaborate and
        create something amazing!
      </p>
      <div className=" mx-auto max-w-screen-lg flex flex-wrap pt-10 justify-center items-center gap-12 md:gap-4">
        <div className="text-xl py-4 px-10 rounded-lg border-black border-[1px] border-opacity-45 w-[300px]">
          Email
          <div className="flex items-center justify-center gap-2 pt-2">
            <MdEmail /> <span className="text-base">samuel-liu@mail.com</span>
          </div>
        </div>
        <div className="text-xl py-4 px-10 rounded-lg border-black border-[1px] border-opacity-45 w-[300px]">
          Phone
          <div className="flex items-center justify-center gap-2 pt-2">
            <IoMdPhonePortrait />
            <span className="text-base">+61 123 456 890</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
