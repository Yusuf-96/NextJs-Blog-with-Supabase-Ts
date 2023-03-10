import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blueGray-50">
      <div className="overflow-hidden pt-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 p-8">
              <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
                <div className="flex flex-wrap items-center -m-1">
                  <div className="w-auto p-1">
                    <a className="text-sm" href="">
                      &#x1F44B; We are hiring! View open roles
                    </a>
                  </div>
                  <div className="w-auto p-1">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 className="mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">
                Discover mentors that helps you grow
              </h1>
              <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">
                Get the best-in-className group mentoring plans and professional
                benefits for your team
              </p>
              <div className="flex flex-wrap -m-2.5 mb-20">
                <div className="w-full md:w-auto p-2.5">
                  <div className="block">
                    <button
                      className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                      type="button"
                    >
                      Join Free for 30 Days
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-auto p-2.5">
                  <div className="block">
                    <button
                      className="py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200"
                      type="button"
                    >
                      <div className="flex flex-wrap justify-center items-center -m-1">
                        <div className="w-auto p-1">
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-auto p-1">
                          <span>Book a call</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <p className="mb-6 text-sm text-gray-500 font-semibold uppercase">
                Trusted and loved by 100+ tech first teams
              </p>
              <div className="flex flex-wrap -m-3">
                <p>logos</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <Image
                className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                src="https://images.unsplash.com/photo-1672135295855-40cf3b2ed441?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
                alt=""
                width={500}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
