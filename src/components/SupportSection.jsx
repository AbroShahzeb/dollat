import TickIcon from "../assets/tick-icon.svg";

function SupportSection() {
  return (
    <section className='max-w-[90%] mx-auto  my-8 md:my-20 lg:w-[75%] flex flex-col gap-8 items-start md:items-center'>
      <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold '>{`We're here to help`}</h2>
      <div className='flex items-center w-full gap-2 md:gap-4 md:px-8 justify-center'>
        <img
          src='https://nas.io/_next/image?url=https%3A%2F%2Fd2oi1rqwb0pj00.cloudfront.net%2FnasIO%2Findia-home%2Fnas_team_02.png&w=640&q=75'
          alt='Person 1'
          className='w-1/4 md:w-1/6'
        />
        <img
          src='https://nas.io/_next/image?url=https%3A%2F%2Fd2oi1rqwb0pj00.cloudfront.net%2FnasIO%2FhomePage%2Fpng%2Fhomepage-team-nat.jpg&w=640&q=75'
          alt='Person 2'
          className='w-1/4  rounded-full md:w-1/6'
        />
        <img
          src='https://nas.io/_next/image?url=https%3A%2F%2Fd2oi1rqwb0pj00.cloudfront.net%2FnasIO%2FhomePage%2Fpng%2Fsteph-support.png&w=640&q=75'
          alt='Person 3'
          className='w-1/4 md:w-1/6'
        />
        <img
          src='https://nas.io/_next/image?url=https%3A%2F%2Fd2oi1rqwb0pj00.cloudfront.net%2FnasIO%2FhomePage%2Fpng%2Fhomepage-team-matt.jpg&w=640&q=75'
          alt='Person 4'
          className='w-1/4 rounded-full md:w-1/6'
        />
      </div>

      <div className='flex flex-col items-start md:items-center gap-4'>
        <div className='flex items-center gap-3 md:text-2xl font-medium'>
          <img src={TickIcon} alt='Checked Icon' className='w-8' />
          <p>Dedicated account support</p>
        </div>
        <div className='flex items-center gap-3 md:text-2xl font-medium'>
          <img src={TickIcon} alt='Checked Icon' className='w-8' />
          <p>Free strategy consultation</p>
        </div>
        <div className='flex items-center gap-3 md:text-2xl font-medium'>
          <img src={TickIcon} alt='Checked Icon' className='w-8' />
          <p>Free access to resources and events</p>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
