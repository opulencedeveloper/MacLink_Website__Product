import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// import Portal from "../UI/Portal";
// import MobileNavigation from "./MobileNavigation";
// import handleWhatsAppClick from "@/helpers/whatsapp";

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
      <div className="flex items-center space-x-1 text-primary">
        <div className="text-4xl font-semibold">M</div>
        <div>MacLink</div>
      </div>

      <div className="hidden lg:flex">
        <div className="text-secondary text-xl space-x-14">
          {" "}
          {linkContent.map((content, index) =>
            index === 0 || index === 1 ? (
              <select className="pr-1">
                <option>{content.title}</option>
              </select>
            ) : (
              <Link key={index} className="" href={content.link}>
                {content.title}
              </Link>
            )
          )}{" "}
        </div>{" "}
      </div>
      <div className="flex font-semibold text-lg">
        {" "}
        <Link href={""} className="px-11 py-4 text-primary">
          Login
        </Link>
        <Link href={""} className="bg-primary text-white px-6 py-4">
          Create Account
        </Link>
      </div>
    </nav>
  );
};

export default MainNavigation;
