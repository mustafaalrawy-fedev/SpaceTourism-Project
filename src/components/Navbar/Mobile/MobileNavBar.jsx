import { NavLink } from 'react-router-dom';
import { navLinks } from '../navLinks';
import { useState } from 'react';
import closeIcon from '/assets/shared/icon-close.svg';
import menuIcon from '/assets/shared/icon-hamburger.svg';
import { motion } from 'motion/react';

const MobileNavBar = () => {
  const [links, setLinks] = useState(navLinks);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <aside className='block md:hidden'>
        <main className='pr-5'>
          {/* Menu Bar Icon */}
          <img
            onClick={() => setIsOpen(true)}
            src={menuIcon}
            alt='menuIcon'
            className=' cursor-pointer select-none'
          />
        </main>
        <motion.ul
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? '0%' : '100%' }}
          transition={{ duration: 0.5 }}
          className={`fixed w-3/4 h-full navbar-bg-color right-0 top-0 flex flex-col justify-center gap-6 p-6 pr-0`}
        >
          {/* Close Icon */}
          <motion.img
            initial={{ y: -10, opacity: 0 }}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            onClick={() => setIsOpen(false)}
            src={closeIcon}
            alt='closeIcon'
            className='absolute top-10 right-10 cursor-pointer select-none'
          />
          {links.map((link, idx) => {
            const { href, label } = link;
            return (
              <motion.li
                initial={{ opacity: 0, x: 50 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                key={idx}
                className='w-full'
              >
                <NavLink
                  to={href}
                  className={({ isActive }) =>
                    ` p-5 w-full block text-(--white) relative ${
                      isActive
                        ? `after:absolute after:bg-(--white) after:h-full after:w-1 after:top-0 after:right-0 after:transition-all after:duration-300`
                        : 'after:h-0'
                    } hover:after:absolute hover:after:bg-(--white) hover:after:h-full hover:after:w-1 hover:after:top-0 hover:after:right-0 hover:after:opacity-50  hover:after:transition-all hover:after:duration-300`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <span className='font-semibold mr-2'>
                    {idx.toString().padStart(2, '0')}
                  </span>
                  <span className='font-light uppercase'>{label}</span>
                </NavLink>
              </motion.li>
            );
          })}
        </motion.ul>
      </aside>
    </>
  );
};

export default MobileNavBar;
