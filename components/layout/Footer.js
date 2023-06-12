import Image from "next/image";
const icons = [
  "facebook-icon",
  "linkedin-icon",
  "youtube-icon",
  "twitter-icon",
];
const Footer = () => {
  return (
    <footer className="bg-primaryshade pt-10 px-5 text-white font-light pb-10 text-base md:text-xl  md:px-10">
      <div className="flex justify-between flex-col space-y-8 lg:flex-row md:space-y-0">
        <div className="space-y-5 mb-5">
          {" "}
          <div className="space-y-3 pr-5">
            <div className="flex items-center space-x-1 text-primary">
              <div className="text-4xl font-semibold">M</div>
              <div>MacLink</div>
            </div>
            <div className="max-w-xl mb-10 text-secondary">
              MacLink is a cloud-based platform for educators and creators to
              build end-to-end edtech solutions in few minutes and zero codes.
            </div>
          </div>
          <address className=" text-secondary not-italic">
            <div className="font-semibold mb-2">Nigeria Office</div>
            <div>
            38 Opebi Road, Ikeja, Lagos State, Nigeria.

            </div>
            <div>+2345678912</div>
          </address>

          <address className="text-secondary not-italic">
            <div className="font-semibold mb-2">United Kingdom Office</div>
            <div>
            Longside Lane, Longside House, Bradford, United kingdom
             
            </div>
            <div>+12345678912</div>
          </address>
        </div>
<div className="flex justify-between">
        <div className="font-light text-secondary">
          <div className="space-y-4 mb-16">
            <div className="font-semibold text-primary">Company</div>
            <div>About us</div>
            <div>Features</div>
            <div>Pricing</div>
          </div>

          <div className="space-y-4">
            <div className="font-semibold text-primary">Legal</div>
            <div>Privacy Policy</div>
            <div>Intellectual Property</div>
            <div>Term of use</div>
          </div>
        </div>
        <div className="space-y-4 font-light text-secondary">
          <div className="font-semibold text-primary">General</div>
          <div>Sign up</div>
          <div>Create a center</div>
          <div>Developer's Tools</div>
          <div>Market place</div>
          <div>Blog</div>
        </div> </div>
        <div className="flex flex-col font-semibold text-primary items-start space-y-4 md:items-end">
          <div>Follow us on Social media</div>
          <div className="flex space-x-8">
            {icons.map((icon, index) => (
              <Image
                key={index}
                className="w-auto h-auto"
                alt={icon}
                height={30}
                width={30}
                src={`images/icon/${icon}.svg`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="text-secondary border-t border-gray-500 mt-20 text-sm font-normal text-lg text-center pt-5">
        Property of <span className="font-semibold">opulencedeveloper.com</span>{" "}
        2023, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
