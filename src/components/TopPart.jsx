import DollarIcon from "../assets/dollar-icon.svg";

function TopPart() {
  return (
    <div className='w-full p-3 flex items-center justify-center bg-green-100 gap-4 flex-col sm:flex-row'>
      <p className='flex items-center gap-2'>
        <img src={DollarIcon} alt='Dollar Icon' />
        Introducing Dollat Freelancing for South Asians ✨
      </p>

      <button className='text-sm rounded-full py-1 px-2 border-2 border-gray-300 cursor-pointer hover:bg-green-200'>
        Learn More
      </button>
    </div>
  );
}

export default TopPart;
