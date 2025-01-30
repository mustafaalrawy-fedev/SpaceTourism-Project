import desktopHomeBg from '/assets/home/background-home-desktop.jpg';
import tabletHomeBg from '/assets/home/background-home-tablet.jpg';
import mobileHomeBg from '/assets/home/background-home-mobile.jpg';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className='h-full md:h-screen w-full relative top-0 left-0'>
        <aside>
          <img
            src={desktopHomeBg}
            loading='lazy'
            alt='homeBgImg'
            className='hidden lg:block h-full w-full object-cover'
          />
          <img
            src={tabletHomeBg}
            loading='lazy'
            alt='homeBgImg'
            className='hidden md:block lg:hidden h-screen w-full object-cover'
          />
          <img
            src={mobileHomeBg}
            loading='lazy'
            alt='homeBgImg'
            className='md:hidden block h-screen w-full object-cover'
          />
        </aside>
        <article className='flex items-center flex-col lg:flex-row absolute top-[25%] lg:top-[50%] justify-between section gap-10'>
          <motion.main
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='text-center lg:text-start lg:basis-[50%] text-(--white) flex flex-col gap-5'
          >
            <h3 className='text-md md:text-xl tracking-[2px]'>
              SO, YOU WANT TO TRAVEL TO
            </h3>
            <h1 className='text-6xl md:text-8xl'>SPACE</h1>
            <p className='font-light leading-7'>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because wee'll give you a truly out
              of this world experience!
            </p>
          </motion.main>
          <motion.button
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='h-36 w-36 md:h-44 md:w-44 lg:h-60 lg:w-60 bg-(--white) rounded-full text-xl sm:text-2xl transition-all duration-300 hover:bg-black hover:text-(--white) hover:scale-105 cursor-pointer'
            onClick={() => navigate('/destination')}
          >
            EXPLORE
          </motion.button>
        </article>
      </section>
    </>
  );
};

export default HomePage;
