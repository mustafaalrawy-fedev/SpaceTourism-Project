import { AnimatePresence, motion } from 'motion/react';

const TechnologyInfo = ({ data, elementIdx }) => {
  return (
    <>
      <main className='p-2 pt-8 md:p-8 md:pt-0 text-center lg:text-start '>
        {data.map((info, idx) => {
          const { name, description } = info;
          return (
            <AnimatePresence key={idx}>
              {elementIdx === idx ? (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <h1 className='text-xl md:text-2xl mb-3 opacity-40'>
                    THE TERMINOLOGY...
                  </h1>
                  <h1 className='text-3xl md:text-5xl uppercase tracking-wider mb-9'>
                    {name}
                  </h1>
                  <p className='text-md leading-7 opacity-70'>{description}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          );
        })}
      </main>
    </>
  );
};

export default TechnologyInfo;
