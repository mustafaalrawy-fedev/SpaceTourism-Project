import { motion, AnimatePresence } from 'motion/react';

const DestinationsInfo = ({ data, elementIdx }) => {
  return (
    <>
      <ul className='lg:mr-24'>
        {data.map((info, idx) => {
          const { name, description, travel, distance } = info;
          return (
            <AnimatePresence key={idx}>
              {elementIdx === idx ? (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: elementIdx === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  key={elementIdx}
                  className='md:flex md:justify-center items-center text-center lg:text-start lg:items-start md:flex-col gap-7'
                >
                  <h1 className='text-6xl uppercase mb-3'>{name}</h1>
                  <p className='border-b-1 border-(--white) pb-8'>
                    {description}
                  </p>
                  <aside className='flex items-center justify-between gap-5 flex-col lg:flex-row w-full pt-8 md:pt-0'>
                    <div>
                      <h3>AVG. DISTANCE</h3>
                      <h2>{distance}</h2>
                    </div>
                    <div>
                      <h3>EST. TRAVEL TIME</h3>
                      <h2>{travel}</h2>
                    </div>
                  </aside>
                </motion.li>
              ) : null}
            </AnimatePresence>
          );
        })}
      </ul>
    </>
  );
};

export default DestinationsInfo;
