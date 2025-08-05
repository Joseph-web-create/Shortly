import { useEffect, useState } from "react";

const ShortenUrl = () => {
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [myLinks, setMylinks] = useState([]);
  const [whatAmloopingover, setLooping] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("shortenedLinks"));
    setLooping(data);
    console.log(data);
  }, [myLinks]);

  const shortenLink = async () => {
    if (!link) {
      setError("Please add a link");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ link }),
      });

      const data = await response.json();
      if (!response.ok) {
        const errorMessage = data.error || "Something went wrong";
        setError(errorMessage);
        return;
      }
      const savedLinks = JSON.parse(
        localStorage.getItem("shortenedLinks") || "[]"
      );
      savedLinks.push({ old: link, new: data.result_url });
      setMylinks((prev) => [...prev, data.result_url]);

      localStorage.setItem("shortenedLinks", JSON.stringify(savedLinks));
      setError(""); // clear any previous error
      setLink(""); //clear link field
    } catch (error) {
      console.error("Fetch failed:", error.message);
      setError("Network error. Please try again.");
    }
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    // Hide "Copied!" after 2 seconds
  };

  return (
    <>
      <div className="w-[90%] lg:w-[100%] h-auto mx-auto bg-no-repeat bg-cover bg-center px-4 py-8 bg-[url('/bg-shorten-mobile.svg')] lg:bg-[url('/bg-shorten-desktop.svg')] bg-[var(--purple)] rounded-lg relative bottom-23 lg:bottom-14 md:bottom-16 mt-30 ">
        <div className="mx-auto flex flex-col sm:flex-row gap-4 w-full lg:px-10">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className={`flex-1 px-4 py-4 rounded-md outline-none text-sm bg-white  border ${
              error
                ? "border-[var(--Red400)] border-3 placeholder:text-[var(--Red400)]"
                : "border-transparent"
            }`}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button
            className="bg-[var(--blue)] text-white px-6 py-3 rounded-md hover:bg-[var(--blue1)] transition cursor-pointer"
            onClick={shortenLink}
          >
            Shorten it!
          </button>
        </div>
        <div className="lg:px-10">
          {error && (
            <p className=" italic text-[var(--Red400)] text-sm">{error}</p>
          )}
        </div>
      </div>

      {whatAmloopingover?.map((val, i) => (
        <div
          key={i}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-6 py-4 px-2 bg-white mb-4 rounded-lg w-[90%] lg:w-[100%] mx-auto relative top-[-46px]"
        >
          <p className="text-[var(--purple)] text-[18px] font-semibold  truncate">
            {val.old}
          </p>
          <hr className="w-full border-t-2 border-[var(--Gray5001)] my-2 lg:hidden" />

          <div className="flex flex-col gap-2 lg:flex-row lg:gap-4 lg:items-center">
            <p className="text-[var(--blue)] text-[18px] font-semibold">
              {val.new}
            </p>
            <button
              className={`bg-[var(--blue)] text-white px-6 py-3 rounded-md  transition cursor-pointer w-full ${
                copiedIndex === i ? "bg-[var(--purple)]" : ""
              }`}
              onClick={() => handleCopy(val.new, i)}
            >
              {copiedIndex === i ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShortenUrl;
