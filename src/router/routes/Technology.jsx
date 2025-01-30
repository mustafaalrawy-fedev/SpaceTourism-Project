import { useEffect, useState } from 'react';
import TechnologyPage from '../../layout/Technology/TechnologyPage';
import { useSelector, useDispatch } from 'react-redux';
import { getTech } from '../../store/TechnologySlice/technologySlice';

const Technology = () => {
  const { data, status, isLoading, isError, errorMsg } = useSelector(
    (state) => state.technology
  );
  const dispatch = useDispatch();
  const [elementIdx, setElementIdx] = useState(0);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getTech('technology'));
    }
    const interval = setInterval(() => {
      setElementIdx((prev) => (prev + 1) % data.length);
    }, 50000000);
    return () => clearInterval(interval);
  }, [data, status, dispatch]);
  return (
    <>
      <TechnologyPage
        data={data}
        elementIdx={elementIdx}
        setElementIdx={setElementIdx}
      />
    </>
  );
};

export default Technology;
