import { motion } from 'motion/react';

const TechnologyPagination = ({ data, elementIdx, setElementIdx }) => {
  const handleImageIndex = (idx) => {
    setElementIdx(idx);
  };
  return (
    <>
      <motion.ul
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7, staggerChildren: 0.3 }}
        className='flex flex-row lg:flex-col gap-5 w-fit h-full justify-center'
      >
        {data.map((_elements, idx) => {
          return (
            <motion.li transition={{ duration: 0.3 }} key={idx}>
              <motion.button
                initial={{ opacity: 0.3, borderColor: `var(--white)` }}
                animate={
                  elementIdx === idx
                    ? {
                        opacity: 1,
                        backgroundColor: `var(--white)`,
                        color: `var(--dark-blue)`,
                      }
                    : { opacity: 0.3, borderColor: `var(--white)` }
                }
                whileHover={{
                  scale: 1.1,
                  opacity: 1,
                  transition: { duration: 0.5 },
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className={`text-2xl w-16 h-16 md:w-18 md:h-18 rounded-full cursor-pointer border  `}
                onClick={() => handleImageIndex(idx)}
              >
                {idx + 1}
              </motion.button>
            </motion.li>
          );
        })}
      </motion.ul>
    </>
  );
};

export default TechnologyPagination;
