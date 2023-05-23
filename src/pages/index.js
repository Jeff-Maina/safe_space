import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  // accordion

  const [accItemOne, setAccItemOne] = useState(false);
  const [accItemTwo, setAccItemTwo] = useState(false);
  const [accItemThree, setAccItemThree] = useState(false);
  const [accItemFour, setAccItemFour] = useState(false);
  const [accItemFive, setAccItemFive] = useState(false);
  const [accItemSix, setAccItemSix] = useState(false);
  const [accItemSeven, setAccItemSeven] = useState(false);

  const itemOneClass = accItemOne
    ? "md:h-36 h-32 overflow-hidden"
    : "overflow-hidden h-0";
  const chevronOne = accItemOne ? "rotate-180" : "rotate-0";
  const itemTwoClass = accItemTwo
    ? "md:h-36 h-32 overflow-hidden"
    : "overflow-hidden h-0";
  const chevronTwo = accItemTwo ? "rotate-180" : "rotate-0";
  const itemThreeClass = accItemThree
    ? "md:h-36 h-32 overflow-hidden"
    : "overflow-hidden h-0";
  const chevronThree = accItemThree ? "rotate-180" : "rotate-0";
  const itemFourClass = accItemFour
    ? "md:h-36 h-32 overflow-hidden"
    : "overflow-hidden h-0";
  const chevronFour = accItemFour ? "rotate-180" : "rotate-0";
  const itemFiveClass = accItemFive
    ? "md:h-36 h-32 overflow-hidden"
    : "overflow-hidden h-0";
  const chevronFive = accItemFive ? "rotate-180" : "rotate-0";
  const itemSixClass = accItemSix
    ? "md:h-36 h-32 overflow-hidden"
    : "overflow-hidden h-0";
  const chevronSix = accItemSix ? "rotate-180" : "rotate-0";
  const itemSevenClass = accItemSeven
    ? "md:h-36 h-32 overflow-hidden"
    : "overflow-hidden h-0";
  const chevronSeven = accItemSeven ? "rotate-180" : "rotate-0";

  const handleItemOne = () => {
    setAccItemOne(!accItemOne);
    setAccItemTwo(false);
    setAccItemThree(false);
    setAccItemFour(false);
    setAccItemFive(false);
    setAccItemSix(false);
    setAccItemSeven(false);
  };

  const handleItemTwo = () => {
    setAccItemOne(false);
    setAccItemTwo(!accItemTwo);
    setAccItemThree(false);
    setAccItemFour(false);
    setAccItemFive(false);
    setAccItemSix(false);
    setAccItemSeven(false);
  };

  const handleItemThree = () => {
    setAccItemOne(false);
    setAccItemTwo(false);
    setAccItemThree(!accItemThree);
    setAccItemFour(false);
    setAccItemFive(false);
    setAccItemSix(false);
    setAccItemSeven(false);
  };

  const handleItemFour = () => {
    setAccItemOne(false);
    setAccItemTwo(false);
    setAccItemThree(false);
    setAccItemFour(!accItemFour);
    setAccItemFive(false);
    setAccItemSix(false);
    setAccItemSeven(false);
  };

  const handleItemFive = () => {
    setAccItemOne(false);
    setAccItemTwo(false);
    setAccItemThree(false);
    setAccItemFour(false);
    setAccItemFive(!accItemFive);
    setAccItemSix(false);
    setAccItemSeven(false);
  };

  const handleItemSix = () => {
    setAccItemOne(false);
    setAccItemTwo(false);
    setAccItemThree(false);
    setAccItemFour(false);
    setAccItemSix(!accItemSix);
    setAccItemFive(false);
    setAccItemSeven(false);
  };

  const handleItemSeven = () => {
    setAccItemOne(false);
    setAccItemTwo(false);
    setAccItemThree(false);
    setAccItemFour(false);
    setAccItemSeven(!accItemSeven);
    setAccItemSix(false);
    setAccItemFive(false);
  };

  // faqs

  const [faqaccItemOne, setfaqAccItemOne] = useState(false);
  const [faqaccItemTwo, setfaqAccItemTwo] = useState(false);
  const [faqaccItemThree, setfaqAccItemThree] = useState(false);
  const [faqaccItemFour, setfaqAccItemFour] = useState(false);
  const [faqaccItemFive, setfaqAccItemFive] = useState(false);
  const [faqaccItemSix, setfaqAccItemSix] = useState(false);

  const faqitemOneClass = faqaccItemOne
    ? "md:h-44 h-64 overflow-hidden"
    : "overflow-hidden h-0";
  const faqchevronOne = faqaccItemOne ? "rotate-180" : "rotate-0";
  const faqitemTwoClass = faqaccItemTwo
    ? "md:h-44 h-64 overflow-hidden"
    : "overflow-hidden h-0";
  const faqchevronTwo = faqaccItemTwo ? "rotate-180" : "rotate-0";
  const faqitemThreeClass = faqaccItemThree
    ? "md:h-44 h-64 overflow-hidden"
    : "overflow-hidden h-0";
  const faqchevronThree = faqaccItemThree ? "rotate-180" : "rotate-0";
  const faqitemFourClass = faqaccItemFour
    ? "md:h-44 h-64 overflow-hidden"
    : "overflow-hidden h-0";
  const faqchevronFour = faqaccItemFour ? "rotate-180" : "rotate-0";
  const faqitemFiveClass = faqaccItemFive
    ? "md:h-44 h-64 overflow-hidden"
    : "overflow-hidden h-0";
  const faqchevronFive = faqaccItemFive ? "rotate-180" : "rotate-0";
  const faqitemSixClass = faqaccItemSix
    ? "md:h-44 h-64 overflow-hidden"
    : "overflow-hidden h-0";
  const faqchevronSix = faqaccItemSix ? "rotate-180" : "rotate-0";

  const faqhandleItemOne = () => {
    setfaqAccItemOne(!faqaccItemOne);
    setfaqAccItemTwo(false);
    setfaqAccItemThree(false);
    setfaqAccItemFour(false);
    setfaqAccItemFive(false);
    setfaqAccItemSix(false);
  };

  const faqhandleItemTwo = () => {
    setfaqAccItemOne(false);
    setfaqAccItemTwo(!faqaccItemTwo);
    setfaqAccItemThree(false);
    setfaqAccItemFour(false);
    setfaqAccItemFive(false);
    setfaqAccItemSix(false);
  };

  const faqhandleItemThree = () => {
    setfaqAccItemOne(false);
    setfaqAccItemTwo(false);
    setfaqAccItemThree(!faqaccItemThree);
    setfaqAccItemFour(false);
    setfaqAccItemFive(false);
    setfaqAccItemSix(false);
  };

  const faqhandleItemFour = () => {
    setfaqAccItemOne(false);
    setfaqAccItemTwo(false);
    setfaqAccItemThree(false);
    setfaqAccItemFour(!faqaccItemFour);
    setfaqAccItemFive(false);
    setfaqAccItemSix(false);
  };

  const faqhandleItemFive = () => {
    setfaqAccItemOne(false);
    setfaqAccItemTwo(false);
    setfaqAccItemThree(false);
    setfaqAccItemFour(false);
    setfaqAccItemFive(!faqaccItemFive);
    setfaqAccItemSix(false);
  };

  const faqhandleItemSix = () => {
    setfaqAccItemOne(false);
    setfaqAccItemTwo(false);
    setfaqAccItemThree(false);
    setfaqAccItemFour(false);
    setfaqAccItemFive(false);
    setfaqAccItemSix(!faqaccItemSix);
  };

  // scrolling slider

  let scrollLeft = () => {
    let slider = document.getElementById("carousel");
    slider.scrollLeft -= 332;
  };

  let scrollRight = () => {
    let slider = document.getElementById("carousel");
    slider.scrollLeft += 332;
  };

  // nav

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [navClass, setNavClass] = useState(
    "bg-transparent -translates-y-0 h-16 md:h-20"
  );
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll < lastScroll) {
        setIsScrollingDown(false);
        console.log("last" + lastScroll, "current" + currentScroll);
      }

      if (currentScroll > lastScroll) {
        setIsScrollingDown(true);
        console.log("last" + lastScroll, "current" + currentScroll);
        console.log("down");
      }

      if (currentScroll == 0) {
        setNavClass("bg-custom-transparent -translates-y-0 h-12 md:h-20");
      }

      lastScroll = currentScroll;
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the scroll event listener when component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update the navClass based on scrolling direction
  useEffect(() => {
    setNavClass(
      isScrollingDown
        ? "bg-transparent -translate-y-[110%]"
        : "bg-custom-white shadow md:h-16 h-12"
    );
  }, [isScrollingDown]);

  // hamburder menu

  const [menuActive, setMenuActive] = useState(true);

  let menuClass = menuActive ? "-translate-y-full" : "-translate-y-0";

  let activateMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <Head>
        <title>Safe Space</title>
      </Head>

      <main
        style={{ scrollBehavior: "smooth" }}
        className="xl:w-4/5 w-full xl:m-auto h-auto"
      >
        <nav
          className={`fixed left-0 z-40 w-screen flex ${navClass} transition-all ease duration-200`}
        >
          <div className="h-full xl:w-[350px] pl-4 xl:pl-0 flex items-center justify-start z-20">
            <h2 className="md:text-5xl lg:ml-10 text-3xl font-bodoni text-medium-green">
              safe.
            </h2>
          </div>
          <div className="h-full flex-grow lg:flex items-center justify-end xl:justify-end xl:px-32 hidden z-20">
            <a
              id="nav_link"
              className="xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 cursor-pointer font-semibold font-poppins hover:text-dark-green transition-all duration-300"
              href="#"
            >
              Main
            </a>
            <a
              id="nav_link"
              className="xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 cursor-pointer font-semibold font-poppins hover:text-dark-green transition-all duration-300"
              href="#about"
            >
              About us
            </a>
            <a
              id="nav_link"
              className="xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 cursor-pointer font-semibold font-poppins hover:text-dark-green transition-all duration-300"
              href="#retreat"
            >
              What we do
            </a>
            <a
              id="nav_link"
              className="xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 cursor-pointer font-semibold font-poppins hover:text-dark-green transition-all duration-300"
              href="#agenda"
            >
              Agenda
            </a>
            <a
              id="nav_link"
              className="xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 cursor-pointer font-semibold font-poppins hover:text-dark-green transition-all duration-300"
              href="#gallery"
            >
              Gallery
            </a>
            <a
              id="nav_link"
              className="xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 cursor-pointer font-semibold font-poppins hover:text-dark-green transition-all duration-300"
              href="#faq"
            >
              FAQs
            </a>
          </div>
          <div className="flex-grow h-full lg:hidden flex justify-end z-20">
            <span className="md:w-28 md:h-full h-full w-14 flex items-center justify-center cursor-pointer">
              <svg
                onClick={() => {
                  activateMenu();
                }}
                xmlns="http://www.w3.org/2000/svg"
                height="36"
                width="36"
                viewBox="0 0 24 24"
                fill="#246532"
                id="menu"
              >
                <g data-name="Layer 2">
                  <g data-name="menu-2">
                    <rect
                      width="20"
                      height="20"
                      opacity="0"
                      transform="rotate(180 12 12)"
                    ></rect>
                    <circle cx="4" cy="12" r="1"></circle>
                    <rect
                      width="14"
                      height="2"
                      x="7"
                      y="11"
                      rx=".94"
                      ry=".94"
                    ></rect>
                    <rect
                      width="18"
                      height="2"
                      x="3"
                      y="16"
                      rx=".94"
                      ry=".94"
                    ></rect>
                    <rect
                      width="18"
                      height="2"
                      x="3"
                      y="6"
                      rx=".94"
                      ry=".94"
                    ></rect>
                  </g>
                </g>
              </svg>
            </span>
          </div>
          <div
            className={`absolute w-full h-80 pb-6 left-0 bg-custom-white   ${menuClass} flex items-center flex-col justify-end transition-all ease duration-300`}
          >
            <a
              onClick={() => {
                activateMenu();
              }}
              href="#"
              id="nav_link"
              className="font-poppins mb-2 font-semibold text-lg cursor-pointe hover:text-dark-green transition-all duration-300"
            >
              Main
            </a>
            <a
              onClick={() => {
                activateMenu();
              }}
              href="#about"
              id="nav_link"
              className="font-poppins mb-2 font-semibold text-lg cursor-pointer "
            >
              About Us
            </a>
            <a
              onClick={() => {
                activateMenu();
              }}
              href="#retreat"
              id="nav_link"
              className="font-poppins mb-2 font-semibold text-lg cursor-pointer "
            >
              What we do
            </a>
            <a
              onClick={() => {
                activateMenu();
              }}
              href="#agenda"
              id="nav_link"
              className="font-poppins mb-2 font-semibold text-lg cursor-pointer "
            >
              Agenda
            </a>
            <a
              onClick={() => {
                activateMenu();
              }}
              href="#gallery"
              id="nav_link"
              className="font-poppins mb-2 font-semibold text-lg cursor-pointer "
            >
              Gallery
            </a>
            <a
              onClick={() => {
                activateMenu();
              }}
              href="#faq"
              id="nav_link"
              className="font-poppins mb-2 font-semibold text-lg cursor-pointer "
            >
              FAQs
            </a>
          </div>
        </nav>

        <section
          id="do"
          className="w-full md:h-[650px]  xl:pt-0 md:pt-32 pt-20 h-auto md:grid grid-cols-2"
        >
          <div className="md:w-full md:h-full h-auto md:flex md:items-end">
            <div className="xl:h-4/5 w-full h-auto pl-4 xl:pl-16">
              <h1 className="xl:mb-4 font-semibold text-dark-green text-lg font-poppins text-center md:text-start mt-4 md:my-0">
                Bali Retreat 29 Sep - 5 Oct
              </h1>
              <h1 className="xl:text-[7rem] text-[5em] text-center md:text-start text-medium-green mt-0 mb-0 p-0 font-bodoni ">
                Safe space.
              </h1>
              <span className="w-full h-10 flex items-center justify-center md:justify-start">
                <h3 className="text-dark-green mr-2 font-semibold font-poppins text-[1.2rem]">
                  yoga,
                </h3>
                <h3 className="text-dark-green mr-2 font-semibold font-poppins text-[1.2rem]">
                  nature
                </h3>
                <h3 className="text-dark-green mr-2 font-semibold font-poppins text-[1.2rem]">
                  &
                </h3>
                <h3 className="text-dark-green mr-2 font-semibold font-sans text-[1.2rem]">
                  adventure
                </h3>
              </span>
              <div className="h-auto my-10 pr-6 w-full rounded-lg overflow-hidden m-0 md:hidden relative">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src="https://i.pinimg.com/736x/54/37/43/5437434bf11cefbcca1a7e8b8fc5e332.jpg"
                  alt=""
                />
              </div>
              <p className="text-dark-green font-poppins text-lg xl:w-4/5 my-2 pr-4 md:pr-0 text-center md:text-start">
                Welcome to Safe Space, your sanctuary for yoga and wellness. Our
                experienced instructors guide you on a transformative yoga
                journey, tailored to your needs. Immerse yourself in a serene
                studio, embracing relaxation and rejuvenation. Join our vibrant
                community and discover inner peace through yoga. Find your Safe
                Space and embark on a transformative experience.
              </p>
              <div className="w-4/5 mt-2 h-20 flex items-center md:m-0 m-auto ">
                <a href="#agenda" className="text-custom-white text-lg w-[250px] cursor-pointer mr-8 bg-light-green h-12 hover:bg-dark-green transition-colors ease duration-200 rounded-3xl flex items-center justify-center">
                  See the agenda
                </a>
                <button className="text-dark-green text-lg w-[250px] cursor-pointer border bg-lime h-12 rounded-3xl hover:bg-dark-green hover:text-custom-white transition-colors ease duration-200">
                  Book now
                </button>
              </div>
            </div>
          </div>

          <div className="md:w-full md:h-full hidden md:flex md:pr-4 xl:pl-0 items-end">
            <div className="relative md:w-full xl:w-4/5 h-full rounded-b-2xl overflow-hidden bg-green-200 md:ml-10">
              <img
                className="absolute w-full h-full object-cover "
                src="https://i.pinimg.com/736x/54/37/43/5437434bf11cefbcca1a7e8b8fc5e332.jpg"
                alt=""
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full xl:h-auto md:mt-40 h-auto mt-10 xl:px-16 px-4"
        >
          <h1
            id="title"
            className="md:text-[2.5em] text-[2em] md:mb-0 mb-10 font-bodoni text-medium-green"
          >
            About Us.
          </h1>
          <div className="w-full md:grid grid-cols-2">
            <div className="w-full h-full flex items-center md:justify-start justify-center">
              <div className="md:w-4/5 h-4/5 xl:h-full xl:py-10 overflow-hidden my-10 md:my-0">
                <img
                  className="md:w-full md:h-full h-[600px] object-cover"
                  src="https://i.pinimg.com/564x/c7/f8/ae/c7f8aeeef1d12069596d859de079c100.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-full flex items-center">
              <div className="w-full h-auto">
                <h1
                  id="about-title"
                  className="text-center md:text-[2.4rem] text-[2rem] mb-10 font-bodoni font-semibold text-dark-green"
                >
                  Our Birth
                </h1>
                <p className="lg:text-lg font-poppins max-w-[450px] md:max-w-[1000px] m-auto text-zinc-600 font-semibold">
                  Culpa occaecat ea dolor elit sit id consequat et aute minim ex
                  est duis dolor. Duis tempor id qui ex est duis amet ad commodo
                  consectetur do laborum adipisicing. Nostrud minim incididunt
                  incididunt adipisicing in.Culpa occaecat ea dolor elit sit id
                  consequat et aute minim ex est duis dolor. Duis tempor id qui
                  ex est duis amet ad commodo consectetur do laborum
                  adipisicing. Nostrud minim incididunt incididunt adipisicing
                  in.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:grid grid-cols-2 flex flex-col-reverse">
            <div className="w-full h-full flex items-center">
              <div className="w-full h-auto">
                <h1
                  id="about-title"
                  className="text-center md:text-[2.4rem] text-[2rem] mb-10 font-bodoni font-semibold text-dark-green"
                >
                  Our Journey
                </h1>
                <p className="lg:text-lg font-poppins max-w-[450px] md:max-w-[1000px] m-auto text-zinc-600 font-semibold">
                  Culpa occaecat ea dolor elit sit id consequat et aute minim ex
                  est duis dolor. Duis tempor id qui ex est duis amet ad commodo
                  consectetur do laborum adipisicing. Nostrud minim incididunt
                  incididunt adipisicing in.Culpa occaecat ea dolor elit sit id
                  consequat et aute minim ex est duis dolor. Duis tempor id qui
                  ex est duis amet ad commodo consectetur do laborum
                  adipisicing. Nostrud minim incididunt incididunt adipisicing
                  in.
                </p>
              </div>
            </div>
            <div className="w-full h-full flex items-center md:justify-end justify-center">
              <div className="md:w-4/5 h-4/5 xl:h-full overflow-hidden my-10 md:my-0">
                <img
                  className="md:w-full md:h-full h-[600px] object-cover"
                  src="https://i.pinimg.com/564x/71/bf/f5/71bff5c0d6da716a772443e5dfd403fb.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full md:grid grid-cols-2">
            <div className="w-full h-full flex items-center md:justify-start justify-center">
              <div className="md:w-4/5 h-4/5 xl:h-full xl:py-10 overflow-hidden my-10 md:my-0">
                <img
                  className="md:w-full md:h-full object-cover h-[600px]"
                  src="https://i.pinimg.com/564x/36/76/f2/3676f2155941f5217660f7679c44becf.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full h-full flex items-center">
              <div className="w-full h-auto">
                <h1
                  id="about-title"
                  className="text-center md:text-[2.4rem] text-[2rem] mb-10 font-bodoni font-semibold text-dark-green"
                >
                  Our Mission
                </h1>
                <p className="lg:text-lg font-poppins max-w-[450px] md:max-w-[1000px] m-auto text-zinc-600 font-semibold">
                  Culpa occaecat ea dolor elit sit id consequat et aute minim ex
                  est duis dolor. Duis tempor id qui ex est duis amet ad commodo
                  consectetur do laborum adipisicing. Nostrud minim incididunt
                  incididunt adipisicing in.Culpa occaecat ea dolor elit sit id
                  consequat et aute minim ex est duis dolor. Duis tempor id qui
                  ex est duis amet ad commodo consectetur do laborum
                  adipisicing. Nostrud minim incididunt incididunt adipisicing
                  in.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="retreat"
          className="w-full xl:h-auto mt-14 h-auto xl:px-16 px-4"
        >
          <h1
            id="title"
            className="md:text-[2.5em] text-[2em] md:mb-20 mb-14 font-bodoni text-medium-green"
          >
            This retreat will help you :
          </h1>
          <div className="w-full h-auto xl:mt-10 rounded-xl lg:grid grid-cols-3 grid-rows-3 bg-light-green">
            <div className="lg:p-10 p-6 border-b md:border-b-0 lg:border-light-green border-medium-green h-full flex w-full">
              <span className="mr-4 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  width="24"
                  fill="#FFF8ED"
                  viewBox="0 0 48 48"
                  id="leaf"
                >
                  <path d="M47.31 4.79C46.43 4.51 25.69-2 12.44 6.91-2.77 17.15 2.38 33.74 4.82 39.52 2.89 41.48.33 44 .3 44a1 1 0 0 0 .7 1.74c.5 0 .39.12 5.24-4.81 9.83 4 21.51 3.47 29.47-4.48C47 25.21 39.07 19.92 47.84 6.28a1 1 0 0 0-.53-1.49ZM34.29 35c-9.52 9.52-22.48 5.83-26.57 4.32 1.51-1.62 2.92-3.28 4.31-5l13.91 2.48a1 1 0 0 0 .36-2l-12.85-2.3c2-2.55 3.2-4.08 4.77-6 16.48 4 15.5 3.83 15.69 3.83a1 1 0 0 0 .24-2l-14.51-3.44c1.33-1.57 2.74-3.13 4.27-4.67 13.44 3.12 12.6 2.94 12.77 2.94a1 1 0 0 0 .23-2l-11.3-2.63c1.26-1.18 2.61-2.36 4.06-3.5 6.2 1 7.83 1.26 7.95 1.26a1 1 0 0 0 .16-2l-5.88-.94c.85-.61 1.72-1.21 2.64-1.81a1 1 0 0 0-1.08-1.64c-1 .62-1.87 1.25-2.76 1.88l.45-3.39a1 1 0 0 0-2-.26l-.71 5.33a62.875 62.875 0 0 0-3.81 3.26l.21-7.89a1 1 0 0 0-2-.06l-.24 9.93c-1.35 1.35-2.6 2.72-3.8 4.1l-.16-12a1 1 0 0 0-2 0l.19 14.31c-1.39 1.71-2.73 3.41-4.31 5.41L12 16.46a1 1 0 0 0-2 .08l.65 16.39c-1.39 1.72-2.8 3.38-4.29 5-8.6-22 7.42-40.07 39.12-31.58-8.02 13.32-.84 18.34-11.19 28.65Z"></path>
                </svg>
              </span>
              <p className="text-custom-white text-md font-poppins">
                Experiment being a vegetarian for one week and observe how your
                body feels.
              </p>
            </div>
            <div className="lg:p-10 p-6 border-b md:border-b-0 lg:border-light-green border-medium-green h-full flex w-full">
              <span className="mr-4 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  width="28"
                  viewBox="0 0 64 64"
                  id="favorite"
                >
                  <path
                    fill="#FFF8ED"
                    d="M32 53.372a8.584 8.584 0 0 1-4.195-1.087c-13.68-7.669-21.213-17.116-21.213-26.6 0-8.448 5.91-15.065 13.454-15.065A16.283 16.283 0 0 1 32 15.862a16.283 16.283 0 0 1 11.954-5.242c7.544 0 13.454 6.617 13.454 15.065 0 9.484-7.533 18.931-21.213 26.6A8.587 8.587 0 0 1 32 53.372ZM20.046 13.62c-5.96 0-10.454 5.187-10.454 12.065 0 8.351 6.989 16.868 19.679 23.982a5.613 5.613 0 0 0 5.458 0c12.69-7.114 19.679-15.631 19.679-23.982 0-6.878-4.494-12.065-10.454-12.065a13.339 13.339 0 0 0-10.7 5.433 1.457 1.457 0 0 1-1.254.669 1.5 1.5 0 0 1-1.246-.669 13.339 13.339 0 0 0-10.708-5.433Z"
                  ></path>
                </svg>
              </span>
              <p className="text-custom-white text-md font-poppins">
                Find happiness and energy by connecting with like-minded
                individuals who understand and accepr you
              </p>
            </div>
            <div className="lg:p-10 p-6 border-b md:border-b-0 lg:border-light-green border-medium-green h-full flex w-full">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="34"
                  fill="#FFF8ED"
                  width="34"
                  viewBox="0 0 82.22 96"
                  id="electric-plug"
                >
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <path d="M34.08 96A25.77 25.77 0 018.34 70.26v-14a1 1 0 012 0v14a23.74 23.74 0 1047.47 0V59.15a1 1 0 012 0V70.26A25.76 25.76 0 0134.08 96zM65.51 54.4H52.11a3.92 3.92 0 010-7.84h13.4a3.92 3.92 0 110 7.84zm-13.4-5.84a1.92 1.92 0 000 3.84h13.4a1.92 1.92 0 100-3.84z"></path>
                      <path d="M66.75,48.56H50.88A13.17,13.17,0,0,1,37.72,35.4v-13a1,1,0,0,1,1-1H78.91a1,1,0,0,1,1,1v13A13.17,13.17,0,0,1,66.75,48.56Zm-27-25.2v12A11.17,11.17,0,0,0,50.88,46.56H66.75A11.18,11.18,0,0,0,77.91,35.4v-12Z"></path>
                      <path d="M81.22,23.36H36.41a1,1,0,0,1,0-2H81.22a1,1,0,0,1,0,2Z"></path>
                      <path d="M50.7 23.36H45a1 1 0 01-1-1V3.86a3.86 3.86 0 117.72 0v18.5A1 1 0 0150.7 23.36zm-4.72-2H49.7V3.86a1.86 1.86 0 10-3.72 0zM72.65 23.36H66.93a1 1 0 01-1-1V3.86a3.86 3.86 0 017.72 0v18.5A1 1 0 0172.65 23.36zm-4.72-2h3.72V3.86a1.86 1.86 0 10-3.72 0zM58.81 60.15a4.74 4.74 0 01-4.74-4.74v-2a1 1 0 011-1h7.48a1 1 0 011 1v2A4.74 4.74 0 0158.81 60.15zM56.07 54.4v1a2.74 2.74 0 005.48 0v-1zM66.93 33.27H50.7a1 1 0 010-2H66.93a1 1 0 010 2zM66.93 38.65H50.7a1 1 0 010-2H66.93a1 1 0 010 2zM4.32 54.63a.94.94 0 01-.51-.14 1 1 0 01-.43-1.2l4.42-12H1a1 1 0 01-.9-.56 1 1 0 01.1-1L13.69 21.76a1 1 0 011.76.89L12 34.18l8.3-.09h0a1 1 0 01.76 1.65l-16 18.54A1 1 0 014.32 54.63zM3 39.25H9.23a1 1 0 01.94 1.34l-3 8.23 11-12.71-7.45.09a.92.92 0 01-.81-.4 1 1 0 01-.16-.89l2.24-7.51z"></path>
                    </g>
                  </g>
                </svg>
              </span>
              <p className="text-custom-white text-md font-poppins">
                Unplug for 7 days from daily rush, problem solving and
                achieving.
              </p>
            </div>
            <div className="lg:p-10 p-6 border-b md:border-b-0 lg:border-light-green border-medium-green h-full flex w-full">
              <span className="mr-4 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFF8ED"
                  height="28"
                  width="28"
                  viewBox="0 0 24 24"
                  id="people"
                >
                  <g data-name="Layer 2">
                    <g data-name="people">
                      <rect width="20" height="24" opacity="0"></rect>
                      <path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zM17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"></path>
                    </g>
                  </g>
                </svg>{" "}
              </span>
              <p className="text-custom-white text-md font-poppins">
                expand your perspective by learning new culture and networking
                with people from around the globe
              </p>
            </div>
            <div className="lg:p-10 p-6 border-b md:border-b-0 lg:border-light-green border-medium-green h-full flex w-full">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFF8ED"
                  height="38"
                  width="38"
                  viewBox="0 0 50 50"
                  id="wifi"
                >
                  <path d="M11.016 21.884c3.554-4.068 8.747-6.401 14.247-6.401 5.501 0 10.694 2.334 14.247 6.402a.995.995 0 0 0 1.41.096 1 1 0 0 0 .096-1.41c-3.933-4.505-9.674-7.088-15.753-7.088-6.078 0-11.819 2.582-15.753 7.085a1 1 0 0 0 1.506 1.316z"></path>
                  <path d="M35.367 25.849a.996.996 0 0 0 1.406.144 1 1 0 0 0 .145-1.406c-2.84-3.491-7.089-5.493-11.655-5.493-4.565 0-8.813 2.002-11.655 5.491a1 1 0 1 0 1.551 1.263c2.46-3.021 6.144-4.755 10.104-4.755 3.962.001 7.645 1.734 10.104 4.756z"></path>
                  <path d="M31.124 29.723a1.002 1.002 0 0 0 1.641-1.145c-1.693-2.426-4.497-3.874-7.502-3.874-3.05 0-5.877 1.482-7.564 3.964a1.001 1.001 0 0 0 1.655 1.125c1.314-1.935 3.523-3.089 5.91-3.089 2.35 0 4.542 1.129 5.86 3.019z"></path>
                  <ellipse cx="25.263" cy="33.514" rx="2" ry="1.969"></ellipse>
                </svg>{" "}
              </span>
              <p className="text-custom-white text-md font-poppins">
                feel connected to nature by walking up to the sounds of birds
                and the scent of Baines flowers everyday.
              </p>
            </div>
            <div className="lg:p-10 p-6 border-b md:border-b-0 lg:border-light-green border-medium-green h-full flex w-full">
              <span className="mr-4 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 96 96"
                  id="yoga"
                  height="28"
                  width="28"
                  fill="#FFF8ED"
                >
                  <path d="M95.59,81.83l-4.65-3.37a2.5,2.5,0,0,0-1.33-4.78l-3.48.59L78.65,63.82a17,17,0,0,1-2.55-5.36L71.18,40.62a10.18,10.18,0,0,0-9.77-7.45h-6.8a1.93,1.93,0,0,1-1.92-1.93V28.55a12.36,12.36,0,0,0,5.42-7.91,3.65,3.65,0,0,0,.26-7.29V11.16A10.61,10.61,0,0,0,37.15,11v2.33a3.65,3.65,0,0,0,.26,7.29,12.35,12.35,0,0,0,5.43,7.91v2.68a1.93,1.93,0,0,1-1.93,1.93H34.59a10.18,10.18,0,0,0-9.77,7.45L19.9,58.46a17,17,0,0,1-2.55,5.36L9.87,74.27l-3.48-.59a2.5,2.5,0,0,0-1.33,4.78L.41,81.83a1,1,0,0,0-.27,1.32L.9,84.42a8.28,8.28,0,0,0,5.17,3.76l1.12.25a1,1,0,0,0,1-.29l.59-.64a7.4,7.4,0,0,0,7.39,7.89H79.52a7.4,7.4,0,0,0,7.35-8.31l1,1.06a1,1,0,0,0,1,.29l1.11-.25a8.27,8.27,0,0,0,5.18-3.76l.76-1.27A1,1,0,0,0,95.59,81.83ZM58.37,15.36a1.65,1.65,0,0,1,0,3.26C58.38,18.38,58.37,18.53,58.37,15.36ZM35.76,17a1.66,1.66,0,0,1,1.39-1.63c0,2.46,0,3,0,3.26A1.65,1.65,0,0,1,35.76,17ZM47.82,2.85a1.93,1.93,0,0,0,0-.24,8.61,8.61,0,0,1,8.56,8.61v2a9,9,0,0,1-9.9-5.07A10.87,10.87,0,0,0,47.82,2.85Zm-2,0a9.06,9.06,0,0,1-6.67,8.72A8.59,8.59,0,0,1,45.82,2.84Zm-6.35,17.8c-.4-1.54-.32-2.25-.32-7a10.9,10.9,0,0,0,6-3.63c3.07,5.14,8.38,5,6.4,5a1,1,0,0,0,0,2h.88A1,1,0,0,0,53,15.21a10.13,10.13,0,0,0,3.34,0c0,2.82.08,3.86-.31,5.45a10,10,0,0,1-5.37,6.7,7.49,7.49,0,0,1-7.84-1.23h0A10.54,10.54,0,0,1,39.47,20.64Zm5.37,10.59V29.47a9.22,9.22,0,0,0,5.85,0v1.77a4,4,0,0,0,3,3.83l-.55,4.22a5.34,5.34,0,0,1-10.59,0L42,35A3.94,3.94,0,0,0,44.84,31.23ZM34.75,43.85a1,1,0,0,0,.36-.64l1-8H40l.57,4.38a7.35,7.35,0,0,0,14.57,0l.57-4.38h3.75l1,8a1,1,0,0,0,.36.64c4.19,3.45,3.39,10.89-1.9,10.92H36.65a4.39,4.39,0,0,1-4.17-2.85A7.34,7.34,0,0,1,34.75,43.85Zm2.31,31.49H58.59L60,80.56H35.61Zm-3.53,5.22c-19,0-17.61,0-18.44.08.43-.47-1.58,1.58,11.35-11.53a16.53,16.53,0,0,0,4.15-7.2l1.84-6.7a6.5,6.5,0,0,0,2.45,1.26c1.22,5.52,2.63,9.78.92,15.93C35,75.45,34.37,77.52,33.53,80.56Zm4.84-17.18H57.28a24,24,0,0,0,.76,10H37.61A24,24,0,0,0,38.37,63.38Zm19.26-2c-20.67,0-19.6,0-19.62-.05l-1-4.59H58.66C58.57,57.17,58.78,56.22,57.63,61.38Zm2.22,11a22,22,0,0,1-.28-10.52l1.19-5.38A6.47,6.47,0,0,0,63.5,55l1.91,6.95a16.48,16.48,0,0,0,4.15,7.2C81.63,81.36,80.48,80.18,81,80.7c-1-.2,0-.14-18.85-.14l-1.8-6.49a.08.08,0,0,0,0,0Zm-52.77,14-.55-.13a6.22,6.22,0,0,1-3.91-2.84l-.29-.48L8,78.81A1,1,0,0,0,7.63,77l-1.76-.4a.49.49,0,0,1-.38-.48.49.49,0,0,1,.57-.48l4.09.68a1,1,0,0,0,1-.4L19,65a18.64,18.64,0,0,0,2.86-6l4.92-17.84a8.16,8.16,0,0,1,7.39-6l-1,7.38a9.33,9.33,0,0,0-3.08,6.94,8.86,8.86,0,0,0,.8,3.75l-2.23,8.12A14.47,14.47,0,0,1,25,67.7C11.62,81.31,15.7,77,7.08,86.36Zm9,7a5.42,5.42,0,0,1,0-10.83h16l.93,2.22a5,5,0,0,0,3.75,3L47,89.56c0,2-.12,2.86.37,3.83ZM47,87.52,37.17,85.8A3,3,0,0,1,34.91,84l-.6-1.44H47.37C46.88,83.54,47,84.09,47,87.52Zm6.17,5.87H50.59A1.59,1.59,0,0,1,49,91.8V84.15a1.6,1.6,0,0,1,1.23-1.55,18.53,18.53,0,0,1,2.94,0,3.54,3.54,0,0,0-.37,1.59C52.8,92.2,52.67,92.39,53.17,93.39Zm26.35,0H56.39A1.59,1.59,0,0,1,54.8,91.8V84.15a1.6,1.6,0,0,1,1.59-1.59H79.52a5.42,5.42,0,0,1,0,10.83Zm13.86-10a6.22,6.22,0,0,1-3.91,2.84l-.55.13C80.27,77,84.31,81.23,71,67.7a14.34,14.34,0,0,1-3.65-6.32L65,52.77a9.66,9.66,0,0,0,.59-3.29,9.33,9.33,0,0,0-3.08-6.94l-1-7.37a8.16,8.16,0,0,1,7.74,6L74.17,59A18.64,18.64,0,0,0,77,65l7.84,11a1,1,0,0,0,1,.4l4.09-.68a.49.49,0,0,1,.19,1l-1.76.4A1,1,0,0,0,88,78.81l5.66,4.1Z"></path>
                  <path d="M43.94 17a1 1 0 000-2h-.88a1 1 0 000 2zM50.35 24a1 1 0 00-1.59-1.21 1.35 1.35 0 01-2 .07 1 1 0 10-1.52 1.3A3.3 3.3 0 0050.35 24zM53.21 11.93a1 1 0 001.22-.73A1 1 0 0053.7 10 9.06 9.06 0 0149 7a1 1 0 00-1.41-.13 1 1 0 00-.13 1.41A11.17 11.17 0 0053.21 11.93z"></path>
                </svg>
              </span>
              <p className="text-custom-white text-md font-poppins">
                deepen your knowledge of yoga and meditation while connecting
                with mentors who have guided thousands of individuals through
                transformative journeys.
              </p>
            </div>
            <div className="lg:p-10 p-6 border-b md:border-b-0 lg:border-light-green border-medium-green h-full flex w-full">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFF8ED"
                  height="34"
                  width="34"
                  enable-background="new 0 0 50 50"
                  viewBox="0 0 50 50"
                  id="night-stars"
                >
                  <path
                    fill="#FFF8ED"
                    stroke-width="20"
                    d="M40.3 20.6c-5.1-3-6.9-7.8-7.4-13.5 0-.5-1.3.2-1.3.6-.5 5-.6 9.9-6.2 12.3-1.7.7-3.2 1.6-4.7 2.7-.2.1-.6.5-.2.6 1.4.3.9.2 2.4.1 3.4-.3 5.1 2.1 6.5 4.7 1.5 2.7.9 6.4 2.5 8.8.1.2.5 0 .6 0 1.2-.6 1.4-.9 1.5-2.4.2-2.3 1-4.6 2-6.7 1.7-3.4 5.1-3.9 8-5.4.1 0 1-.6.6-.8C43.2 21.1 41.8 21.1 40.3 20.6c-.4-.1-1.5.8-1.2.9 1.3.4 1 .3 2.3.5 2 .3-1.5 1.4-1.8 1.5-1.1.6-2.6 1.6-3.5 2.6-1.3 1.6-2.4 3.5-2.8 5.6-.3 1.3-.8 3.5-.5 4.1-.7-1.1-.7-4-1-5.4-.6-2.9-2.5-5.8-4.9-7.4-.6-.4-1.4-.4-2.1-.5-2.9-.4.4-1.7 1.7-2.3 5.3-2.3 5.7-8.1 6.3-13.1-.4.2-.9.4-1.3.6.5 5.7 2.4 10.8 7.5 13.8C39.5 21.7 40.6 20.8 40.3 20.6zM18.8 28.7c-2.8-1.8-3.7-4.7-3.9-7.8-.1-.7-1.3-1.3-1.4-.4-.2 1.7-.4 3.5-.8 5.1-.6 2.2-4 3-5.6 4.3-.6.5 0 1.2.6 1.2 3.1.3 4.3 1.3 5.3 4.3.4 1.2.1 2.7.8 3.8.2.4.6.7 1.1.4.9-.4.8-1.7.9-2.6.6-3.7 2.7-5 5.9-6.5.6-.3-.1-1.1-.4-1.2-1.1-.4-1.2-.3-2.6-.7-.9-.3-.8 1-.1 1.3.7.2 2 .5 2.6.7-.1-.4-.3-.8-.4-1.2-2 .9-3.7 1.5-5 3.4-.6.8-1.2 5.4-1.8 5.7.4.1.7.3 1.1.4-1.2-1.9-.7-4.6-2-6.6-1.6-2.5-2.9-2.3-5.6-2.6C7.6 30.2 7.8 30.6 8 31c1.8-1.4 3.8-2 5.4-3.7 1.3-1.4 1.3-4.6 1.5-6.4-.5-.1-.9-.3-1.4-.4.3 3.9 1.5 7.1 4.9 9.3C19.2 30.3 19.5 29.2 18.8 28.7zM8.2 14.2c1.6 0 3.2 0 4.8 0 .7 0 1.5-1 .5-1-1.6 0-3.2 0-4.8 0C8 13.2 7.2 14.2 8.2 14.2L8.2 14.2zM12.3 10.4c.8 0 1.5 0 2.3 0 .1 0 .7-.1.5-.3-.2-.2-.7-.2-.9-.2-.8 0-1.5 0-2.3 0-.1 0-.7.1-.5.3C11.6 10.4 12.1 10.4 12.3 10.4L12.3 10.4zM17.3 12.5c1.4 0 2.9 0 4.3 0 .3 0 .7-.2.9-.4.1-.1.4-.3.1-.3-1.4 0-2.9 0-4.3 0-.3 0-.7.2-.9.4C17.3 12.3 17 12.5 17.3 12.5L17.3 12.5zM15 15.7c.7 0 1.5 0 2.2 0 .7 0 1.4-1 .4-1-.7 0-1.5 0-2.2 0C14.7 14.7 14 15.7 15 15.7L15 15.7zM4 25.2c.7 0 1.4 0 2.1 0 .1 0 .7-.1.5-.3-.2-.2-.7-.2-.9-.2-.7 0-1.4 0-2.1 0-.1 0-.7.1-.5.3C3.2 25.2 3.7 25.2 4 25.2L4 25.2zM1.4 28.3c.9 0 1.7 0 2.6 0 .3 0 .3-.2.1-.4-.3-.2-.7-.3-1-.3-.9 0-1.7 0-2.6 0-.3 0-.3.2-.1.4C.7 28.2 1.1 28.3 1.4 28.3L1.4 28.3zM19.4 37.1c.7 0 1.3 0 2 0 .8 0 1.1-1.3.2-1.3-.7 0-1.3 0-2 0C18.7 35.8 18.4 37.1 19.4 37.1L19.4 37.1zM22 40.1c1.3 0 2.6 0 3.9 0 .3 0 .7 0 1-.3.2-.2-.2-.3-.3-.3-1.3 0-2.6 0-3.9 0-.3 0-.7 0-1 .3C21.4 40 21.8 40.1 22 40.1L22 40.1zM17.7 43.2c.9 0 1.8 0 2.6 0 .4 0 .8-.2.9-.6.1-.4-.2-.7-.6-.7-.9 0-1.8 0-2.6 0-.4 0-.8.2-.9.6C17.1 42.9 17.4 43.2 17.7 43.2L17.7 43.2zM37.1 37.2c.7 0 1.4 0 2.2 0 .3 0 .7 0 1-.1.3-.1-.2-.1-.3-.1-.7 0-1.4 0-2.2 0-.3 0-.7 0-1 .1C36.5 37.1 37 37.2 37.1 37.2L37.1 37.2zM41.4 35c1.5 0 3 0 4.5 0 .7 0 .2-1.4-.4-1.4-1.5 0-3 0-4.5 0C40.3 33.6 40.8 35 41.4 35L41.4 35zM39.5 32.4c1 0 2 0 3 0 .1 0-.4-.3-.4-.3-.2-.1-.6-.3-.9-.3-1 0-2 0-3 0-.1 0 .4.3.4.3C38.9 32.2 39.2 32.4 39.5 32.4L39.5 32.4zM47.1 31.8c.7 0 1.4 0 2.2 0 .9 0 .2-1.2-.4-1.2-.7 0-1.4 0-2.2 0C45.7 30.6 46.4 31.8 47.1 31.8L47.1 31.8zM45.1 18.3c.8 0 1.6 0 2.4 0 .3 0 .4-.2.1-.3-.3-.2-.7-.4-1-.4-.8 0-1.6 0-2.4 0-.3 0-.4.2-.1.3C44.4 18.1 44.8 18.3 45.1 18.3L45.1 18.3z"
                  ></path>
                  <path
                    fill="#1D1D1B"
                    d="M39.5,15.1c1.6,0,3.1,0,4.7,0c0,0-0.3-1.3-0.7-1.3c-1.6,0-3.1,0-4.7,0C38.8,13.7,39.1,15.1,39.5,15.1 L39.5,15.1z"
                  ></path>
                </svg>
              </span>
              <p className="text-custom-white text-md font-poppins">
                practise listening to your inner voice and allow yourself to
                pursue what you truly desire.
              </p>
            </div>
            <div className="lg:p-10 p-6 border-b md:border-b-0 lg:border-light-green border-medium-green h-full flex w-full">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  width="28"
                  fill="#FFF8ED"
                  viewBox="0 0 256 256"
                  id="smiley-smile"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <circle
                    cx="128"
                    cy="128"
                    r="96"
                    fill="none"
                    stroke="#FFF8ED"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="10"
                  ></circle>
                  <path
                    fill="none"
                    stroke="#FFF8ED"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="10"
                    d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
                  ></path>
                  <circle cx="92" cy="108" r="16"></circle>
                  <circle cx="164" cy="108" r="16"></circle>
                </svg>
              </span>
              <p className="text-custom-white text-md font-poppins">
                adopt a new routine that creates more calm, ease and joy in your
                life and take them home with you.
              </p>
            </div>
            <div className="lg:p-10 p-6  relative lg:h-full flex w-full h-32">
              <span className="mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="34"
                  width="34"
                  fill="#FFF8ED"
                  viewBox="0 0 24 24"
                  id="star"
                >
                  <path
                    fill="none"
                    stroke="#FFF8ED"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.5 11 4.5 2.5-1.5-5 4-3.5-5-.5-2-4-2 4-5 .5 4 3.5-1.5 5z"
                  ></path>
                  <path
                    fill="none"
                    stroke="#FFF8ED"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.5 7C.25 11.13.5 19.5.5 19.5l5-2s-.12 3.94 2 6c0 0 .7-7.44 5-10.5"
                  ></path>
                </svg>
              </span>
              <p className="text-custom-white text-md font-poppins">
                enjoy unique blend of relaxation, playful learning and
                unforgettable island adventures
              </p>
              <div className="absolute flex items-center justify-center -bottom-8 bg-lime right-4 w-60 h-16 border-8 cursor-pointer hover:bg-dark-green hover:text-lime transition-all ease duration-150 border-custom-white rounded-3xl">
                <h1 className="text-[1.2rem] font-poppins ">See the agenda</h1>
              </div>
            </div>
          </div>
        </section>

        <section
          id="agenda"
          className="w-full xl:h-auto h-auto xl:px-16 px-4 relative mt-10"
        >
          <h1
            id="title"
            className="md:text-[2.5em] text-[2em] md:mb-16 mb-14 mt-20 font-bodoni text-medium-green"
          >
            Agenda for the week :
          </h1>
          <div className="h-auto w-full">
            <div
              className={`w-full h-auto border bg-lime mt-6 rounded-lg md:px-10 px-4 transition-all ease-in duration-1000`}
            >
              <div
                className="w-full cursor-pointer h-16 md:h-24 flex items-center justify-between border-black"
                onClick={() => {
                  handleItemOne();
                }}
              >
                <h2 className="md:text-[1.3rem] text-lg leading-7 font-poppins text-dark-green">
                  Day 1. Mindful Monday
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 bg-medium-green hover:bg-dark-green rounded-full flex item justify-center ${chevronOne} transition-all ease duration-500`}
                >
                  <svg
                    fill="#FFF8ED"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${itemOneClass}`}
              >
                <ul>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 8am - 9am: Morning Sun Salutations
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 10am - 11am: Power Vinyasa Yoga
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 3pm - 4pm: Yoga for Strength and Flexibility
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 6pm - 7pm: Restorative Yoga and Meditation
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-auto border bg-lime mt-6 rounded-lg md:px-10 px-4">
              <div
                onClick={() => {
                  handleItemTwo();
                }}
                className="w-full cursor-pointer h-16 md:h-24 flex items-center justify-between border-black"
              >
                <h2 className="md:text-[1.3rem] text-lg leading-7 font-poppins text-dark-green">
                  Day 2. Tranquil Tuesday
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 bg-medium-green hover:bg-dark-green rounded-full flex item justify-center ${chevronTwo} transition-all ease duration-500`}
                >
                  <svg
                    fill="#FFF8ED"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${itemTwoClass}`}
              >
                <ul>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 8am - 9am: Gentle Yoga for Relaxation
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 10am - 11am: Mindfulness Meditation Session
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 3pm - 4pm: Yin Yoga for Deep Stretching
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 6pm - 7pm: Yoga Nidra for Deep Relaxation
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-auto border bg-lime mt-6 rounded-lg md:px-10 px-4">
              <div
                onClick={() => {
                  handleItemThree();
                }}
                className="w-full cursor-pointer h-16 md:h-24 flex items-center justify-between border-black"
              >
                <h2 className="md:text-[1.3rem] text-lg leading-7 font-poppins text-dark-green">
                  Day 3. Wellness Wednesday
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 bg-medium-green hover:bg-dark-green rounded-full flex item justify-center ${chevronThree} transition-all ease duration-500`}
                >
                  <svg
                    fill="#FFF8ED"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${itemThreeClass}`}
              >
                <ul>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 8am - 9am: Hatha Yoga for Balance and Alignment
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 10am - 11am: Core Strengthening Yoga
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 3pm - 4pm: Chair Yoga for Office Workers
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 6pm - 7pm: Guided Meditation for Inner Peace
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-auto border bg-lime mt-6 rounded-lg md:px-10 px-4">
              <div
                className="w-full cursor-pointer h-16 md:h-24 flex items-center justify-between border-black"
                onClick={() => {
                  handleItemFour();
                }}
              >
                <h2 className="md:text-[1.3rem] text-lg leading-7 font-poppins text-dark-green">
                  Day 4. Thriving Thursday
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 bg-medium-green hover:bg-dark-green rounded-full flex item justify-center ${chevronFour} transition-all ease duration-500`}
                >
                  <svg
                    fill="#FFF8ED"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${itemFourClass}`}
              >
                <ul>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 8am - 9am: Vinyasa Flow Yoga
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 10am - 11am: Yoga Sculpt for Strength and Cardio
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 3pm - 4pm: Pranayama and Breathwork Session
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 6pm - 7pm: Dynamic Yoga Flow
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-auto border bg-lime mt-6 rounded-lg md:px-10 px-4">
              <div
                className="w-full cursor-pointer h-16 md:h-24 flex items-center justify-between border-black"
                onClick={() => {
                  handleItemFive();
                }}
              >
                <h2 className="md:text-[1.3rem] text-lg leading-7 font-poppins text-dark-green">
                  Day 5. Flow and Release Friday
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 bg-medium-green hover:bg-dark-green rounded-full flex item justify-center ${chevronFive} transition-all ease duration-500`}
                >
                  <svg
                    fill="#FFF8ED"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${itemFiveClass}`}
              >
                <ul>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 8am - 9am: Vinyasa Flow Yoga
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 10am - 11am: Yoga for Back and Shoulders
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 3pm - 4pm: Yoga Stretch and Relaxation
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 6pm - 7pm: Yin Yoga for Deep Release
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-auto border bg-lime mt-6 rounded-lg md:px-10 px-4">
              <div
                className="w-full cursor-pointer h-16 md:h-24 flex items-center justify-between border-black"
                onClick={() => {
                  handleItemSix();
                }}
              >
                <h2 className="md:text-[1.3rem] text-lg leading-7 font-poppins text-dark-green">
                  Day 6. Strength and Balance Saturday
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 bg-medium-green hover:bg-dark-green rounded-full flex item justify-center ${chevronSix} transition-all ease duration-500`}
                >
                  <svg
                    fill="#FFF8ED"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${itemSixClass}`}
              >
                <ul>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 8am - 9am: Power Yoga for Strength
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 10am - 11am: Yoga Sculpt and Conditioning
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 3pm - 4pm: Balance and Stability Yoga
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 6pm - 7pm: Core Strength Yoga
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-auto border bg-lime mt-6 rounded-lg md:px-10 px-4">
              <div
                className="w-full cursor-pointer h-16 md:h-24 flex items-center justify-between border-black"
                onClick={() => {
                  handleItemSeven();
                }}
              >
                <h2 className="md:text-[1.3rem] text-lg leading-7 font-poppins text-dark-green">
                  Day 7. Serene Sunday
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 bg-medium-green hover:bg-dark-green rounded-full flex item justify-center ${chevronSeven} transition-all ease duration-500`}
                >
                  <svg
                    fill="#FFF8ED"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${itemSevenClass}`}
              >
                <ul>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 8am - 9am: Gentle Morning Yoga
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 10am - 11am: Restorative Yoga and Meditation
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 3pm - 4pm: Yoga Nidra for Deep Relaxation
                  </li>
                  <li className="md:text-lg mb-1 font-sans text-medium-green">
                    - &nbsp; 6pm - 7pm: Candlelight Yoga and Relaxation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="hosts"
          className="w-full xl:h-auto md:mt-20 h-auto xl:px-16 px-4"
        >
          <h1
            id="title"
            className="md:text-[2.5em] text-[2em] md:mb-16 mb-14 mt-16 font-bodoni text-medium-green"
          >
            Your hosts :
          </h1>
          <div className="w-full h-auto md:grid grid-cols-2">
            <div className="w-full h-auto">
              <div className="lg:w-[350px] w-[300px] h-[300px] m-auto md:m-0 lg:h-[350px] rounded-full overflow-hidden">
                <img
                  src="https://i.pinimg.com/236x/51/ae/16/51ae16a7c2af830886f18e948a9f3d1a.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="md:text-3xl text-2xl text-center mt-4 md:mt-6 md:text-start text-medium-green font-poppins">
                  Anna
                </h1>
                <p className="px-10 pb-6 md:p-0 md:text-[1.2rem] text-center md:text-start md:w-4/5 mt-4 text-dark-green font-sans">
                  Incididunt quis laboris duis dolor dolor. Laborum veniam
                  ullamco duis id laborum eu duis cupidatat consequat laboris
                  adipisicing voluptate. Qui labore sit proident consequat
                  aliquip. dolore nulla voluptate id. Pariatur ullamco
                  consectetur minim aliqua voluptate nisi veniam aliqua nisi ut
                  ex Lorem qui. Laboris proident sint velit elit enim
                  exercitation ea.
                </p>
              </div>
            </div>
            <div className="w-full h-auto">
              <div className="lg:w-[350px] w-[300px] h-[300px] m-auto md:m-0 lg:h-[350px] rounded-full overflow-hidden">
                <img
                  src="https://i.pinimg.com/236x/b3/77/cd/b377cdb7d3ada3ea87b10c2a032d141a.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="md:text-3xl text-2xl text-center mt-4 md:mt-6 md:text-start text-medium-green font-poppins">
                  Viktoria
                </h1>
                <p className="px-10 md:p-0 md:text-[1.2rem] text-center md:text-start md:w-4/5 mt-4 text-dark-green font-sans">
                  Et officia voluptate elit amet consectetur ut veniam aute non
                  non adipisicing deserunt ullamco. Ea adipisicing tempor
                  reprehenderit amet adipisicing laborum ipsum do officia
                  consectetur consectetur commodo proident. Nisi labore Lorem
                  culpa est qui sit officia. Amet aliqua fugiat tempor ex
                  reprehenderit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="w-full xl:h-auto md:mt-0 mt-10 h-auto md:pt-16 xl:px-16 px-4"
        >
          <div className="w-full h-auto flex items-center justify-between mb-10">
            <h1
              id="title"
              className="md:text-[2.5em] flex-grow text-[2em] mt-10 md:mb-12 font-bodoni text-medium-green"
            >
              Gallery :
            </h1>
            <div className="w-28 h-16 flex md:items-center items-end justify-evenly">
              <button
                onClick={() => {
                  scrollLeft();
                }}
                className="md:h-10 md:w-10 h-8 w-8 cursor-pointer flex items-center justify-center border border-light-green rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  fill="#4D6754"
                  id="chevron"
                >
                  <path d="M13.891 17.418a.697.697 0 0 1 0 .979.68.68 0 0 1-.969 0l-7.83-7.908a.697.697 0 0 1 0-.979l7.83-7.908a.68.68 0 0 1 .969 0 .697.697 0 0 1 0 .979L6.75 10l7.141 7.418z"></path>
                </svg>{" "}
              </button>
              <button
                onClick={() => {
                  scrollRight();
                }}
                className="md:h-10 md:w-10 h-8 w-8 cursor-pointer flex items-center justify-center border border-light-green rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  width="20"
                  height="20"
                  fill="#4D6754"
                  id="chevron"
                >
                  <path d="M13.25 10 6.109 2.58a.697.697 0 0 1 0-.979.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0 .697.697 0 0 1 0-.979L13.25 10z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            style={{ scrollBehavior: "smooth" }}
            id="carousel"
            className="whitespace-nowrap flex w-full overflow-hidden"
          >
            <div className="inline-block md:mr-6 mr-3 min-w-[325px] lg:min-w-[410px] overflow-hidden lg:max-h-[650px] rounded-3xl h-auto">
              <img
                src="https://i.pinimg.com/564x/3c/58/ce/3c58ce1d083b220cf69ee7bb71942e0e.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition ease duration-500 cursor-pointer"
              />
            </div>
            <div className="inline-block md:mr-6 mr-3 min-w-[325px] lg:min-w-[410px] overflow-hidden lg:max-h-[650px] rounded-3xl h-auto">
              <img
                src="https://i.pinimg.com/564x/98/e4/7c/98e47cf38e9419e1209efe309ff2a5c1.jpg"
                alt=""
                className="h-full object-cover hover:scale-105 transition ease duration-500 cursor-pointer w-full"
              />
            </div>
            <div className="inline-block md:mr-6 mr-3 min-w-[325px] lg:min-w-[410px] overflow-hidden lg:max-h-[650px] rounded-3xl h-auto">
              <img
                src=" https://i.pinimg.com/564x/33/fa/14/33fa1476b0dc26f2fb2e8bd07bfa1ccb.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition ease duration-500 cursor-pointer"
              />
            </div>

            <div className="inline-block md:mr-6 mr-3 min-w-[325px] lg:min-w-[410px] overflow-hidden lg:max-h-[650px] rounded-3xl h-auto">
              <img
                src="https://i.pinimg.com/564x/24/06/52/240652b228af9ab29d9335cb325364fd.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition ease duration-500 cursor-pointer"
              />
            </div>
            <div className="inline-block md:mr-6 mr-3 min-w-[325px] lg:min-w-[410px] overflow-hidden lg:max-h-[650px] rounded-3xl h-auto">
              <img
                src="https://i.pinimg.com/564x/c7/37/1c/c7371c8ad71ad47686d3ee679155fb76.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition ease duration-500 cursor-pointer"
              />
            </div>
            <div className="inline-block md:mr-6 mr-3 min-w-[325px] lg:min-w-[410px] overflow-hidden lg:max-h-[650px] rounded-3xl h-auto">
              <img
                src="https://i.pinimg.com/564x/7e/82/cd/7e82cdcacd71648c721dad7b67d8c3cf.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition ease duration-500 cursor-pointer"
              />
            </div>
            <div className="inline-block md:mr-6 mr-3 min-w-[325px] lg:min-w-[410px] overflow-hidden lg:max-h-[650px] rounded-3xl h-auto">
              <img
                src="https://i.pinimg.com/564x/95/54/56/9554568668f3879266d4a0531c335178.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition ease duration-500 cursor-pointer"
              />
            </div>
            <div className="inline-block md:mr-6 mr-3 min-w-[325px] lg:min-w-[410px] overflow-hidden lg:max-h-[650px] rounded-3xl h-auto">
              <img
                src="https://i.pinimg.com/564x/fb/59/09/fb5909f2024f57488c2aed36727db6a1.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition ease duration-500 cursor-pointer"
              />
            </div>
            <div className="inline-block md:mr-6 mr-3 min-w-[325px] lg:min-w-[410px] overflow-hidden lg:max-h-[650px] rounded-3xl h-auto">
              <img
                src="https://i.pinimg.com/564x/3f/02/e4/3f02e4611e6235949cb7e9ccaf16e14d.jpg"
                alt=""
                className="w-full h-full object-cover hover:scale-105 transition ease duration-500 cursor-pointer"
              />
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="w-full xl:h-auto md:pt-16 mt-0 h-auto xl:px-16 px-4"
        >
          <h1
            id="title"
            className="md:text-[2.5em] text-[1.5em] mt-10 mb-14 font-bodoni text-medium-green"
          >
            FAQS:
          </h1>
          <div className="h-auto w-full">
            <div
              className={`w-full h-auto border bg-transparent border-green-600 mt-6 rounded-lg md:px-10 px-4  transition-all ease-in duration-1000`}
            >
              <div
                className="w-full cursor-pointer h-16 md:h-24 flex items-center justify-between border-black"
                onClick={() => {
                  faqhandleItemOne();
                }}
              >
                <h2 className="md:text-[1.3rem] text-md leading-7 font-poppins text-dark-green">
                  what's included?
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 border border-green-600 rounded-full flex item justify-center ${faqchevronOne} transition-all ease duration-500`}
                >
                  <svg
                    fill="#51a54c"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${faqitemOneClass}`}
              >
                <ul style={{ listStyleType: "decimal" }}>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; A zen den filled with good vibes, where you can
                    find your inner peace and unleash your yoga superpowers.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Yoga classes that will make you feel like a
                    graceful ninja floating on a cloud of tranquility.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; A yoga wonderland equipped with mats, props, and a
                    sprinkle of magic to enhance your practice.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Friendly yogi tribes ready to share laughter,
                    inspiration, and a few not-so-serious yoga challenges.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-auto border bg-transparent border-green-600 mt-6 rounded-lg md:px-10 px-4">
              <div
                onClick={() => {
                  faqhandleItemTwo();
                }}
                className="w-full h-16 md:h-24 flex cursor-pointer items-center justify-between border-black"
              >
                <h2 className="md:text-[1.3rem] text-md leading-7 font-poppins text-dark-green">
                  what's not included?
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 border border-green-600  rounded-full flex item justify-center ${faqchevronTwo} transition-all ease duration-500`}
                >
                  <svg
                    fill="#51a54c"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${faqitemTwoClass}`}
              >
                <ul>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Boring stuff! We promise to keep the energy high
                    and the boredom low.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Negative vibes. Leave those at the door and step
                    into a positive and uplifting atmosphere.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Limits! Embrace the freedom to explore, challenge
                    yourself, and break through barriers.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Stress or worries. Get ready to unwind, relax, and
                    find your Zen.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Time machines. Unfortunately, we haven't mastered
                    time travel (yet!).
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-auto border bg-transparent border-green-600 mt-6 rounded-lg md:px-10 px-4">
              <div
                onClick={() => {
                  faqhandleItemThree();
                }}
                className="w-full h-16 md:h-24 flex items-center justify-between border-black cursor-pointer"
              >
                <h2 className="md:text-[1.3rem] text-md leading-7 font-poppins text-dark-green">
                  How to get here?
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 border border-green-600  rounded-full flex item justify-center ${faqchevronThree} transition-all ease duration-500`}
                >
                  <svg
                    fill="#51a54c"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${faqitemThreeClass}`}
              >
                <ul>
                  <li className="md:text-lg  md:mb-1 font-sans text-medium-green">
                    - &nbsp; Ride a friendly dolphin and follow the waves to our
                    sunny shores.
                  </li>
                  <li className="md:text-lg  md:mb-1 font-sans text-medium-green">
                    - &nbsp; Fly on a magic carpet, taking in the scenic views
                    until you spot our colorful yoga oasis.
                  </li>
                  <li className="md:text-lg  md:mb-1 font-sans text-medium-green">
                    - &nbsp; Embark on a treasure hunt! Follow the signs
                    decorated with yoga poses that lead you straight to our
                    studio.
                  </li>
                  <li className="md:text-lg  md:mb-1 font-sans text-medium-green">
                    - &nbsp; Use your secret teleportation coordinates: Inhale,
                    exhale, spin around three times, and voila! You'll find
                    yourself in our welcoming space.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full h-auto border bg-transparent border-green-600 mt-6 rounded-lg md:px-10 px-4">
              <div
                className="w-full h-16 md:h-24 flex items-center justify-between border-black cursor-pointer"
                onClick={() => {
                  faqhandleItemFour();
                }}
              >
                <h2 className="md:text-[1.3rem] text-md leading-7 font-poppins text-dark-green">
                  Recommended items
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 border border-green-600  rounded-full flex item justify-center ${faqchevronFour} transition-all ease duration-500`}
                >
                  <svg
                    fill="#51a54c"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${faqitemFourClass}`}
              >
                <ul>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Comfortable and stretchy yoga attire that allows
                    freedom of movement.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; A high-quality yoga mat for a comfortable and
                    non-slip practice.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Yoga props such as blocks, straps, and bolsters to
                    support and enhance your practice.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; A reusable water bottle to stay hydrated during
                    your practice.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; A journal or notebook to reflect on your yoga
                    journey and take notes during classes.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full h-auto border bg-transparent border-green-600 mt-6 rounded-lg md:px-10 px-4">
              <div
                className="w-full h-16 md:h-24 flex items-center justify-between border-black cursor-pointer"
                onClick={() => {
                  faqhandleItemFive();
                }}
              >
                <h2 className="md:text-[1.3rem] text-md leading-7 font-poppins text-dark-green">
                  Cancellation terms
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 border border-green-600  rounded-full flex item justify-center ${faqchevronFive} transition-all ease duration-500`}
                >
                  <svg
                    fill="#51a54c"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${faqitemFiveClass}`}
              >
                <ul>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Cancellations made at least 24 hours prior to the
                    scheduled class time will receive a full refund.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Cancellations made within 24 hours of the scheduled
                    class time may be subject to a cancellation fee.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; No-shows or failure to cancel within the specified
                    time frame will result in the forfeiture of the class or
                    session.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Refunds for pre-paid packages or memberships may be
                    subject to specific terms and conditions.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full h-auto border bg-transparent border-green-600 mt-6 rounded-lg md:px-10 px-4">
              <div
                className="w-full md:h-24 h-16 flex items-center justify-between border-black cursor-pointer"
                onClick={() => {
                  faqhandleItemSix();
                }}
              >
                <h2 className="md:text-[1.3rem] text-md leading-7 font-poppins text-dark-green">
                  How can i pay?
                </h2>
                <div
                  className={`md:w-8 md:h-8 h-6 w-6 border border-green-600  rounded-full flex item justify-center ${faqchevronSix} transition-all ease duration-500`}
                >
                  <svg
                    fill="#51a54c"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    id="chevron"
                  >
                    <path d="M13.418 7.859a.695.695 0 0 1 .978 0 .68.68 0 0 1 0 .969l-3.908 3.83a.697.697 0 0 1-.979 0l-3.908-3.83a.68.68 0 0 1 0-.969.695.695 0 0 1 .978 0L10 11l3.418-3.141z"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`transition-all ease duration-500 ${faqitemSixClass}`}
              >
                <ul>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Cash: We accept cash payments at our facility.
                    Please have the exact amount.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Credit or Debit Card: We accept all major credit
                    and debit cards for a hassle-free payment.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Online Payment: Our website provides a secure
                    online payment platform for easy and convenient
                    transactions.
                  </li>
                  <li className="md:text-lg md:mb-1 font-sans text-medium-green">
                    - &nbsp; Mobile Payment Apps: You can also make payments
                    using popular mobile payment apps.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full md:mt-20 h-auto xl:px-16 px-4 md:grid grid-cols-2">
          <div className="md:w-full h-full lg:p-14 lg:pr-0 md:pr-8">
            <h1
              className="font-bodoni lg:text-6xl text-4xl text-light-green md:mb-10 mt-10 mb-6"
            >
              Safe Space .
            </h1>
            <p className="font-poppins lg:text-lg text-sm">
              Sit veniam est Lorem labore eu. Tempor ipsum Lorem mollit nostrud
              eiusmod fugiat. Anim id irure magna minim irure nisi eiusmod non.
              Nostrud labore voluptate quis incididunt reprehenderit magna
              eiusmod reprehenderit labore tempor. Sint cupidatat officia
              ullamco commodo.
            </p>
            <div className="w-full md:mt-8 mt-0 md:mb-0 mb-2 flex items-center h-20">
              <div className="md:h-14 mr-4 md:w-14 h-10 w-10 flex items-center justify-center cursor-pointer hover:border border-dark-green rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#173320"
                  data-name="Layer 1"
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  id="facebook"
                >
                  <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path>
                </svg>
              </div>
              <div className="md:h-14 mr-4 md:w-14 h-10 w-10 flex items-center justify-center cursor-pointer hover:border border-dark-green rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#173320"
                  data-name="Layer 1"
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  id="twitter"
                >
                  <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
                </svg>
              </div>
              <div className="md:h-14 mr-4 md:w-14 h-10 w-10 flex items-center justify-center cursor-pointer hover:border border-dark-green rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#173320"
                  data-name="Layer 1"
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  id="instagram"
                >
                  <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                </svg>
              </div>
              <div className="md:h-14 mr-4 md:w-14 h-10 w-10 flex items-center justify-center cursor-pointer hover:border border-dark-green rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#173320"
                  data-name="Layer 1"
                  height="36"
                  width="36"
                  viewBox="0 0 512 512"
                  id="mail"
                >
                  <path d="M445.011,82.7H67.022a50.057,50.057,0,0,0-50,50V379.3a50.057,50.057,0,0,0,50,50H445.01a50.057,50.057,0,0,0,50-50V132.7A50.055,50.055,0,0,0,445.011,82.7Zm-88.9,173.232,118.9-93.318V371.352ZM67.022,102.7H445.01a30.034,30.034,0,0,1,30,30v4.49L282.6,288.208a39.972,39.972,0,0,1-49.246-.04L37.022,137.152V132.7A30.034,30.034,0,0,1,67.022,102.7Zm92.438,153.86L37.022,371.755V162.384ZM445.011,409.3H67.022a30.007,30.007,0,0,1-25.538-14.28l134.034-126.1L221.1,303.98a59.937,59.937,0,0,0,73.816-.019L340.235,268.4,470.6,394.94A30.011,30.011,0,0,1,445.011,409.3Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="md:w-full md:h-full md:grid grid-cols-2">
            <div className="md:h-full w-full flex flex-col md:mb-0 mb-6 lg:p-20 md:pt-20">
              <h1
                id="footer_title"
                className="font-poppins font-semibold text-light-green md:mb-12 mb-6 lg:text-2xl text-lg w-40 lg:w-auto"
              >
                Navigation
              </h1>
              <h2 className="font-poppins text-zinc-800 lg:text-md text-sm mb-3 cursor-pointer hover:underline hover:text-dark-green ">
                Home
              </h2>
              <h2 className="font-poppins text-zinc-800 lg:text-md text-sm mb-3 cursor-pointer hover:underline hover:text-dark-green">
                About
              </h2>
              <h2 className="font-poppins text-zinc-800 lg:text-md text-sm mb-3 cursor-pointer hover:underline hover:text-dark-green">
                What we offer
              </h2>
              <h2 className="font-poppins text-zinc-800 lg:text-md text-sm mb-3 cursor-pointer hover:underline hover:text-dark-green">
                Agenda
              </h2>
              <h2 className="font-poppins text-zinc-800 lg:text-md text-sm mb-3 cursor-pointer hover:underline hover:text-dark-green">
                Gallery
              </h2>
              <h2 className="font-poppins text-zinc-800 lg:text-md text-sm mb-3 cursor-pointer hover:underline hover:text-dark-green">
                Faqs
              </h2>
            </div>
            <div className="md:h-full w-full md:pt-20">
              <h1
                id="footer_title"
                className="font-poppins font-semibold text-light-green md:mb-12 mb-6 lg:text-2xl lg:w-48 w-40 text-lg"
              >
                Newsletter
              </h1>
              <p className="font-poppins text-zinc-800 lg:text-md text-sm mb-3">
                Subscribe to our newsletter to receive updates on our activities
              </p>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-transparent border border-light-green md:w-4/5 w-2/4 lg:text-lg p-2 text-light-green mt-4 rounded-md"
                  placeholder="Enter email "
                />
              </div>
            </div>
          </div>
        </footer>
        <div>
          <h2 className="md:text-sm text-xs text-center pb-4 mt-4 text-light-green">
            Copyrights ©2023 All right Reserved | This template was made by{" "}
            <span className="text-medium-green font-semibold">Jeff Maina</span>{" "}
          </h2>
        </div>
      </main>
    </>
  );
}
