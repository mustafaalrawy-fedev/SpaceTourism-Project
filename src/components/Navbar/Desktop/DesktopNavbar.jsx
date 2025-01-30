import { useState } from 'react';
import { navLinks } from '../navlinks';
import { NavLink } from 'react-router-dom';

const DesktopNavbar = () => {
  const [links, setLinks] = useState(navLinks);
  return (
    <>
      <ul className='hidden md:flex md:gap-12 navbar-bg-color px-5 lg:px-24 '>
        {links.map((link, idx) => {
          const { href, label } = link;
          return (
            <li key={idx}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `h-(--navbar-height) flex justify-center items-center relative ${
                    isActive
                      ? 'after:absolute after:bottom-0 after:w-full after:h-1 after:bg-(--white) after:transition-all after:duration-300'
                      : 'after:w-0'
                  } hover:after:absolute hover:after:bottom-0 hover:after:w-full hover:after:h-1 hover:after:bg-(--white) hover:after:opacity-50  hover:after:transition-all hover:after:duration-300`
                }
              >
                <span className='font-semibold mr-2'>
                  {idx.toString().padStart(2, '0')}
                </span>
                <span className='font-light uppercase'>{label}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DesktopNavbar;
