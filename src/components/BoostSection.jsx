import React from "react";

const BoostSection = () => {
  return (
    <div className='bg-[url("/bg-boost-mobile.svg")] lg:bg-[url("/bg-boost-desktop.svg")] bg-no-repeat bg-cover bg-center bg-[var(--purple)] py-12'>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center text-white">
          <p className="text-2xl lg:text-3xl font-bold">
            Boost your links today
          </p>
          <div className="p-3">
            <button className="bg-[var(--blue)]  px-5 py-4 rounded-full w-[200px]  hover:bg-[var(--blue1)]">
              <a href="#">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoostSection;
