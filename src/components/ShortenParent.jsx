import AdvanceSection from "./advanceSection";
import ShortenUrl from "./ShortenUrl";

const ShortenParent = () => {
  return (
    <div className=" bg-[var(--Gray5001)] text-[var(--purple)] pb-10 ">
      <div className="max-w-[1440px] mx-auto">
        <ShortenUrl />
        <div className="text-center px-3 py-6 lg:w-[40%] mx-auto ">
          <p className="text-[var(--purple)] text-4xl font-semibold">
            Advanced Statistics
          </p>
          <p className="text-[var(--Gray500)] leading-6.5 px-8">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <AdvanceSection />
      </div>
    </div>
  );
};

export default ShortenParent;
