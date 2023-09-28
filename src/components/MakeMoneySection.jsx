import Icon1 from "../assets/make-money-sec-icon-1.svg";
import Icon2 from "../assets/make-money-sec-icon-2.svg";
import Icon3 from "../assets/make-money-sec-icon-3.svg";

function MakeMoneySection() {
  return (
    <section className='max-w-[90%] mx-auto p-4 md:pb-0 lg:w-[75%] flex flex-col my-16 gap-6'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-medium text-center'>
        Make your first dollar on Nas.io
      </h2>
      <div className='bg-[#FEFBF1] rounded-[34px] p-8 md:p-16 md:pb-0 flex flex-col gap-8 '>
        <div className='flex flex-col md:flex-row items-start gap-8 md:gap-5'>
          <div className='flex flex-col items-start gap-3'>
            <img src={Icon1} alt='Icon' className='mb-4 md:mb-8' />
            <h3 className='text-md md:text-lg font-semibold'>
              Sell memberships
            </h3>
            <p className='text-sm'>
              Offer monthly, quarterly, or annual subscriptions with application
              gating, refunds, group chat removal and more!
            </p>
          </div>

          <div className='flex flex-col items-start gap-3'>
            <img src={Icon2} alt='Icon' className='mb-4 md:mb-8' />
            <h3 className='text-md md:text-lg font-semibold'>Sell content</h3>
            <p className='text-sm'>
              Sell any digital product or a course to your audience and start
              making money right away! We handle everything else for you.
            </p>
          </div>

          <div className='flex flex-col items-start gap-3'>
            <img src={Icon3} alt='Icon' className='mb-4 md:mb-8' />
            <h3 className='text-md md:text-lg font-semibold'>
              Host events and workshops
            </h3>
            <p className='text-sm'>
              Workshops, in-person meetups, or online webinars and charge for
              them using a beautiful landing page!
            </p>
          </div>
        </div>

        <div className='hidden md:block'>
          <img
            src='https://nas.io/_next/image?url=https%3A%2F%2Fd2oi1rqwb0pj00.cloudfront.net%2FnasIO%2Fnew_home%2Fpng%2Fchat-group-monetization-banner.png&w=1200&q=75'
            alt='Banner'
          />
        </div>
      </div>
    </section>
  );
}

export default MakeMoneySection;
