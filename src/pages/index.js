import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Safe Space</title>
      </Head>

      <main className="xl:w-4/5 w-full xl:m-auto h-auto">
        <nav className="fixed z-40 w-screen h-20 flex">
          <div className="h-full xl:w-[300px] pl-4 xl:pl-0 flex items-center justify-center">
            <h2 className="text-5xl font-hara text-medium-green">Safe Space</h2>
          </div>
          <div className="h-full flex-grow lg:flex items-center justify-evenly xl:justify-start xl:pl-32 hidden">
            <a
              className="border border-medium-green xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 rounded-3xl cursor-pointer hover:bg-medium-green hover:text-custom-white transition-all duration-300"
              href=""
            >
              Main
            </a>
            <a
              className="border border-medium-green xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 rounded-3xl cursor-pointer hover:bg-medium-green hover:text-custom-white transition-all duration-300"
              href=""
            >
              About us
            </a>
            <a
              className="border border-medium-green xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 rounded-3xl cursor-pointer hover:bg-medium-green hover:text-custom-white transition-all duration-300"
              href=""
            >
              What we'll do
            </a>
            <a
              className="border border-medium-green xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 rounded-3xl cursor-pointer hover:bg-medium-green hover:text-custom-white transition-all duration-300"
              href=""
            >
              Agenda
            </a>
            <a
              className="border border-medium-green xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 rounded-3xl cursor-pointer hover:bg-medium-green hover:text-custom-white transition-all duration-300"
              href=""
            >
              Accomodation
            </a>
            <a
              className="border border-medium-green xl:ml-10 ml-0 text-medium-green text-lg py-1 px-4 rounded-3xl cursor-pointer hover:bg-medium-green hover:text-custom-white transition-all duration-300"
              href=""
            >
              FAQ
            </a>
          </div>
          <div className="flex-grow h-full lg:hidden flex justify-end">
            <span className="w-28 h-full flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="44"
                width="44"
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
        </nav>

        <section className="w-full md:h-[650px]  xl:pt-0 md:pt-32 pt-20 h-auto md:grid grid-cols-2">
          <div className="md:w-full md:h-full h-auto md:flex md:items-end">
            <div className="xl:h-4/5 w-full h-auto pl-4 xl:pl-16">
              <h1 className="xl:mb-4 text-2xl font-semibold text-dark-green font-sans text-center md:text-start mt-4 md:my-0">
                Bali Retreat 29 Sen - 5 Oct
              </h1>
              <h1 className="xl:text-[7rem] text-[5em] text-center md:text-start text-medium-green mt-0 mb-0 p-0 font-hara ">
                SAFE SPACE
              </h1>
              <span className="w-full h-10 flex items-center justify-center md:justify-start">
                <h3 className="text-dark-green mr-2 font-semibold font-sans text-[1.2rem]">
                  yoga,
                </h3>
                <h3 className="text-dark-green mr-2 font-semibold font-sans text-[1.2rem]">
                  nature
                </h3>
                <h3 className="text-dark-green mr-2 font-semibold font-sans text-[1.2rem]">
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
              <p className="text-dark-green font-sans text-lg xl:w-4/5 my-2 pr-4 md:pr-0 text-center md:text-start">
                Labore incididunt aliquip ea ut. Anim velit mollit adipisicing
                nostrud aute reprehenderit nulla cillum proident deserunt nisi
                tempor irure minim. Nulla labore ullamco enim excepteur proident
                mollit ex veniam laboris.Non consequat laborum veniam tempor
                deserunt tempor minim ullamco quis in ipsum consectetur.
                Consequat dolore id ea amet voluptate culpa incididunt
                consectetur pariatur nulla laborum laborum. Laborum esse ex
                laboris veniam velit ea duis dolore ea incididunt ullamco
                consequat. Ut laborum nulla qui Lorem reprehenderit laborum
                consectetur. Ea sit nulla dolore cillum laborum minim qui
                exercitation proident commodo labore eu esse deserunt.
              </p>
              <div className="w-4/5 mt-2 h-20 flex items-center md:m-0 m-auto ">
                <button className="text-custom-white text-lg w-[250px] cursor-pointer mr-8 bg-light-green h-12 rounded-3xl">
                  See the agenda
                </button>
                <button className="text-dark-green text-lg w-[250px] cursor-pointer border bg-lime h-12 rounded-3xl">
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

        <section className="w-full xl:h-screen md:mt-48 h-auto xl:px-16 px-4">
          <h1 className="text-[4em] font-hara text-medium-green">About Us</h1>
          <div className="w-full h-auto">
            <div className="w-full md:flex box-border items-center xl:h-70 md:h-56 h-auto xl:mt-10 md:mt-6">
              <div className="border xl:mr-10 md:mr-6 md:h-full h-48 md:w-1/3 rounded-3xl mt-8 md:mt-0 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.pinimg.com/736x/d0/6e/3a/d06e3ad4aaad6d2497f3b6ad06839e7f.jpg"
                  alt=""
                />
              </div>
              <div className="md:h-full h-auto p-10 md:p-0 rounded-3xl md:w-2/3 border flex items-center justify-center bg-light-green text-custom-white mt-8 md:mt-0">
                <p className="md:p-10 text-[1.1rem] font-sans">
                  Sit laboris labore do est veniam quis magna. Officia tempor
                  magna deserunt incididunt laborum. Elit ipsum eu incididunt
                  exercitation. Tempor officia quis anim ex nisi fugiat sunt do
                  duis ut. Laboris ad pariatur esse in irure quis deserunt.
                  Magna laborum Lorem est eu culpa et.Consectetur nisi commodo
                  exercitation reprehenderit officia ex proident Lorem voluptate
                  pariatur cupidatat mollit. Veniam eiusmod tempor pariatur
                  nisi.
                </p>
              </div>
            </div>
            <div className="w-full md:flex box-border items-center xl:h-70 md:h-56 h-auto xl:mt-10 md:mt-6 ">
              <div className="md:h-full h-auto p-10 md:p-0 xl:mr-10 md:mr-6 rounded-3xl flex items-center justify-center md:w-2/3 border bg-light-green text-custom-white mt-8 md:mt-0">
                <p className="xl:p-10 md:px-6 text-[1.1rem] font-sans">
                  Sit laboris labore do est veniam quis magna. Officia tempor
                  magna deserunt incididunt laborum. Elit ipsum eu incididunt
                  exercitation. Tempor officia quis anim ex nisi fugiat sunt do
                  duis ut. Laboris ad pariatur esse in irure quis deserunt.
                  Magna laborum Lorem est eu culpa et.Consectetur nisi commodo
                  exercitation reprehenderit officia ex proident Lorem voluptate
                  pariatur cupidatat mollit. Veniam eiusmod tempor pariatur
                  nisi.
                </p>
              </div>
              <div className="border md:h-full h-48 md:w-1/3 rounded-3xl mt-8 md:mt-0 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://i.pinimg.com/564x/d1/64/41/d164413a64ab0ace09e7cb0893f5540e.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full md:flex box-border items-center xl:h-70 md:h-56 h-auto xl:mt-10 md:mt-6">
              <div className="border xl:mr-10 md:mr-6 md:h-full h-48 md:w-1/3 rounded-3xl mt-8 md:mt-0 overflow-hidden">
                <img
                  src="https://i.pinimg.com/564x/3f/6c/89/3f6c89b7e2123f425cd28f0d3bfb6703.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:h-full h-auto p-10 md:p-0 rounded-3xl md:w-2/3 border flex items-center justify-center bg-light-green text-custom-white mt-8 md:mt-0">
                <p className="xl:p-10 md:px-6 text-[1.1rem] font-sans">
                  Sit laboris labore do est veniam quis magna. Officia tempor
                  magna deserunt incididunt laborum. Elit ipsum eu incididunt
                  exercitation. Tempor officia quis anim ex nisi fugiat sunt do
                  duis ut. Laboris ad pariatur esse in irure quis deserunt.
                  Magna laborum Lorem est eu culpa et.Consectetur nisi commodo
                  exercitation reprehenderit officia ex proident Lorem voluptate
                  pariatur cupidatat mollit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full xl:h-screen md:mt-10 h-auto xl:px-16 px-4">
          <h1 className="text-[4em] font-hara text-medium-green">
            This retreat will help you :
          </h1>
          <div className="w-full h-[70%] xl:mt-10 rounded-xl overflow-hidden border border-black lg:grid grid-cols-3 grid-rows-3 bg-light-green">
            <div className="p-10 h-full flex w-full">
              <span className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" height='38' width='38' version="1.0" id="leaf"><path fill="#010101" d="M9.675 17.021a.636.636 0 0 1-.626-.441l-.055-.245c-.034-.156-.057-.26-.077-.458a.35.35 0 0 1 .146-.324l.603-.425c-1.509-.675-1.777-2.061-1.911-3.44a.353.353 0 0 1 .166-.333c.409-.25.915-.183 1.347-.022.01-.989.522-1.666.983-2.274.204-.269.396-.522.548-.798a.352.352 0 0 1 .454-.148c.322.15.62.379.873.667.451-.903 1.173-1.423 1.714-1.751a.35.35 0 0 1 .443.067c.644.726.746 1.598.821 2.524.279-.021.572-.005.854.051a.351.351 0 0 1 .281.325c.07 1.341-.316 2.433-1.149 3.254.349.23.725.576 1.009 1.012a.349.349 0 0 1-.006.391c-.592.85-1.764 1.765-2.94 1.765-.519 0-.991-.171-1.407-.51-.121.08-.253.172-.39.268-.595.416-1.21.845-1.681.845zm-.034-1.019c.011.061.022.117.037.185l.028.132c.269-.031.854-.441 1.248-.716.242-.169.47-.327.655-.434a.345.345 0 0 1 .422.056c.328.328.705.494 1.121.494.884 0 1.752-.701 2.218-1.27-.315-.398-.729-.694-1.015-.796a.349.349 0 0 1-.095-.607c.861-.659 1.283-1.553 1.287-2.725a2.698 2.698 0 0 0-.609.021l-.004.002c-.134.062-.288.053-.392-.049a.388.388 0 0 1-.114-.333l-.01-.115c-.062-.792-.117-1.49-.48-2.05-.722.492-1.147 1.042-1.366 1.755-.006.018-.04.091-.048.107a.354.354 0 0 1-.306.196c-.131-.012-.252-.066-.314-.18a2.312 2.312 0 0 0-.679-.771c-.133.202-.276.392-.417.577-.526.695-.981 1.294-.803 2.311a.35.35 0 0 1-.45.395 7.075 7.075 0 0 1-.369-.134c-.263-.102-.514-.194-.708-.17.146 1.309.464 2.4 2.032 2.798a.35.35 0 0 1 .116.625l-.985.696z"></path></svg>
              </span>
              <p className="text-custom-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore sit, qui, omnis autem est possimus aperiam
                numquam quaerat eligendi, recusandae ex voluptas itaque atque
                placeat obcaecati fuga vel debitis.
              </p>
            </div>
            <div className="p-10 h-full flex w-full">
              <span className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" height='34' width='30' viewBox="0 0 64 64" id="favorite"><path fill="#FFF8ED" d="M32 53.372a8.584 8.584 0 0 1-4.195-1.087c-13.68-7.669-21.213-17.116-21.213-26.6 0-8.448 5.91-15.065 13.454-15.065A16.283 16.283 0 0 1 32 15.862a16.283 16.283 0 0 1 11.954-5.242c7.544 0 13.454 6.617 13.454 15.065 0 9.484-7.533 18.931-21.213 26.6A8.587 8.587 0 0 1 32 53.372ZM20.046 13.62c-5.96 0-10.454 5.187-10.454 12.065 0 8.351 6.989 16.868 19.679 23.982a5.613 5.613 0 0 0 5.458 0c12.69-7.114 19.679-15.631 19.679-23.982 0-6.878-4.494-12.065-10.454-12.065a13.339 13.339 0 0 0-10.7 5.433 1.457 1.457 0 0 1-1.254.669 1.5 1.5 0 0 1-1.246-.669 13.339 13.339 0 0 0-10.708-5.433Z"></path></svg>
              </span>
              <p className="text-custom-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore sit, qui, omnis autem est possimus aperiam
                numquam quaerat eligendi, recusandae ex voluptas itaque atque
                placeat obcaecati fuga vel debitis.
              </p>
            </div>
            <div className="p-10 h-full flex w-full">
              <span className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" height='34'fill="#FFF8ED" width='34' viewBox="0 0 82.22 96" id="electric-plug"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M34.08 96A25.77 25.77 0 018.34 70.26v-14a1 1 0 012 0v14a23.74 23.74 0 1047.47 0V59.15a1 1 0 012 0V70.26A25.76 25.76 0 0134.08 96zM65.51 54.4H52.11a3.92 3.92 0 010-7.84h13.4a3.92 3.92 0 110 7.84zm-13.4-5.84a1.92 1.92 0 000 3.84h13.4a1.92 1.92 0 100-3.84z"></path><path d="M66.75,48.56H50.88A13.17,13.17,0,0,1,37.72,35.4v-13a1,1,0,0,1,1-1H78.91a1,1,0,0,1,1,1v13A13.17,13.17,0,0,1,66.75,48.56Zm-27-25.2v12A11.17,11.17,0,0,0,50.88,46.56H66.75A11.18,11.18,0,0,0,77.91,35.4v-12Z"></path><path d="M81.22,23.36H36.41a1,1,0,0,1,0-2H81.22a1,1,0,0,1,0,2Z"></path><path d="M50.7 23.36H45a1 1 0 01-1-1V3.86a3.86 3.86 0 117.72 0v18.5A1 1 0 0150.7 23.36zm-4.72-2H49.7V3.86a1.86 1.86 0 10-3.72 0zM72.65 23.36H66.93a1 1 0 01-1-1V3.86a3.86 3.86 0 017.72 0v18.5A1 1 0 0172.65 23.36zm-4.72-2h3.72V3.86a1.86 1.86 0 10-3.72 0zM58.81 60.15a4.74 4.74 0 01-4.74-4.74v-2a1 1 0 011-1h7.48a1 1 0 011 1v2A4.74 4.74 0 0158.81 60.15zM56.07 54.4v1a2.74 2.74 0 005.48 0v-1zM66.93 33.27H50.7a1 1 0 010-2H66.93a1 1 0 010 2zM66.93 38.65H50.7a1 1 0 010-2H66.93a1 1 0 010 2zM4.32 54.63a.94.94 0 01-.51-.14 1 1 0 01-.43-1.2l4.42-12H1a1 1 0 01-.9-.56 1 1 0 01.1-1L13.69 21.76a1 1 0 011.76.89L12 34.18l8.3-.09h0a1 1 0 01.76 1.65l-16 18.54A1 1 0 014.32 54.63zM3 39.25H9.23a1 1 0 01.94 1.34l-3 8.23 11-12.71-7.45.09a.92.92 0 01-.81-.4 1 1 0 01-.16-.89l2.24-7.51z"></path></g></g></svg>
              </span>
              <p className="text-custom-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore sit, qui, omnis autem est possimus aperiam
                numquam quaerat eligendi, recusandae ex voluptas itaque atque
                placeat obcaecati fuga vel debitis.
              </p>
            </div>
            <div className="p-10 h-full flex w-full">
              <span className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg"fill="#FFF8ED" height='34' width='38' viewBox="0 0 24 24" id="people"><g data-name="Layer 2"><g data-name="people"><rect width="20" height="24" opacity="0"></rect><path d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2zM17 13a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM17 14a5 5 0 0 0-3.06 1.05A7 7 0 0 0 2 20a1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 6.9 6.9 0 0 0-.86-3.35A3 3 0 0 1 20 19a1 1 0 0 0 2 0 5 5 0 0 0-5-5z"></path></g></g></svg>              </span>
              <p className="text-custom-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore sit, qui, omnis autem est possimus aperiam
                numquam quaerat eligendi, recusandae ex voluptas itaque atque
                placeat obcaecati fuga vel debitis.
              </p>
            </div>
            <div className="p-10 h-full flex w-full">
              <span className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF8ED" height='38' width='38' viewBox="0 0 50 50" id="wifi"><path d="M11.016 21.884c3.554-4.068 8.747-6.401 14.247-6.401 5.501 0 10.694 2.334 14.247 6.402a.995.995 0 0 0 1.41.096 1 1 0 0 0 .096-1.41c-3.933-4.505-9.674-7.088-15.753-7.088-6.078 0-11.819 2.582-15.753 7.085a1 1 0 0 0 1.506 1.316z"></path><path d="M35.367 25.849a.996.996 0 0 0 1.406.144 1 1 0 0 0 .145-1.406c-2.84-3.491-7.089-5.493-11.655-5.493-4.565 0-8.813 2.002-11.655 5.491a1 1 0 1 0 1.551 1.263c2.46-3.021 6.144-4.755 10.104-4.755 3.962.001 7.645 1.734 10.104 4.756z"></path><path d="M31.124 29.723a1.002 1.002 0 0 0 1.641-1.145c-1.693-2.426-4.497-3.874-7.502-3.874-3.05 0-5.877 1.482-7.564 3.964a1.001 1.001 0 0 0 1.655 1.125c1.314-1.935 3.523-3.089 5.91-3.089 2.35 0 4.542 1.129 5.86 3.019z"></path><ellipse cx="25.263" cy="33.514" rx="2" ry="1.969"></ellipse></svg>              </span>
              <p className="text-custom-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore sit, qui, omnis autem est possimus aperiam
                numquam quaerat eligendi, recusandae ex voluptas itaque atque
                placeat obcaecati fuga vel debitis.
              </p>
            </div>
            <div className="p-10 h-full flex w-full">
              <span className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF8ED" width='38' height='38' enable-background="new 0 0 100 100" viewBox="0 0 100 100" id="rocket"><path d="M50.8 43.9c-3.6 0-6.6-3-6.6-6.6s3-6.6 6.6-6.6 6.6 3 6.6 6.6C57.3 40.9 54.4 43.9 50.8 43.9zM50.8 32.7c-2.5 0-4.6 2.1-4.6 4.6s2.1 4.6 4.6 4.6 4.6-2.1 4.6-4.6S53.3 32.7 50.8 32.7zM41.9 41.2c-.4 0-.8-.3-.9-.7-.1-.4-.2-.8-.3-1.2-.1-.5.2-1.1.8-1.2.5-.1 1.1.2 1.2.8.1.3.2.7.3 1 .2.5-.1 1.1-.6 1.3C42.2 41.2 42.1 41.2 41.9 41.2zM41.9 35.3c-.1 0-.2 0-.3-.1-.5-.2-.8-.7-.6-1.3 1-3 3.4-5.5 6.5-6.5.5-.2 1.1.1 1.3.6s-.1 1.1-.6 1.3c-2.5.8-4.4 2.8-5.2 5.2C42.7 35.1 42.4 35.3 41.9 35.3zM64.4 58.8c-.1 0-.2 0-.3 0-.5-.2-.8-.7-.7-1.2.2-.6.3-1.1.5-1.7.1-.5.7-.9 1.2-.7.5.1.9.7.7 1.2-.2.6-.3 1.2-.5 1.7C65.2 58.5 64.8 58.8 64.4 58.8zM60.7 68.2c-.1 0-.3 0-.4-.1-.5-.2-.7-.8-.5-1.3.9-1.9 1.8-3.9 2.5-6 .2-.5.8-.8 1.3-.6s.8.8.6 1.3c-.8 2.2-1.7 4.3-2.6 6.2C61.4 68 61.1 68.2 60.7 68.2z"></path><path d="M70.9 45.4c0-.5 0-.9 0-1.4 0-10.5-3.8-20.3-10.4-28-.1-.2-.3-.3-.5-.5-.3-.4-.7-.7-1-1.1-.3-.3-.5-.5-.8-.8-.4-.4-.7-.7-1.1-1.1-.5-.4-.9-.8-1.4-1.2-.2-.2-.4-.4-.7-.5-.4-.4-.9-.7-1.3-1.1-.2-.2-.4-.3-.6-.5-.7-.5-1.3-1-2-1.4-.3-.2-.8-.2-1.1 0-.7.4-1.4.9-2 1.4-.2.2-.4.3-.6.5-.5.3-.9.7-1.3 1.1-.2.2-.4.4-.7.5-.5.4-.9.8-1.4 1.2-.4.3-.7.7-1.1 1.1-.3.3-.5.5-.8.8-.3.4-.7.7-1 1.1-.2.2-.3.3-.4.5-6.5 7.6-10.3 17.5-10.3 28 0 .5 0 .9 0 1.4-5.2 4.8-8.1 11.5-8.1 18.5 0 6.1 2.2 12 6.3 16.6.2.2.5.3.8.3.2 0 .5-.1.7-.2l8.9-7.7h8.4v11.3c0 .6.4 1 1 1s1-.4 1-1V72.9h4v20.4c0 .6.4 1 1 1s1-.4 1-1V72.9h7.1l8.9 7.7c.2.2.4.2.7.2.3 0 .6-.1.8-.3 4-4.6 6.3-10.5 6.3-16.6C79 56.8 76 50.1 70.9 45.4zM53.2 11.6c.2.2.4.3.6.5.6.5 1.3 1.1 1.9 1.6.1.1.3.3.4.4 1.6 1.5 3 3.1 4.4 4.9l0 0c-3 1.6-6.4 2.5-9.9 2.5s-6.9-.9-9.9-2.5l0 0c1.3-1.8 2.8-3.4 4.4-4.9.1-.1.3-.3.4-.4.6-.6 1.2-1.1 1.9-1.6.2-.2.4-.3.6-.5.8-.6 1.6-1.3 2.5-1.8C51.5 10.3 52.3 11 53.2 11.6zM39.6 20.7c3.4 1.9 7.2 2.9 11.1 2.9s7.7-1 11.1-2.9c4.6 6.7 7.2 14.8 7.2 23.2 0 .6 0 1.2 0 1.8l0 0c-.3 7.2-2.3 15.4-5.6 22.6 0 .1 0 .1-.1.2-.4.8-.8 1.6-1.2 2.4H39.2c-.2-.4-.4-.8-.6-1.2-.1-.1-.1-.3-.2-.4-.3-.6-.6-1.2-.8-1.8-.2-.5-.4-1-.6-1.5-.2-.4-.4-.9-.5-1.3-.3-.7-.5-1.4-.8-2.1-.1-.4-.2-.7-.3-1.1-.2-.8-.5-1.6-.7-2.3-.1-.3-.2-.6-.2-.9-.2-.8-.4-1.6-.6-2.4-.1-.3-.1-.7-.2-1-.1-.6-.2-1.2-.4-1.8-.1-.6-.2-1.1-.3-1.7-.1-.4-.1-.8-.2-1.2-.1-.8-.2-1.6-.2-2.4 0-.2 0-.5-.1-.7-.1-1-.1-2-.1-3C32.4 35.5 35 27.4 39.6 20.7zM29.4 78.4c-3.3-4.1-5.1-9.3-5.1-14.6 0-5.9 2.3-11.6 6.3-15.9 0 .4.1.7.1 1.1 0 .1 0 .1 0 .2.1 1 .2 1.9.4 2.9 0 .3.1.5.1.8.1.5.2 1 .3 1.4.1.7.3 1.3.4 2 .1.4.2.8.3 1.2.1.5.3 1 .4 1.5.1.5.3 1.1.5 1.6.1.5.3 1 .5 1.5.1.4.3.9.4 1.3.1.3.2.7.4 1 .3.8.6 1.7 1 2.5.1.1.1.3.2.4.6 1.4 1.2 2.8 1.9 4.1L29.4 78.4zM71.8 78.4L64 71.6c0-.1.1-.2.1-.2 3.6-7.3 6-15.6 6.7-23.3 0 0 0 0 0-.1 4 4.3 6.3 10 6.3 15.9C77 69.2 75.2 74.3 71.8 78.4zM83.8 39c-.6 0-1-.4-1-1V17.5c0-.6.4-1 1-1h1.4l-4.5-7.4-4.5 7.4h.9c.6 0 1 .4 1 1v11.4c0 .6-.4 1-1 1s-1-.4-1-1V18.5h-1.7c-.4 0-.7-.2-.9-.5-.2-.3-.2-.7 0-1l6.2-10.3c.4-.6 1.3-.6 1.7 0L87.6 17c.2.3.2.7 0 1s-.5.5-.9.5h-2.2V38C84.8 38.6 84.4 39 83.8 39zM77.1 35.8c-.6 0-1-.4-1-1v-1.9c0-.6.4-1 1-1s1 .4 1 1v1.9C78.1 35.3 77.6 35.8 77.1 35.8zM18 59.2c-.6 0-1-.4-1-1V37.6c0-.6.4-1 1-1h1.4l-4.5-7.4-4.5 7.4h.9c.6 0 1 .4 1 1V49c0 .6-.4 1-1 1s-1-.4-1-1V38.6H8.7c-.4 0-.7-.2-.9-.5-.2-.3-.2-.7 0-1L14 26.8c.2-.3.5-.5.9-.5l0 0c.4 0 .7.2.9.5L22 37.1c.2.3.2.7 0 1s-.5.5-.9.5H19v19.6C19 58.7 18.5 59.2 18 59.2zM11.2 55.9c-.6 0-1-.4-1-1V53c0-.6.4-1 1-1s1 .4 1 1v1.9C12.2 55.5 11.8 55.9 11.2 55.9z"></path></svg>
              </span>
              <p className="text-custom-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore sit, qui, omnis autem est possimus aperiam
                numquam quaerat eligendi, recusandae ex voluptas itaque atque
                placeat obcaecati fuga vel debitis.
              </p>
            </div>
            <div className="p-10 h-full flex w-full">
              <span className="mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF8ED" height='38' width='38' enable-background="new 0 0 50 50" viewBox="0 0 50 50" id="night-stars"><path fill="#FFF8ED" d="M40.3 20.6c-5.1-3-6.9-7.8-7.4-13.5 0-.5-1.3.2-1.3.6-.5 5-.6 9.9-6.2 12.3-1.7.7-3.2 1.6-4.7 2.7-.2.1-.6.5-.2.6 1.4.3.9.2 2.4.1 3.4-.3 5.1 2.1 6.5 4.7 1.5 2.7.9 6.4 2.5 8.8.1.2.5 0 .6 0 1.2-.6 1.4-.9 1.5-2.4.2-2.3 1-4.6 2-6.7 1.7-3.4 5.1-3.9 8-5.4.1 0 1-.6.6-.8C43.2 21.1 41.8 21.1 40.3 20.6c-.4-.1-1.5.8-1.2.9 1.3.4 1 .3 2.3.5 2 .3-1.5 1.4-1.8 1.5-1.1.6-2.6 1.6-3.5 2.6-1.3 1.6-2.4 3.5-2.8 5.6-.3 1.3-.8 3.5-.5 4.1-.7-1.1-.7-4-1-5.4-.6-2.9-2.5-5.8-4.9-7.4-.6-.4-1.4-.4-2.1-.5-2.9-.4.4-1.7 1.7-2.3 5.3-2.3 5.7-8.1 6.3-13.1-.4.2-.9.4-1.3.6.5 5.7 2.4 10.8 7.5 13.8C39.5 21.7 40.6 20.8 40.3 20.6zM18.8 28.7c-2.8-1.8-3.7-4.7-3.9-7.8-.1-.7-1.3-1.3-1.4-.4-.2 1.7-.4 3.5-.8 5.1-.6 2.2-4 3-5.6 4.3-.6.5 0 1.2.6 1.2 3.1.3 4.3 1.3 5.3 4.3.4 1.2.1 2.7.8 3.8.2.4.6.7 1.1.4.9-.4.8-1.7.9-2.6.6-3.7 2.7-5 5.9-6.5.6-.3-.1-1.1-.4-1.2-1.1-.4-1.2-.3-2.6-.7-.9-.3-.8 1-.1 1.3.7.2 2 .5 2.6.7-.1-.4-.3-.8-.4-1.2-2 .9-3.7 1.5-5 3.4-.6.8-1.2 5.4-1.8 5.7.4.1.7.3 1.1.4-1.2-1.9-.7-4.6-2-6.6-1.6-2.5-2.9-2.3-5.6-2.6C7.6 30.2 7.8 30.6 8 31c1.8-1.4 3.8-2 5.4-3.7 1.3-1.4 1.3-4.6 1.5-6.4-.5-.1-.9-.3-1.4-.4.3 3.9 1.5 7.1 4.9 9.3C19.2 30.3 19.5 29.2 18.8 28.7zM8.2 14.2c1.6 0 3.2 0 4.8 0 .7 0 1.5-1 .5-1-1.6 0-3.2 0-4.8 0C8 13.2 7.2 14.2 8.2 14.2L8.2 14.2zM12.3 10.4c.8 0 1.5 0 2.3 0 .1 0 .7-.1.5-.3-.2-.2-.7-.2-.9-.2-.8 0-1.5 0-2.3 0-.1 0-.7.1-.5.3C11.6 10.4 12.1 10.4 12.3 10.4L12.3 10.4zM17.3 12.5c1.4 0 2.9 0 4.3 0 .3 0 .7-.2.9-.4.1-.1.4-.3.1-.3-1.4 0-2.9 0-4.3 0-.3 0-.7.2-.9.4C17.3 12.3 17 12.5 17.3 12.5L17.3 12.5zM15 15.7c.7 0 1.5 0 2.2 0 .7 0 1.4-1 .4-1-.7 0-1.5 0-2.2 0C14.7 14.7 14 15.7 15 15.7L15 15.7zM4 25.2c.7 0 1.4 0 2.1 0 .1 0 .7-.1.5-.3-.2-.2-.7-.2-.9-.2-.7 0-1.4 0-2.1 0-.1 0-.7.1-.5.3C3.2 25.2 3.7 25.2 4 25.2L4 25.2zM1.4 28.3c.9 0 1.7 0 2.6 0 .3 0 .3-.2.1-.4-.3-.2-.7-.3-1-.3-.9 0-1.7 0-2.6 0-.3 0-.3.2-.1.4C.7 28.2 1.1 28.3 1.4 28.3L1.4 28.3zM19.4 37.1c.7 0 1.3 0 2 0 .8 0 1.1-1.3.2-1.3-.7 0-1.3 0-2 0C18.7 35.8 18.4 37.1 19.4 37.1L19.4 37.1zM22 40.1c1.3 0 2.6 0 3.9 0 .3 0 .7 0 1-.3.2-.2-.2-.3-.3-.3-1.3 0-2.6 0-3.9 0-.3 0-.7 0-1 .3C21.4 40 21.8 40.1 22 40.1L22 40.1zM17.7 43.2c.9 0 1.8 0 2.6 0 .4 0 .8-.2.9-.6.1-.4-.2-.7-.6-.7-.9 0-1.8 0-2.6 0-.4 0-.8.2-.9.6C17.1 42.9 17.4 43.2 17.7 43.2L17.7 43.2zM37.1 37.2c.7 0 1.4 0 2.2 0 .3 0 .7 0 1-.1.3-.1-.2-.1-.3-.1-.7 0-1.4 0-2.2 0-.3 0-.7 0-1 .1C36.5 37.1 37 37.2 37.1 37.2L37.1 37.2zM41.4 35c1.5 0 3 0 4.5 0 .7 0 .2-1.4-.4-1.4-1.5 0-3 0-4.5 0C40.3 33.6 40.8 35 41.4 35L41.4 35zM39.5 32.4c1 0 2 0 3 0 .1 0-.4-.3-.4-.3-.2-.1-.6-.3-.9-.3-1 0-2 0-3 0-.1 0 .4.3.4.3C38.9 32.2 39.2 32.4 39.5 32.4L39.5 32.4zM47.1 31.8c.7 0 1.4 0 2.2 0 .9 0 .2-1.2-.4-1.2-.7 0-1.4 0-2.2 0C45.7 30.6 46.4 31.8 47.1 31.8L47.1 31.8zM45.1 18.3c.8 0 1.6 0 2.4 0 .3 0 .4-.2.1-.3-.3-.2-.7-.4-1-.4-.8 0-1.6 0-2.4 0-.3 0-.4.2-.1.3C44.4 18.1 44.8 18.3 45.1 18.3L45.1 18.3z"></path><path fill="#1D1D1B" d="M39.5,15.1c1.6,0,3.1,0,4.7,0c0,0-0.3-1.3-0.7-1.3c-1.6,0-3.1,0-4.7,0C38.8,13.7,39.1,15.1,39.5,15.1 L39.5,15.1z"></path></svg>
              </span>
              <p className="text-custom-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore sit, qui, omnis autem est possimus aperiam
                numquam quaerat eligendi, recusandae ex voluptas itaque atque
                placeat obcaecati fuga vel debitis.
              </p>
            </div>
            <div className="p-10 h-full flex w-full">
              <span className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" height='34' width='34' fill='#FFF8ED' viewBox="0 0 256 256" id="smiley-smile"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none" stroke="#FFF8ED" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"></circle><path fill="none" stroke="#FFF8ED'" stroke-linecap="round" stroke-linejoin="round" stroke-width="19" d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"></path><circle cx="92" cy="108" r="16"></circle><circle cx="164" cy="108" r="16"></circle></svg>
              </span>
              <p className="text-custom-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore sit, qui, omnis autem est possimus aperiam
                numquam quaerat eligendi, recusandae ex voluptas itaque atque
                placeat obcaecati fuga vel debitis.
              </p>
            </div>
            <div className="p-10 h-full flex w-full">
              <span className="mr-4">
              <svg xmlns="http://www.w3.org/2000/svg"height='34' width='34' fill="#FFF8ED" viewBox="0 0 24 24" id="star"><path fill="none" stroke='#FFF8ED' stroke-linecap="round" stroke-linejoin="round" d="m16.5 11 4.5 2.5-1.5-5 4-3.5-5-.5-2-4-2 4-5 .5 4 3.5-1.5 5z"></path><path fill="none" stroke="#FFF8ED" stroke-linecap="round" stroke-linejoin="round" d="M11.5 7C.25 11.13.5 19.5.5 19.5l5-2s-.12 3.94 2 6c0 0 .7-7.44 5-10.5"></path></svg>
              </span>
              <p className="text-custom-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore sit, qui, omnis autem est possimus aperiam
                numquam quaerat eligendi, recusandae ex voluptas itaque atque
                placeat obcaecati fuga vel debitis.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
