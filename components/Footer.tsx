import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/magic-button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      <div className="absolute inset-0 bg-[url('/footer-grid.svg')] bg-center bg-cover opacity-50 z-0"></div>

      <div className="relative flex flex-col items-center z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>
        <a href="mailto:ersinbaharr@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="relative flex flex-col items-center mt-16 z-10">
        <p className="md:text-base text-sm md:font-normal font-light mb-4">
          Copyright © 2024 Ersin Bahar
        </p>

        <div className="flex items-center gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-transparent rounded-lg">
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
