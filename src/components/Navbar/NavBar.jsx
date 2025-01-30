import DesktopNavbar from './Desktop/DesktopNavbar';
import MobileNavBar from './Mobile/MobileNavBar';

const NavBar = () => {
  return (
    <>
      <nav className='relative z-20 h-full flex justify-center items-center  after:h-0 xl:after:h-0.5 after:bg-(--white) after:w-1/2 after:absolute after:opacity-10 after:right-[97%]'>
        <DesktopNavbar />
        <MobileNavBar />
      </nav>
    </>
  );
};

export default NavBar;
