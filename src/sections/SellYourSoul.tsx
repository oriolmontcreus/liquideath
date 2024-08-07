import React from 'react';
import { motion, useInView } from 'framer-motion';
import WordPullUp from '@components/WordPullUp';

const SellYourSoulSection = () => {
  const benefits = [
    "Exclusive merch",
    "Early access",
    "Special Events",
    "All kinds of other cool shit we can't tell you about yet"
  ];

  const contentRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  const contentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const buttonInView = useInView(buttonRef, { once: true, amount: 0.5 });

  return (
    <>
      <section className="bg-darkish py-10 px-4 sm:px-8 text-white" id='sell-your-soul'>
        <div className="max-w-7xl mx-auto">
        <WordPullUp
        className="text-4xl bg-darkish font-bold tracking-[-0.02em] text-white md:text-7xl md:leading-[5rem]"
        words="SELL YOUR SOUL"
        />
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="text-left">
              <p className="text-xl text-gray-300 mb-10 mt-4">
                Join our exclusive club and unlock a world of dark delights. By selling your soul, you're not losing anything - you're gaining everything.
              </p>
              <h2 className="text-2xl font-bold mb-4">Membership Benefits:</h2>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={contentInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center md:justify-end">
              <img className="w-full rounded-lg object-contain" src="/extras/sellyoursoul.avifs" alt="Sell Your Soul" />
            </div>
          </motion.div>
          <div className="flex mt-5 flex-wrap justify-center md:justify-start gap-2">
  <motion.button
    ref={buttonRef}
    initial={{ y: 20, opacity: 0 }}
    animate={buttonInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{
      scale: 1.05,
      backgroundColor: 'rgba(230, 230, 230, 1)'
    }}
    whileTap={{
      scale: 0.95,
    }}
    className="px-6 py-3 text-gray-900 font-bold text-lg border-2 border-gray-700 rounded-sm bg-white transition duration-150 ease-in-out transform"
    onClick={() => window.location.href = '/oops'}
  >
    PAY CASH
  </motion.button>
  <motion.button
    ref={buttonRef}
    initial={{ y: 20, opacity: 0 }}
    animate={buttonInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
    transition={{ duration: 0.3 }}
    whileHover={{
      scale: 1.05,
      backgroundColor: 'rgba(139, 0, 0, 0.1)',
    }}
    whileTap={{
      scale: 0.95,
    }}
    className="px-6 py-3 text-white font-bold text-lg border-2 border-gray-700 rounded-sm bg-black transition duration-150 ease-in-out transform"
    onClick={() => window.location.href = '/oops'}
  >
    <span role="img" aria-label="skull" className="mr-2">💀</span>
    SELL YOUR SOUL
  </motion.button>
</div>
        </div>
      </section >
    </>
  );
};

export default SellYourSoulSection;