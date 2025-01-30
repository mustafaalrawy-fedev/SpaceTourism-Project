import { AnimatePresence, motion } from 'motion/react';

const CrewInfo = ({ data, elementIdx }) => {
  return (
    <>
      <ul className='text-center lg:text-start'>
        {data.map((info, idx) => {
          const { name, role, bio } = info;
          return (
            <AnimatePresence key={idx}>
              {elementIdx === idx ? (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className='flex flex-col gap-5'
                >
                  <h2 className='uppercase text-(--white) opacity-30 text-3xl'>
                    {role}
                  </h2>
                  <h1 className='uppercase text-4xl tracking-wider'>{name}</h1>
                  <p className='text-(--white) opacity-70 leading-7 text-md'>
                    {bio}
                  </p>
                </motion.li>
              ) : null}
            </AnimatePresence>
          );
        })}
      </ul>
    </>
  );
};

export default CrewInfo;
