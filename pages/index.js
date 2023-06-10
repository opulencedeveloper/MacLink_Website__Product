import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

import SectionFive from "@/components/home/SectionFive";
import SectionFour from "@/components/home/SectionFour";
import SectionOne from "@/components/home/SectionOne";
import SectionSix from "@/components/home/SectionSix";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";

import "aos/dist/aos.css";
import handleWhatsAppClick from "@/helpers/whatsapp";

export default function Home() {
  useEffect(() => { 
    AOS.init();
    AOS.refresh();
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
    <Image
        src="/images/for-sale.png"
        alt="for sale"
        width={200}
        priority
        loading="eager"
        height={200}
        onClick={handleWhatsAppClick}
        className="h-auto w-auto fixed bottom-0 right-10 z-20 cursor-pointer"
      />
      <SectionOne/>
     <div data-aos="fade-up"> <SectionTwo /> </div>
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </>
  );
}
