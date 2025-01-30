// Destinations Image Background
import desktopDestinationsBgImg from '/assets/destination/background-destination-desktop.jpg';
import tabletDestinationsBgImg from '/assets/destination/background-destination-tablet.jpg';
import mobileDestinationsBgImg from '/assets/destination/background-destination-mobile.jpg';
import DestinationsImgs from './DestinationsImgs';
import DestinationsTabs from './DestinationsTabs';
import DestinationsInfo from './DestinationsInfo';
// import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const DestinationsPage = ({ data, elementIdx, setElementIdx }) => {
  // const [elementIdx, setElementIdx] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setElementIdx((prevIndex) => (prevIndex + 1) % data.length);
  //   }, 10000);
  //   return () => clearInterval(interval);
  // }, [data]);
  return (
    <>
      <section>
        <aside className='w-full h-[1300px] lg:h-[800px]'>
          <img
            src={desktopDestinationsBgImg}
            alt='destination-bg-image'
            className='hidden lg:block w-full h-full'
          />
          <img
            src={tabletDestinationsBgImg}
            alt='destination-bg-image'
            className='hidden md:block lg:hidden w-full h-full'
          />
          <img
            src={mobileDestinationsBgImg}
            alt='destination-bg-image'
            className='block md:hidden w-full h-full'
          />
        </aside>
        <article className='section absolute top-[25%] text-(--white) max-w-full'>
          <motion.main
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='mb-20 text-center lg:text-start w-full'
          >
            <h1 className='text-lg md:text-xl lg:text-2xl'>
              <span className='mr-3 text-(--subTitle-color) font-bold'>01</span>
              PICK YOUR DESTINATION
            </h1>
          </motion.main>
          <article className='grid grid-cols-1 lg:grid-cols-2 gap-10 w-full h-full'>
            {/* images */}
            <DestinationsImgs data={data} elementIdx={elementIdx} />
            <motion.aside
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='md:flex justify-center lg:justify-normal items-center lg:items-start flex-col '
            >
              <DestinationsTabs
                data={data}
                elementIdx={elementIdx}
                setElementIdx={setElementIdx}
              />
              <DestinationsInfo data={data} elementIdx={elementIdx} />
            </motion.aside>
          </article>
        </article>
      </section>
    </>
  );
};

export default DestinationsPage;
