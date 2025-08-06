const Footer = () => {
  const footerData = [
    {
      title: "Features",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];
  const icons = [
    <i class="ri-facebook-box-fill"></i>,
    <i class="ri-twitter-fill"></i>,
    <i class="ri-pinterest-fill"></i>,
    <i class="ri-instagram-line"></i>,
  ];
  return (
    <div className="bg-[var(--Gray950)] py-20">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-white flex flex-col lg:flex-row items-center lg:items-start justify-between">
          <p className="text-3xl mb-5 font-bold">Shortly</p>
          {footerData.map((item, i) => (
            <div key={i} className="text-center mb-3 lg:text-left">
              <p className="font-bold mb-2">{item.title}</p>
              {item.links.map((item) => (
                <a
                  href="#"
                  className="block mb-1 text-[var(--Gray500)] hover:text-[var(--blue)]"
                >
                  {item}
                </a>
              ))}
            </div>
          ))}
          <div className="">
            {icons.map((item, i) => (
              <a
                key={i}
                className="hover:text-[var(--blue)] mr-4 text-3xl cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
