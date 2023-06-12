import Image from "next/image";
import styles from "./SectionTwo.module.css";

const SectionTwo = () => {
  return (
    <div className="bg-primaryshade1 flex justify-center pt-20  pb-28 px-5 ">
      <div data-aos="fade-up" className="max-w-6xl">
        <h4 className="font-bold text-2xl mb-5  text-center md:text-4xl">
          The Shopify for Educators and Content Creators
        </h4>
        <p className="text-secondary font-light mb-20 text-center text-sm md:text-base">
          Create your cntre to share contents, trade contents, manage contents
          and more. Backed by powerful tools to help you grow, impact, drive
          sales, track and manage your day-to-day activites
        </p>
        <div className="flex justify-between">
          <div className="w-1.5 hidden xl:block">
            <div className="h-[25%] bg-primary "></div>
            <div className="bg-secondaryshade h-[75%]"></div>
          </div>
          <div className="w-[96%] flex flex-col justify-between space-y-10 xl:flex-row xl:space-y-0">
            <div className="space-y-4 pt-10">
              <div className="text-sm">Build your Centre</div>
              <p className="font-bold text-2xl md:text-3xl">
                Create and Customize your Centre
              </p>
              <p className="font-ligt text-base text-secondary">
                You can get notify of the latest and recent material when when
                you register/sign up.{" "}
              </p>
              <ul className={`space-y-1.5 ${styles.custom_list}`}>
                <li>Select a template</li>
                <li>Choose a subdomain or add custom domain</li>
                <li>Configure other setups</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/image1.svg"
                loading="eager"
                className="w-[169px] h-[179px] md:h-auto md:w-auto"
                height={550}
                width={519}
                placeholder="blur"
                blurDataURL="/images/image1.svg"
                alt="image of center"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full h-1.5 block mt-10 xl:hidden">
          <div className="w-[25%] h-full bg-primary "></div>
          <div className="bg-secondaryshade h-full w-[75%]"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
