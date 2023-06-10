import Image from "next/image";
const sectionFourContents = [
  {
    header: "(For Non-techies)",
    title: "Launch in Mintutes",
    description:
      "You don't need any technical knowledge to launch a centre in MacLink. If you don't have a domain you can choose a subdomain that best suit your business name.",
    image: "laptop",
  },
  {
    header: "(For Techies and Developers)",
    title: "Plug and Enjoy",
    description:
      "Are you developing a product or managing an app? implement any and all MacLink's feature Apps with just a few line of codes",
    image: "students",
  },
];

const youtubeContent = [
  "Why MacLink was built",
  "How to create and activate value added Apps to your centre",
];

const SectionFour = () => {
  return (
    <div className="flex flex-col items-center px-5">
      <div className="max-w-7xl">
        <div data-aos="fade-up" className="pt-16 mb-4 px-5 bg-primaryshade2 space-y-0 rounded-3xl md:px-10 md:space-y-20">
          <div className="text-2xl font-bold text-center md:text-3xl">
            Built for Non-techies and Developers
          </div>
          {sectionFourContents.map((content, index) => {
            const direction =
              index === 1 ? " lg:flex-row-reverse" : "lg:flex-row";
            const padding = index === 1 ? "pl-0 lg:pl-8" : "pr-0 lg:pr-8";
            return (
              <div key={index} className={`flex flex-col pb-10 ${direction}`}>
                <div className={`space-y-4 pt-9 mb-10 md:pt-14 lg:mb-0  ${padding}`}>
                  <div className="text-primary text-lg font-semibold">
                    {content.head}
                  </div>
                  <div className="text-2xl font-bold">{content.title}</div>
                  <p className="font-light">{content.description}</p>
                  <button className="bg-primary text-white font-semibold px-6 py-4">
                    Get Started
                  </button>
                </div>
                <Image
                  src={`/images/${content.image}-image.png`}
                  alt="laptop-image"
                  className="h-auto w-auto"
                  height={459}
                  width={485}
                />
              </div>
            );
          })}
        </div>
        <div className="my-20 text-center">
          <div className="text-2xl font-bold mb-9 md:text-3xl">
            Not too sure how MacLink work?
          </div>
          <div data-aos="fade-up" className="flex justify-evenly space-x-0 flex-wrap xl:space-x-3">
            {youtubeContent.map((content, index) => (
              <div key={index} className="space-y-5 mb-8">
                <Image
                  key={index}
                  src="/images/youtube-image.svg"
                  alt="youtube"
                  className="h-auto w-auto"
                  height={459}
                  width={607}
                />
                <div className="text-lg md:text-xl">{content}</div>
              </div>
            ))}
          </div>
          <button className="mt-14 border border-primary text-primary text-base font-semibold px-5 py-3 md:text-lg">
            See More
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default SectionFour;
