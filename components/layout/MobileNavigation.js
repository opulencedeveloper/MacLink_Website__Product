import Link from "next/link";
import { useRouter } from "next/router";

import handleWhatsAppClick from "@/helpers/whatsapp";

const linkContent = [
  { title: "App", link: "/" },
  { title: "Resources", link: "" },
  { title: "Pricing", link: "" },
  { title: "Market", link: "" },
];

const MobileNavigation = () => {
  const router = useRouter();
  const activeLink = router.pathname;

  return (
    <div className="flex flex-col bg-white w-94 h-full pt-4 px-3 lg:hidden">
      <div className="flex items-center justify-center space-x-1 text-primary mb-8">
        <div className="text-6xl font-bold">M</div>
        <div className="text-xl pt-2">MacLink</div>
      </div>
      <div className="text-secondary text-xl space-y-8 flex flex-col items-start">
        {" "}
        {linkContent.map((content, index) =>
          index === 0 || index === 1 ? (
            <select key={index} className="pr-1 bg-white">
              <option>{content.title}</option>
            </select>
          ) : (
            <Link
              key={index}
              onClick={handleWhatsAppClick}
              className=""
              href={content.link}
            >
              {content.title}
            </Link>
          )
        )}{" "}
      </div>{" "}
      <div className="flex font-semibold mt-8 text-lg">
        {" "}
        <Link
          href={""}
          onClick={handleWhatsAppClick}
          className="px-5 py-2 text-primary"
        >
          Login
        </Link>
        <Link
          href={""}
          onClick={handleWhatsAppClick}
          className="bg-primary text-white px-2 py-2"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
