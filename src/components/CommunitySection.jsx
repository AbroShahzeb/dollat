import ChatIcon from "../assets/chat-icon.svg";
import VideoIcon from "../assets/video-icon.svg";
import GlobalIcon from "../assets/global-icon.svg";
import DollarIcon from "../assets/dollar-icon.svg";
import ThumbIcon from "../assets/thumb-icon.svg";

function CommunitySection() {
  return (
    <section className='max-w-[90%] mx-auto p-4 lg:w-[75%] flex flex-col lg:flex-row my-10 gap-3'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold w-full'>
          The Community Platform for Memberships and more
        </h1>
        <div className='flex flex-col items-start gap-3'>
          <div className='flex gap-2 items-center'>
            <img src={ChatIcon} alt='chat icon' />
            <p className='text-slate-500'>
              Integrate with WhatsApp, Discord, and Telegram
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={VideoIcon} alt='video icon' />
            <p className='text-slate-500'>
              Sell courses, events, and digital products
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={GlobalIcon} alt='globe icon' />
            <p className='text-slate-500'>Accept global payments</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={DollarIcon} alt='dollar icon' />
            <p className='text-slate-500'>
              Keep up to 100% of revenue and pay $0 per month
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={ThumbIcon} alt='like icon' />
            <p className='text-slate-500'>Pay $0 per month</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-4'>
          <button className='p-3 px-4 text-md bg-[#FBC91B] font-medium rounded-full'>
            Start for free
          </button>
          <button className='p-3 px-4 text-md border-2 font-medium rounded-full'>
            See Demo
          </button>
        </div>
      </div>

      <div className='w-full'>
        <img
          src='https://d2oi1rqwb0pj00.cloudfront.net/nasIO/new_home/png/primary-hero-image.png'
          alt='Section Image'
          className='w-full'
        />
      </div>
    </section>
  );
}

export default CommunitySection;
