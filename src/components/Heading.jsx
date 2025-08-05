import shortly from "../assets/images/logo.svg";

const Heading = () => {
  return (
    <>
      <div className="flex justify-between items-center mx-auto px-4 py-6  lg:hidden mb-10">
        <img src={shortly} className=" cursor-pointer" />

        <i className="ri-menu-line text-3xl text-[var(--Gray500)]"></i>
      </div>
      <div className="max-w-[1440px]  mx-auto px-4 py-6 lg:block hidden ">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-5 ">
            <img src={shortly} className=" cursor-pointer" />
            <div className="flex space-x-3 text-[var(--Gray500)]">
              <a
                href="#"
                className="hover:text-[var(--purple)] hover:font-bold"
              >
                Features
              </a>
              <a
                href="#"
                className="hover:text-[var(--purple)] hover:font-bold"
              >
                Pricing
              </a>
              <a
                href="#"
                className="hover:text-[var(--purple)] hover:font-bold"
              >
                Resources
              </a>
            </div>
          </div>
          <div className="flex space-x-4 text-[var(--Gray500)]">
            <button className="hover:text-[var(--purple)] hover:font-bold">
              <a href="#">Login</a>
            </button>
            <button className="bg-[var(--blue)] text-white px-5 py-2 rounded-full hover:bg-[var(--blue1)] transition">
              <a href="#"> Sign Up</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
