import Image from "next/image";
import { useState } from "react";

const customerComments = [
  {
    id: 0,
    comment:
      "We used MacLink during our first term examination and it was successful and exciting new experience. For the teachers, it was a great relief from stress of manually marking and grading learner's script",
  },
  {
    id: 1,
    comment:
      "We used MacLink during our first term examination and it was successful and exciting new experience. For the teachers, it was a great relief from stress of manually marking and grading learner's script",
  },
  {
    id: 2,
    comment:
      "We used MacLink during our first term examination and it was successful and exciting new experience. For the teachers, it was a great relief from stress of manually marking and grading learner's script",
  },
];

const SectionFive = () => {
  const [currentPostion, setCurrentPostion] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex === 2) {
      return;
    }
    setCurrentPostion((prveState) => prveState + 105);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentPostion((prveState) => prveState - 105);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="bg-primaryshade2 flex flex-col pl-5 py-10 md:pl-10 lg:flex-row mb-40">
      <div className="w-full space-y-5 lg:w-1/2">
        <div className="text-2xl font-bold">What our customers are saying</div>
        <p className="text-secondary font-light">
          Customers are happy using MacLink
        </p>
      </div>
      <div className="relative w-full flex text-white overflow-x-hidden lg:w-1/2">
       {currentIndex !== 0 && <Image
          src="/images/icon/rightarrow-icon.svg"
          loading="eager"
          priority
          alt="arrow icon"
          height={48}
          width={48}
          onClick={prevSlide}
          className="h-auto w-auto z-20 transform rotate-180 absolute -translate-y-1/2 top-2/3 right-10"
        />}
        {currentIndex !== 2 && <Image
          src="/images/icon/rightarrow-icon.svg"
          alt="arrow icon"
          loading="eager"
          priority
          height={48}
          width={48}
          onClick={nextSlide}
          className="h-auto w-auto z-20 absolute -translate-y-1/2 top-1/2 right-10"
        /> }
        {/* <div className="absolute z-10 right-0 h-full w-[45%] bg-[#FFF9F5] bg-opacity-70"></div> */}
        {customerComments.map((contents, index) => {
          const opacity = index !== currentIndex ? "bg-opacity-20" : "";
          return (
            <div
              id={contents.id}
              style={{
                transform: `translateX(-${currentPostion}%)`,
              }}
              className={`${opacity} mr-8 bg-primary rounded-xl px-8   transition-transform duration-500 md:p-14`}
            >
              <Image
                src="/images/icon/quotes.svg"
                alt="quotes"
                height={83}
                width={37}
                className="h-auto w-auto mb-14"
              />
              <p className="text-base w-60 font-semibold pb-3 md:w-72 md:text-lg">
                {contents.comment}
              </p>
              <div className="font-semibold text-base md:text-lg">Amobi Victor Chukwuka</div>
              <div className="font-light">UNN Int'l school PH.</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionFive;
