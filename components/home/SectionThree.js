import Image from "next/image";


const sectionThreeContents = [
  {
    icon: "camera",
    title: "Start a business",
    subtitle:
      "Got fresh ideas on how to engage your audience and make money? Create a centre and start impacting",
  },
  {
    icon: "hybrid",
    title: "Go Hybrid Today",
    subtitle:
      "Are you running an offline school or content trading store? choose the Apps you need to go online today",
  },
  {
    icon: "switch",
    title: "Switch Easily",
    subtitle:
      "Are you selling on other platforms? Build your centre according to your ize and pay less",
  },
];
const SectionThree = () => {
  

  return (
    <div data-aos="fade-up" id="my-component" className={`px-5 space-y-10 pt-24 mb-20 md:px-10`}>
      <div className="text-3xl font-bold text-center">
        Impact Better and grow bigger
      </div>

      <div className="flex justify-start overflow-x-auto space-x-5 pb-5 lg:justify-evenly">
        {sectionThreeContents.map((content, index) => (
          <div
            key={index}
            className="w-52 rounded-md pb-16 shadow-4xl flex flex-col pt-7 items-center mr-8 lg:pb-24 lg:mr-0 md:w-[19rem]"
          >
            <div className="rounded-full h-12 w-12 shadow-3xl flex justify-center items-center mb-6 md:h-24 md:w-24">
              <Image
                src={`/images/icon/${content.icon}-icon.svg`}
                alt="camera-icon"
                loading="eager"
                height={27.5}
                width={35}
                className="w-4 h-3 md:h-7 md:w-9"
              />
            </div>
            <div className="mb-3 font-semibold text-base w-52 px-5 text-center md:text-lg md:w-80">
              Start a business
            </div>
            <p className="font-light text-secondary text-xs px-5 md:text-sm">
              Got fresh ideas on how to engage your audience and make money?
              Create a centre and start impacting
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
