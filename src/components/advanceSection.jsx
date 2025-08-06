import brandImg from "../assets/images/icon-brand-recognition.svg";
import detailsImg from "../assets/images/icon-detailed-records.svg";
import customizableImg from "../assets/images/icon-fully-customizable.svg";

const AdvanceSection = () => {
  const cardInfo = [
    {
      title: "Brand Recognition",
      discription:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      img: brandImg,
    },
    {
      title: "Detailed Records",
      discription:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      img: detailsImg,
    },
    {
      title: "  Fully Customizable",
      discription:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      img: customizableImg,
    },
  ];
  return (
    <>
      <div className="mx-auto mb-2 lg:flex mt-16 items-center">
        {cardInfo.map((items, i) => (
          <div
            className={`flex flex-col lg:flex-row items-center mb-8 text-center lg:text-left ${
              i === 1 && "lg:mt-20"
            }  ${i === 0 && "lg:mt-[-20px]"} ${i === 2 && "lg:mt-40"}`}
            key={i}
          >
            <div className="bg-white w-[80%] lg:w-[100%] p-4 rounded-md">
              <div className="bg-[var(--purple)] w-20 h-20 flex items-center py-2 rounded-full  mx-auto relative bottom-14 right-0 left-0 lg:left-[-40%]">
                <img src={items.img} className="mx-auto" />
              </div>
              <div>
                <p className="text-[var(--purple)] text-2xl font-bold mb-2">
                  {items.title}
                </p>
                <p className="text-[var(--Gray500)]">{items.discription}</p>
              </div>
            </div>
            <div
              className={`bg-[var(--blue)] h-16 w-2 lg:h-2 lg:w-13 ${
                i === 1 && "lg:mt-[-80px]"
              }   ${i === 2 ? "hidden" : ""} `}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdvanceSection;
