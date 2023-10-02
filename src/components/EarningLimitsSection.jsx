import { useState } from "react";

function EarningLimitsSection() {
  const [value, setValue] = useState(10);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <section className='w-full my-10 lg:my-24 lg:py-16 bg-gradient-to-b to-[#FFFAE8] from-[#ffffff] lg:px-[120px] md:px-[40px] px-24 py-80'>
      <div className='max-w-[95%] mx-auto lg:w-[75%] flex'>
        <h2>See how much you can make</h2>

        <div>
          <p>How many people in chat?</p>
          <p>10</p>

          <div className='flex items-center space-x-4'>
            <input
              type='range'
              min='10'
              max='1000'
              step='90'
              value={value}
              onChange={handleInputChange}
              className='slider-thumb w-full h-8 bg-gray-300 appearance-none '
            />
            <output className='text-gray-700'>{value}</output>
          </div>
        </div>
        <div>Hello</div>
      </div>
    </section>
  );
}

export default EarningLimitsSection;
