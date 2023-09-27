function Hero() {
  return (
    <header className='max-w-[90%] mx-auto lg:w-[75%] my-10 animate-scale-up'>
      <div className='grid grid-cols-2 sm:grid-cols-6 gap-2'>
        <img src='/images/hero-1.png' alt='Hero 01' className='w-full' />
        <img src='/images/hero-2.png' alt='Hero 02' className='w-full' />
        <img src='/images/hero-3.png' alt='Hero 03' className='w-full' />
        <img src='/images/hero-4.png' alt='Hero 04' className='w-full' />
        <img
          src='/images/hero-5.png'
          alt='Hero 05'
          className='hidden sm:block w-full'
        />
        <img
          src='/images/hero-6.png'
          alt='Hero 06'
          className='hidden sm:block w-full'
        />
      </div>
    </header>
  );
}

export default Hero;
