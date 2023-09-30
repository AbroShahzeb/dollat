/* eslint-disable react/no-unescaped-entities */
function TestimonialSection() {
  return (
    <section className='max-w-[90%] mx-auto lg:w-[75%] flex flex-col  items-start lg:items-center gap-8 my-10 md:my-20'>
      <div className='flex flex-col text-center items-center gap-3'>
        <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold'>
          "It's Stupid Simple."
        </h2>
        <p className='text-lg md:text-xl text-gray-500'>
          Our customers love how easy it is to start and run a community with
          nas.io
        </p>
      </div>

      <div className='flex gap-4 items-center flex-col lg:flex-row w-full'>
        <div className='w-full lg:w-1/3 rounded-2xl bg-gray-200 h-64 lg:h-[500px]'></div>
        <div className='w-full lg:w-1/3 rounded-2xl bg-gray-200 h-64 lg:h-[500px]'></div>
        <div className='w-full lg:w-1/3 rounded-2xl bg-gray-200 h-64 lg:h-[500px]'></div>
      </div>

      <button className='text-md p-[10px] rounded-full bg-[#FBC91B] font-medium self-center'>
        Start for free
      </button>
    </section>
  );
}

export default TestimonialSection;
