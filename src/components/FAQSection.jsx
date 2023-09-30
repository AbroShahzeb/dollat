import { useState } from "react";

import ArrowIcon from "../assets/black-arrow.svg";

const FAQs = [
  {
    id: 1,
    question: "What is Nas.io?",
    answer:
      "Nas.io is a platform for community builders and creators to monetise their chat groups, by offering memberships, paid events, and exclusive paid content. You can collect more information, create upselling funnels, while keeping the members engaged in the chat.",
  },
  {
    id: 2,
    question: "Do I need to pay for Nas.io?",
    answer:
      "It’s free to get started on Nas.io. When you monetise, Nas.io will keep a 8% cut of revenues for operating costs like development and customer support. There are no hidden fees and we only make money when you do. Read more at https://nas.io/pricing.",
  },
  {
    id: 3,
    question: "Do I own what I post on Nas.io?",
    answer:
      "You will always own your content and your relationships with your members. We make it easy to import and export your archive, email list, and payments information to and from other platforms.",
  },
  {
    id: 4,
    question: "Will Nas.io help me grow my chat group?",
    answer:
      "Yes, Nas.io gives you the tools. You automatically get your own landing page for your chat group, the events and the content you create. Invite your audience using your private nas.io link or run promo campaigns using discounts.",
  },
  {
    id: 5,
    question: "How do I move my existing community to Nas.io?",
    answer:
      "If you already have an audience on Wordpress, Mailchimp, Riggi, Substack, Patreon, or another platform, you can easily import your posts and your email list in the Nas.io setup process.",
  },
];

function FAQSection() {
  return (
    <section className='max-w-[90%] mx-auto p-4 md:pb-0 lg:w-[75%] flex flex-col my-16 gap-6'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-center'>
        Frequently asked questions
      </h2>

      {/* FAQs  */}
      <div className='flex flex-col items-start'>
        {FAQs.map((faq) => (
          <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <button className='p-3 px-4 text-md bg-[#FBC91B] font-medium rounded-full self-stretch  md:self-center'>
        Start for free
      </button>
    </section>
  );
}

// eslint-disable-next-line react/prop-types
function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col items-start w-full border-b-2 border-gray-200'>
      <div
        className='flex items-center justify-between w-full py-6 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='text-lg md:text-xl font-medium'>{question}</span>
        <img
          src={ArrowIcon}
          alt='arrow icon'
          className={isOpen ? "transform rotate-180" : ""}
        />
      </div>

      <p className={`${isOpen ? "block" : "hidden"} mb-4`}>{answer}</p>
    </div>
  );
}

export default FAQSection;
