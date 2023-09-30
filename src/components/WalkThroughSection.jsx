import PlayIcon from "../assets/play-icon.svg";

function WalkThroughSection() {
  return (
    <section className='max-w-[90%] mx-auto p-4 lg:w-[75%] flex flex-col my-16 gap-12'>
      <div className='flex flex-col md:items-center gap-5'>
        <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-center md:w-2/3'>
          You can focus on your learning. Dollat.pk handles the earning worries.
        </h2>
        <button className='p-4 px-5 bg-black text-white flex items-center justify-center gap-2 rounded-full'>
          <img src={PlayIcon} alt='Play Icon' />
          <p className='text-md'>Watch product walkthrough</p>
        </button>
      </div>

      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3 md:gap-20 md:flex-row items-center justify-betwenn md:justify-center'>
          <div className='w-[80%] h-auto md:w-[416px] md:h-auto lg:w-[480px] md:mr-auto'>
            <img
              src='https://nas.io/_next/image?url=https%3A%2F%2Fd2oi1rqwb0pj00.cloudfront.net%2FnasIO%2FhomePage%2Fpng%2Fcontrol.png&w=1200&q=75'
              alt='Image'
            />
          </div>
          <div className='flex flex-col items-start gap-2 md:w-1/2'>
            <p className='text-sm text-gray-600'>NAS.IO gives you</p>
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-[#007AA3]'>
              Ownership of data
            </h3>
            <p className='text-sm md:text-lg ml-8 text-gray-600'>
              You own all member data and can download it anytime. Don’t let the
              chat apps gate-keep it.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-3 md:gap-20 md:flex-row-reverse items-center justify-between md:justify-center'>
          <div className='w-[80%] h-auto md:w-[416px] md:h-auto lg:w-[480px] md:mr-auto'>
            <img
              src='https://nas.io/_next/image?url=https%3A%2F%2Fd2oi1rqwb0pj00.cloudfront.net%2FnasIO%2FhomePage%2Fpng%2Freach.png&w=1200&q=75'
              alt='Image'
            />
          </div>
          <div className='flex flex-col items-start gap-2 md:w-1/2'>
            <p className='text-sm text-gray-600'>NAS.IO gives you</p>
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-[#3442B2]'>
              Power to reach your members
            </h3>
            <p className='text-sm md:text-lg ml-8 text-gray-600'>
              Send broadcast messages through email, WhatsApp, Discord and more.
              Manage them all in one easy-to-use interface.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-3 md:gap-20 md:flex-row items-center justify-between md:justify-center'>
          <div className='w-[80%] h-auto md:w-[416px] md:h-auto lg:w-[480px] md:mr-auto'>
            <img
              src='https://nas.io/_next/image?url=https%3A%2F%2Fd2oi1rqwb0pj00.cloudfront.net%2FnasIO%2FhomePage%2Fpng%2Fmoney.png&w=1200&q=75'
              alt='Image'
            />
          </div>
          <div className='flex flex-col items-start gap-2 md:w-1/2'>
            <p className='text-sm text-gray-600'>NAS.IO gives you</p>
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-[#CD1D8D]'>
              Actionable insights
            </h3>
            <p className='text-sm md:text-lg ml-8 text-gray-600'>
              Find out more about your members and revenue: their engagement,
              location, purchase history, and activity within the chat group.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-3 md:gap-20 md:flex-row-reverse items-center justify-between md:justify-center'>
          <div className='w-[80%] h-auto md:w-[416px] md:h-auto lg:w-[480px] md:mr-auto'>
            <img
              src='https://nas.io/_next/image?url=https%3A%2F%2Fd2oi1rqwb0pj00.cloudfront.net%2FnasIO%2FhomePage%2Fpng%2Fhappymembers.png&w=1200&q=75'
              alt='Image'
            />
          </div>
          <div className='flex flex-col items-start gap-2 md:w-1/2'>
            <p className='text-sm text-gray-600'>NAS.IO gives you</p>
            <h3 className='text-2xl md:text-4xl lg:text-5xl font-semibold text-[#18774C]'>
              And everything else in between
            </h3>
            <p className='text-sm md:text-lg ml-8 text-gray-600'>
              We take care of your payments, subscriptions, and customer support
              so that you can focus on creating value for your members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WalkThroughSection;
