/* eslint-disable react/prop-types */
import { useState } from "react";

import ArrowIcon from "../assets/down-arrow-icon.svg";
import MenuIcon from "../assets/menu-icon.svg";
import NasIcon from "../assets/nas-icon-small.svg";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopFeaturesOpen, setIsDesktopFeaturesOpen] = useState(false);
  const [isDesktopUseCasesOpen, setIsDesktopUseCasesOpen] = useState(false);
  return (
    <>
      <nav className='bg-gray-900 max-w-[90%] mx-auto p-4 rounded-full flex justify-between items-center mt-8 lg:w-[75%] '>
        {/* Nas Icon  */}
        <div className='lg:hidden mt-2'>
          <img src={NasIcon} alt='Nas Logo' className='w-10 h-10' />
        </div>

        {/* Nas Icon for Desktop  */}
        <img
          src='https://d2oi1rqwb0pj00.cloudfront.net/nasIO/new_home/svg/navbar_logo.svg'
          alt='Nas Desktop Icon'
          className='hidden lg:block h-15 w-15'
        />

        {/* Desktop Items */}
        <ul className='hidden  text-white mr-auto ml-4 text-lg font-medium lg:flex items-center gap-2'>
          <div
            className='cursor-pointer relative'
            onMouseEnter={() => setIsDesktopFeaturesOpen(true)}
            onMouseLeave={() => setIsDesktopFeaturesOpen(false)}
          >
            <li className='flex items-center p-2 rounded-full hover:bg-gray-700  group'>
              <p className='text-md'>Features</p>
              <div
                className={`ml-1 w-6 h-6 ${
                  isDesktopFeaturesOpen &&
                  "group-hover:transform group-hover:rotate-180"
                }`}
              >
                <img src={ArrowIcon} alt='Arrow icon' />
              </div>
            </li>

            {isDesktopFeaturesOpen && (
              <div className='absolute top-full w-80 bg-slate-900 text-sm p-3 flex flex-col items-start gap-2 rounded-2xl'>
                <div className='flex flex-col gap-2 border-b-[1px] border-slate-500 '>
                  <div className='flex flex-col items-start gap-1 hover:bg-slate-800 p-4 rounded-2xl'>
                    <h3 className='text-lg text-white'>Ruby AI for WhatsApp</h3>
                    <p className='text-md text-gray-600'>
                      Summarize your WhatsApp chats
                    </p>
                  </div>

                  <div className='flex flex-col items-start gap-1 hover:bg-slate-800 p-4 rounded-2xl'>
                    <h3 className='text-lg text-white'>WhatsApp Communities</h3>
                    <p className='text-md text-gray-600'>
                      Supercharge your whatsapp group. See the magic in 2 clicks
                    </p>
                  </div>
                </div>

                <ul className='flex flex-col items-start gap-2 text-md text-white w-full'>
                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    Event Hosting
                  </li>

                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    Paid Membership
                  </li>
                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    Newsletters
                  </li>
                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    Content Libraries
                  </li>
                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    Chat Integration
                  </li>
                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    Website Building
                  </li>
                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    Analytics
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
            className='cursor-pointer relative'
            onMouseEnter={() => setIsDesktopUseCasesOpen(true)}
            onMouseLeave={() => setIsDesktopUseCasesOpen(false)}
          >
            <li className='flex items-center p-2 rounded-full hover:bg-gray-700  group'>
              <p className='text-md'>Use Cases</p>
              <div
                className={`ml-1 w-6 h-6 ${
                  isDesktopUseCasesOpen &&
                  "group-hover:transform group-hover:rotate-180"
                }`}
              >
                <img src={ArrowIcon} alt='Arrow icon' />
              </div>
            </li>

            {isDesktopUseCasesOpen && (
              <div className='absolute top-full w-80 bg-slate-900 text-sm p-3 flex flex-col items-start gap-2 rounded-2xl'>
                <ul className='flex flex-col items-start gap-2 text-md text-white w-full'>
                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    For Developers
                  </li>

                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    For Educators
                  </li>
                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    For Content Creators
                  </li>
                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    For Finance
                  </li>
                  <li className='p-3 hover:bg-slate-700 w-full rounded-lg'>
                    For Networking
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className='cursor-pointer text-md'>Pricing</div>
        </ul>

        <div className='flex items-center gap-5'>
          <div className='hidden md:flex items-center gap-3'>
            <button className='p-2 px-3 border-[1px] rounded-full text-md text-white cursor-pointer font-medium'>
              Log in
            </button>
            <button className='text-md p-[10px] rounded-full bg-[#FBC91B] font-medium'>
              Start for free
            </button>
          </div>

          {/* Hamburger Menu Icon  */}
          <div
            className='w-6 h-6 lg:hidden cursor-pointer'
            onClick={() => setIsOpen(true)}
          >
            <img src={MenuIcon} alt='Hamburger Icon' />
          </div>
        </div>
      </nav>

      {isOpen && <MobileOpenNav setIsOpen={setIsOpen} />}
    </>
  );
}

function MobileOpenNav({ setIsOpen }) {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  return (
    <div className='w-full top-0 min-h-screen bg-gray-900 p-8 flex flex-col justify-between fixed'>
      {/* Top Menu   */}
      <div className='flex items-center justify-between'>
        {/* Nas Icon  */}
        <img src={NasIcon} alt='Nas Logo' className='w-10 h-10' />

        <svg
          width='24'
          height='24'
          fill='#fff'
          viewBox='0 0 24 24'
          className='bg-[#5C5E61] rounded-full border-[#5C5E61] h-10 w-10 p-1 cursor-pointer'
          onClick={() => setIsOpen(false)}
        >
          <g>
            <path d='M18.69 5.321a1.058 1.058 0 00-1.498 0L12 10.503 6.808 5.31A1.057 1.057 0 105.31 6.808L10.503 12 5.31 17.192a1.057 1.057 0 101.497 1.497L12 13.497l5.192 5.192a1.057 1.057 0 101.497-1.497L13.497 12l5.192-5.192a1.064 1.064 0 000-1.487z'></path>
          </g>
        </svg>
      </div>

      <div className='flex gap-2 flex-col'>
        {/* Features Section  */}
        <div className=' border-b-[1px] border-gray-500'>
          <div className='flex items-center justify-between text-white text-2xl py-6'>
            <p>Features</p>

            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='white'
              className={`ml-4 ${isFeaturesOpen && "transform rotate-180"}`}
              onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
            >
              <path
                d='M16.1611 9.31093L11.9946 13.4355L7.82819 9.31093C7.4094 8.89636 6.73289 8.89636 6.31409 9.31093C5.8953 9.72551 5.8953 10.3952 6.31409 10.8098L11.243 15.6891C11.6617 16.1036 12.3383 16.1036 12.757 15.6891L17.6859 10.8098C18.1047 10.3952 18.1047 9.72551 17.6859 9.31093C17.2671 8.90699 16.5799 8.89636 16.1611 9.31093Z'
                fill='white'
                className='fill-light-f6'
              ></path>
            </svg>
          </div>
          {/* Features List  */}
          {isFeaturesOpen && (
            <ul className='text-white text-lg font-medium flex flex-col gap-4'>
              <li className='py-2'>Ruby AI for WhatsApp</li>
              <li className='py-2'>WhatsApp Communities</li>
              <li className='py-2'>Event Hosting</li>
              <li className='py-2'>Paid Membership</li>
              <li className='py-2'>Newsletters</li>
              <li className='py-2'>Content Library</li>
              <li className='py-2'>Chat Integration</li>
              <li className='py-2'>Website Building</li>
              <li className='py-2'>Analytics</li>
            </ul>
          )}
        </div>

        {/* Use Cases Section  */}
        <div className='border-b-[1px] border-gray-500'>
          <div className='flex items-center justify-between text-white text-2xl py-6 '>
            <p>Use cases</p>

            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='white'
              className={`ml-4 ${isUseCasesOpen && "transform rotate-180"}`}
              onClick={() => setIsUseCasesOpen(!isUseCasesOpen)}
            >
              <path
                d='M16.1611 9.31093L11.9946 13.4355L7.82819 9.31093C7.4094 8.89636 6.73289 8.89636 6.31409 9.31093C5.8953 9.72551 5.8953 10.3952 6.31409 10.8098L11.243 15.6891C11.6617 16.1036 12.3383 16.1036 12.757 15.6891L17.6859 10.8098C18.1047 10.3952 18.1047 9.72551 17.6859 9.31093C17.2671 8.90699 16.5799 8.89636 16.1611 9.31093Z'
                fill='white'
                className='fill-light-f6'
              ></path>
            </svg>
          </div>
          {/* Use Cases List  */}
          {isUseCasesOpen && (
            <ul className='text-white text-lg font-medium flex flex-col gap-4'>
              <li className='py-2'>For Developers</li>
              <li className='py-2'>For Educators</li>
              <li className='py-2'>For Content Creators</li>
              <li className='py-2'>For Finance</li>
              <li className='py-2'>For Networking</li>
            </ul>
          )}
        </div>

        {/* Pricing Section  */}
        <div className='text-2xl py-6 border-b-[1px] border-gray-500 text-white mb-10'>
          Pricing
        </div>
      </div>

      {/* Login Signup Section  */}
      <div className='mb-8 flex flex-col w-full gap-5'>
        <button className='rounded-full border-[1px] border-white text-white text-xl p-3 font-semibold cursor-pointer'>
          Log in
        </button>
        <button className='rounded-full cursor-pointer  text-xl p-3 bg-[#FBC91B] font-semibold'>
          Start for free
        </button>
      </div>
    </div>
  );
}

export default Navigation;
