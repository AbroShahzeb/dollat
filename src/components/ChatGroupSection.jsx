import GlobeIcon from "../assets/global-icon.svg";
import StarIcon from "../assets/star-icon.svg";

const features = [
  {
    id: 1,
    icon: GlobeIcon,
    title: "Paid Membership",
  },
  {
    id: 2,
    icon: GlobeIcon,
    title: "Dedicated Website",
  },
  {
    id: 3,
    icon: GlobeIcon,
    title: "Content Library",
  },
  {
    id: 4,
    icon: GlobeIcon,
    title: "Host and sell events",
  },
  {
    id: 5,
    icon: GlobeIcon,
    title: "Sell video lessons",
  },
  {
    id: 6,
    icon: GlobeIcon,
    title: "Secure payment system",
  },
  {
    id: 7,
    icon: GlobeIcon,
    title: "Discout Engine",
  },
  {
    id: 8,
    icon: GlobeIcon,
    title: "Broadast messages",
  },
  {
    id: 9,
    icon: GlobeIcon,
    title: "Approve members",
  },
  {
    id: 10,
    icon: GlobeIcon,
    title: "Data ownership",
  },
];

function ChatGroupSection() {
  return (
    <section className='max-w-[90%] lg:w-[75%] mx-auto my-8 md:my-20 flex flex-col gap-6 items-center justify-center'>
      <div className='flex flex-col gap-3 items-center justify-center'>
        <h2 className='text-2xl md:text-3xl font-medium text-center'>
          Your chat group can be so much more...
        </h2>

        <div className='flex gap-2 flex-wrap items-center justify-center'>
          {features.map((feature) => {
            return (
              <div
                key={feature.id}
                className='flex items-center justify-center text-sm md:text-md gap-2 p-2 rounded-full border-2 hover:border-gray-800 cursor-pointer'
              >
                <img src={feature.icon} alt={feature.title} />
                <p>{feature.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className='max-w-[95%] lg:w-[70%] mx-auto p-8 md:p-10 rounded-xl text-center bg-emerald-50 gap-6 flex flex-col items-center'>
        <p className='flex items-center p-2 border-[1px] text-sm rounded-sm border-[#946800] text-[#946800] bg-amber-50'>
          <img src={StarIcon} alt='Star icon' />
          <span>NEW</span>
        </p>

        <h3 className='text-2xl md:text-3xl font-medium'>
          Try Nas.io for your WhatsApp group
        </h3>
        <p className='text-md -mt-3'>
          Member management and Monetisation just became 10x easier
        </p>

        <button className='text-white px-3 py-2 bg-gray-900 rounded-full'>
          Learn More
        </button>
      </div>
    </section>
  );
}

export default ChatGroupSection;
