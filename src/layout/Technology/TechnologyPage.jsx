import desktopTechnologyBg from '/assets/technology/background-technology-desktop.jpg';
import tabletTechnologyBg from '/assets/technology/background-technology-tablet.jpg';
import mobileTechnologyBg from '/assets/technology/background-technology-mobile.jpg';
import { AnimatePresence, motion } from 'motion/react';
import TechnologyPagination from './TechnologyPagination';
import TechnologyInfo from './TechnologyInfo';
import TechImages from './TechImages';

const TechnologyPage = ({ data, elementIdx, setElementIdx }) => {
  return (
    <>
      <section className='h-full'>
        <aside className='lg:h-[900px] md:h-[1200px] h-[1500px]'>
          <img
            src={desktopTechnologyBg}
            alt='desktopTechnologyBg'
            className='hidden lg:block w-full h-full object-cover'
          />
          <img
            src={tabletTechnologyBg}
            alt='tabletTechnologyBg'
            className='md:block lg:hidden hidden w-full h-full object-cover'
          />
          <img
            src={mobileTechnologyBg}
            alt='mobileTechnologyBg'
            className='block md:hidden w-full h-full object-cover'
          />
        </aside>
        <main className='lg:pl-20 pl-8 absolute -bottom-44 text-(--white) h-full'>
          <motion.main
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mb-20 text-center lg:text-start w-full '
          >
            <h1 className='text-lg md:text-xl lg:text-2xl'>
              <span className='mr-3 text-(--subTitle-color) font-bold'>03</span>
              SPACE LAUNCH 101
            </h1>
          </motion.main>
          {/* large screen */}
          <section className='flex flex-col-reverse lg:flex-row gap-10'>
            <article className='flex flex-col lg:flex-row items-center'>
              <TechnologyPagination
                data={data}
                elementIdx={elementIdx}
                setElementIdx={setElementIdx}
              />
              {/* text */}
              <TechnologyInfo data={data} elementIdx={elementIdx} />
            </article>
            <TechImages data={data} elementIdx={elementIdx} />
          </section>
        </main>
      </section>
    </>
  );
};

export default TechnologyPage;
