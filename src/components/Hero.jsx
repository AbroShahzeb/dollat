import Hero1 from "../assets/images/hero-1.png";
import Hero2 from "../assets/images/hero-2.png";
import Hero3 from "../assets/images/hero-3.png";
import Hero4 from "../assets/images/hero-4.png";
import Hero5 from "../assets/images/hero-5.png";
import Hero6 from "../assets/images/hero-6.png";

function Hero() {
  return (
    <header className='max-w-[90%] mx-auto lg:w-[75%] my-10 animate-scale-up'>
      <div className='grid grid-cols-2 sm:grid-cols-6 gap-2'>
        <img src={Hero1} alt='Hero 01' className='w-full' />
        <img src={Hero2} alt='Hero 02' className='w-full' />
        <img src={Hero3} alt='Hero 03' className='w-full' />
        <img src={Hero4} alt='Hero 04' className='w-full' />
        <img src={Hero5} alt='Hero 05' className='hidden sm:block w-full' />
        <img src={Hero6} alt='Hero 06' className='hidden sm:block w-full' />
      </div>
    </header>
  );
}

export default Hero;
