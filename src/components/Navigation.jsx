import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className='bg-gray-900 max-w-[90%] mx-auto p-6 rounded-full flex justify-between items-center mt-8'>
        {/* Nas Icon  */}
        <svg viewBox='0 0 24 24' fill='none' className='h-8 w-8'>
          <path
            d='M2.76504 13.7446C1.74499 12.7245 1.74499 11.0707 2.76504 10.0506C3.7851 9.03065 5.43894 9.03065 6.45901 10.0506L13.847 17.4386C14.8671 18.4586 14.8671 20.1126 13.847 21.1326C12.8269 22.1527 11.1731 22.1527 10.1529 21.1326L2.76504 13.7446Z'
            fill='white'
          ></path>
          <path
            d='M13.8477 21.1327C12.8276 22.1526 11.1738 22.1526 10.1537 21.1327C9.13366 20.1126 9.13367 18.4587 10.1537 17.4386L17.5417 10.0506C18.5617 9.03064 20.2156 9.03064 21.2356 10.0506C22.2557 11.0708 22.2557 12.7245 21.2356 13.7447L13.8477 21.1327Z'
            fill='white'
          ></path>
          <path
            d='M11.9926 7.71164C13.5698 7.71164 14.8484 6.43305 14.8484 4.85583C14.8484 3.2786 13.5698 2 11.9926 2C10.4153 2 9.13672 3.2786 9.13672 4.85583C9.13672 6.43305 10.4153 7.71164 11.9926 7.71164Z'
            fill='#FBC91B'
          ></path>
        </svg>

        {/* Hamburger Menu Icon  */}
        <svg
          viewBox='0 0 24 24'
          fill='white'
          xmlns='http://www.w3.org/2000/svg'
          className='w-6 h-6 cursor-pointer'
          onClick={() => setIsOpen(true)}
        >
          <g clipPath='url(#clip0_429_11066)'>
            <path
              d='M3 6.00092H21M3 12.0009H21M3 18.0009H21'
              stroke='white'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              fill='white'
            />
          </g>
          <defs>
            <clipPath id='clip0_429_11066'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(0 0.000915527)'
              />
            </clipPath>
          </defs>
        </svg>
      </nav>

      {isOpen && <MobileOpenNav setIsOpen={setIsOpen} />}
    </>
  );
}

function MobileOpenNav({ setIsOpen }) {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  return (
    <div className='w-full absolute top-0 min-h-screen bg-gray-900 p-8 flex flex-col justify-between'>
      {/* Top Menu   */}
      <div className='flex items-center justify-between'>
        {/* Nas Icon  */}
        <svg viewBox='0 0 24 24' fill='none' className='h-8 w-8'>
          <path
            d='M2.76504 13.7446C1.74499 12.7245 1.74499 11.0707 2.76504 10.0506C3.7851 9.03065 5.43894 9.03065 6.45901 10.0506L13.847 17.4386C14.8671 18.4586 14.8671 20.1126 13.847 21.1326C12.8269 22.1527 11.1731 22.1527 10.1529 21.1326L2.76504 13.7446Z'
            fill='white'
          ></path>
          <path
            d='M13.8477 21.1327C12.8276 22.1526 11.1738 22.1526 10.1537 21.1327C9.13366 20.1126 9.13367 18.4587 10.1537 17.4386L17.5417 10.0506C18.5617 9.03064 20.2156 9.03064 21.2356 10.0506C22.2557 11.0708 22.2557 12.7245 21.2356 13.7447L13.8477 21.1327Z'
            fill='white'
          ></path>
          <path
            d='M11.9926 7.71164C13.5698 7.71164 14.8484 6.43305 14.8484 4.85583C14.8484 3.2786 13.5698 2 11.9926 2C10.4153 2 9.13672 3.2786 9.13672 4.85583C9.13672 6.43305 10.4153 7.71164 11.9926 7.71164Z'
            fill='#FBC91B'
          ></path>
        </svg>

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
