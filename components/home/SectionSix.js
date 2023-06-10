const SectionSix = () => {
  return (
    <div className="mb-36 flex justify-center px-5 ">
      {" "}
      <div data-aos="fade-up" className="max-w-6xl flex flex-col items-center px-4 py-8 rounded-xl bg-secondaryshade1 text-center md:px-14 md:py-20">
        <div className="font-bold text-2xl mb-2 md:text-3xl">Call for Dev Partners</div>
        <div  className="font-light text-secondary mb-7">
          Build and earn with MacLink
        </div>
        <div  className="mb-6 text-sm md:text-base">
          As a developer you can build Apps that can be used by MacLink creators
          for sales, support, analysis and engagements. Make up to 80%
          integration fee from all creators
        </div>
        <div className="flex border-l-2 border-primary py-1 px-2 bg-secondaryshade2 text-xs md:text-sm">
          <input
            placeholder="Enter email address"
            className="pl-2 bg-secondaryshade2 font-light placeholder-primary mr-3"
          />
          <button className="bg-primary text-white px-2 py-1 font-light rounded-md md:px-3 md:py-3">
            Become a Dev Partner
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default SectionSix;
