import React from 'react';
import Logo from '../../components/Logo/Logo';
import NavBar from '../../components/Navbar/NavBar';

const Header = () => {
  return (
    <>
      <header className='flex justify-between items-center h-(--navbar-height) absolute top-10 z-20 w-full text-(--white)'>
        <Logo />
        <NavBar />
      </header>
    </>
  );
};

export default Header;
