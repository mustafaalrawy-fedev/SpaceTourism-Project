import desktopCrewBg from '/assets/crew/background-crew-desktop.jpg';
import tabletCrewBg from '/assets/crew/background-crew-tablet.jpg';
import mobileCrewBg from '/assets/crew/background-crew-mobile.jpg';
import { motion } from 'motion/react';
import CrewInfo from './CrewInfo';
import CrewImages from './CrewImages';
import CrewPagination from './CrewPagination';

const CrewPage = ({ data, elementIdx, setElementIdx }) => {
  return (
    <>
      <section>
        <main className='max-w-full h-[1200px] sm:h-[1300px] lg:h-[1100px]'>
          <img
            src={desktopCrewBg}
            alt='desktopCrewBg'
            className='hidden lg:block w-full h-full object-cover'
          />
          <img
            src={tabletCrewBg}
            alt='tabletCrewBg'
            className='hidden md:block lg:hidden w-full h-full object-cover'
          />
          <img
            src={mobileCrewBg}
            alt='mobileCrewBg'
            className='block md:hidden w-full h-full object-cover'
          />
        </main>
        <article className='section absolute top-[25%] text-(--white)'>
          <motion.main
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mb-20 text-center lg:text-start w-full'
          >
            <h1 className='text-lg md:text-xl lg:text-2xl'>
              <span className='mr-3 text-(--subTitle-color) font-bold'>02</span>
              MEET YOUR CREW
            </h1>
          </motion.main>
          <article className='h-screen w-full grid grid-cols-1 lg:grid-cols-2 gap-40 justify-center lg:justify-between items-center '>
            <motion.main
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='relative'
            >
              <CrewInfo data={data} elementIdx={elementIdx} />
              <CrewPagination
                data={data}
                elementIdx={elementIdx}
                setElementIdx={setElementIdx}
              />
            </motion.main>
            {/* crew images */}
            <motion.aside
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <CrewImages data={data} elementIdx={elementIdx} />
            </motion.aside>
          </article>
        </article>
      </section>
    </>
  );
};

export default CrewPage;
