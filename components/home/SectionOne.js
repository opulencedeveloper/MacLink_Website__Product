import Image from "next/image";

const heroContent = [
  {
    text: "Trustworthy",
    postion: "bottom-14 left-5 md:left-44 lg:left-20 2xl:left-44",
  },
  {
    text: "Online",
    postion: " bottom-52 left-0 md:left-20 lg:left-5 2xl:left-14",
  },
  {
    text: "Uinique",
    postion: "top-12 left-10 md:left-36 lg:left-10 2xl:left-32",
  },
  {
    text: "Reliable",
    postion: "bottom-20 right-8 md:right-56 lg:right-24 2xl:right-48",
  },
  {
    text: "Learning",
    postion: "top-20 right-5 md:right-36 lg:right-30 lg:right-10 2xl:right-36",
  },
];

const bussinessLogos = ["1", "2", "3", "4", "5"];

const SectionOne = () => {
  return (
    <>
      {" "}
      <div className="w-full flex flex-col bg-primaryshade pt-20 justify-between px-5 md:px-10 lg:flex-row">
        <div className="space-y-6 pt-16 w-full lg:w-1/2">
          <h2 className="text-5xl font-bold leading-normal lg:text-6xl">
            Create your <span className="text-primary">online Academy</span> in
            minutes
          </h2>
          <p className="text-secondary text-lg">
            Share, sell, engage, support and impact your audience/students using
            several Apps with MacLink
          </p>
          <button className="text-lg font-semibold bg-primary px-6 py-4 text-white">
            Get Started for Free
          </button>
          <p className="text-secondary font-light">
            No code required, no credit card, no technical skills needed
          </p>
        </div>
        <div className="relative flex justify-center w-full lg:w-1/2">
          <Image
            src="/images/hero-image.svg"
            alt="hero image"
            priority
            loading="eager"
            width={456}
            height={456}
            className="h-auto w-auto"
          />
          {heroContent.map((content, index) => (
            <button
              key={index}
              className={`absolute ${content.postion} rounded-3xl text-primary text-base border border-primary px-5 py-2 md:text-xl`}
            >
              {content.text}
            </button>
          ))}
        </div>
      </div>
      <div className="px-5 pt-7 space-y-5 md:px-10">
        <div className="text-xl">Trusted by top business</div>
        <div className="flex flex-wrap justify-evenly">
          {bussinessLogos.map((logoName, index) => (
            <Image
              key={index}
              src={`/images/logo/business-logo${logoName}.svg`}
              width={200}
              height={64}
              alt={logoName}
              className="w-auto h-auto mb-7"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionOne;
