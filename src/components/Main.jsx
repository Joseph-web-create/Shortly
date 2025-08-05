import mainImg from "../assets/images/illustration-working.svg";

const Main = () => {
  return (
    <>
      <div className="lg:flex flex-row-reverse justify-between items-center max-w-[1440px] mx-auto overflow-hidden">
        <div className="p-3">
          <img src={mainImg} />
        </div>
        <div className="p-3 lg:w-[500px] text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl p-3 font-bold text-[var(--purple)]">
            More than just shorter links
          </h1>
          <p className="p-3 text-[var(--Gray500)]">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <div className="p-3">
            <button className="bg-[var(--blue)] text-white px-5 py-2 rounded-full  hover:bg-[var(--blue1)]">
              <a href="#">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
