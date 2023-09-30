function ChatSection() {
  return (
    <section className='w-full lg:w-[75%] lg:mx-auto py-8 md:py-24 lg:py-44 bg-slate-100'>
      <div className='max-w-[90%] mx-auto lg:w-[75%] flex  flex-col-reverse items-center md:items-stretch md:flex-row gap-5 justify-between'>
        <div className='flex flex-col items-start gap-5 w-full md:w-1/2'>
          <h3 className='text-2xl md:text-3xl font-medium'>
            Nas.io works with chat apps your members already use
          </h3>
          <p className='text-md md:text-lg lg:text-xl -mt-2 text-gray-400 mb-4'>
            Nas.io integrates with the most popular chat apps, including
            WhatsApp Discord and Telegram.
          </p>
          <button className='text-md p-4 px-5 rounded-full bg-[#FBC91B] font-medium'>
            Start for free
          </button>
        </div>

        <div className='w-1/2'>
          <div className='w-full rounded-full h-64 bg-emerald-300'></div>
        </div>
      </div>
    </section>
  );
}

export default ChatSection;
