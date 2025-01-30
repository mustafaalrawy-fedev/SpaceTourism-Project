import { Outlet } from 'react-router-dom';
import Header from '../../layout/Header/Header';

const Root = () => {
  return (
    <>
      <section className='w-dvw h-dvh'>
        <Header />
        <Outlet />
      </section>
    </>
  );
};

export default Root;
