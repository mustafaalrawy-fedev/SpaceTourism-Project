import { motion, AnimatePresence } from 'motion/react';

const DestinationsImgs = ({ data, elementIdx }) => {
  return (
    <>
      <motion.ul
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='md:flex md:justify-center md:items-center'
      >
        {data.map((destinationsInfo, index) => {
          const { images } = destinationsInfo;
          return (
            <AnimatePresence key={index}>
              {elementIdx === index ? (
                <motion.li
                  loading='lazy'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: elementIdx === index ? 1 : 0,
                    y: [-70, 0],
                  }}
                  transition={{ duration: 0.5 }}
                  key={index}
                  className=''
                >
                  <img src={images.webp} alt={elementIdx} className='w-auto' />
                </motion.li>
              ) : null}
            </AnimatePresence>
          );
        })}
      </motion.ul>
    </>
  );
};

export default DestinationsImgs;
