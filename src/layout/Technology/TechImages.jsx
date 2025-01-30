import { AnimatePresence, motion } from 'motion/react';

const TechImages = ({ data, elementIdx }) => {
  return (
    <>
      <aside className='w-[calc(100%+80px)] lg:w-full h-full relative -left-10 lg:left-0'>
        {data.map((imgs, idx) => {
          const { landscape, portrait } = imgs.images;
          return (
            <AnimatePresence key={idx}>
              {elementIdx === idx ? (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className='w-full'
                >
                  <img
                    className='block md:hidden lg:block w-full h-full'
                    src={portrait}
                    alt={`tech-img-${idx}`}
                  />
                  {/* Small Screens */}
                  <img
                    className='hidden md:block lg:hidden w-full'
                    src={landscape}
                    alt={`tech-img-${idx}`}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          );
        })}
      </aside>
    </>
  );
};

export default TechImages;
