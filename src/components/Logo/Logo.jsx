import logoImg from '/assets/shared/logo.svg';
import { motion } from 'motion/react';

const Logo = () => {
  return (
    <>
      <motion.aside
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='pl-5 lg:pl-24'
      >
        <img src={logoImg} alt='logo' />
      </motion.aside>
    </>
  );
};

export default Logo;
