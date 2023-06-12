import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Portal from "../UI/Portal";
import MobileNavigation from "./MobileNavigation";
import handleWhatsAppClick from "@/helpers/whatsapp";

const linkContent = [
  { title: "App", link: "/" },
  { title: "Resources", link: "" },
  { title: "Pricing", link: "" },
  { title: "Market", link: "" },
];
let navAnimationClass = "";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname;

  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    }
  };

  return (
    <nav className="w-full flex items-center bg-primaryshade justify-between pt-7 px-5 md:px-10">
      <Portal>
        <div
          className={`fixed inset-y-0 -left-64 z-50 shadow-lg lg:hidden transform  ${
            isOpen ? "translate-x-full" : "translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <MobileNavigation />
        </div>
      </Portal>
      <div className="flex items-center space-x-1 text-primary">
        <div className="text-4xl font-semibold">M</div>
        <div>MacLink</div>
      </div>

      <div className="hidden lg:flex">
        <div className="text-secondary text-xl space-x-14">
          {" "}
          {linkContent.map((content, index) =>
            index === 0 || index === 1 ? (
              <select key={index} className="pr-1 bg-primaryshade">
                <option>{content.title}</option>
              </select>
            ) : (
              <Link
                onClick={handleWhatsAppClick}
                key={index}
                className=""
                href={content.link}
              >
                {content.title}
              </Link>
            )
          )}{" "}
        </div>{" "}
      </div>
      <div className="flex font-semibold text-lg hidden lg:flex">
        {" "}
        <Link
          onClick={handleWhatsAppClick}
          href={""}
          className="px-11 py-4 text-primary"
        >
          Login
        </Link>
        <Link
          onClick={handleWhatsAppClick}
          href={""}
          className="bg-primary text-white px-6 py-4"
        >
          Create Account
        </Link>
      </div>
      <button
        className={`${navAnimationClass} block hamburger lg:hidden focus:outline-none`}
        type="button"
        onClick={toggleDrawer}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </nav>
  );
};

export default MainNavigation;
