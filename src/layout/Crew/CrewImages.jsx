import { AnimatePresence, motion } from 'motion/react';

const CrewImages = ({ data, elementIdx }) => {
  return (
    <>
      <ul className='relative'>
        {data.map((info, idx) => {
          const { images } = info;
          return (
            <AnimatePresence key={idx}>
              {elementIdx === idx ? (
                <motion.li
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <img src={images.webp} alt={`crew-${idx}`} />
                </motion.li>
              ) : null}
            </AnimatePresence>
          );
        })}
        <div className='absolute lg:w-full w-[calc(100%+80px)] -left-8 lg:left-0 h-[25%] -bottom-10 bg-gradient-to-t from-(--dark-blue) from-80% to-transparent '></div>
      </ul>
    </>
  );
};

export default CrewImages;
