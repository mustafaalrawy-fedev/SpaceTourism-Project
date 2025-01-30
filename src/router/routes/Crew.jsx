import { useEffect, useState } from 'react';
import CrewPage from '../../layout/Crew/CrewPage';
import { useDispatch, useSelector } from 'react-redux';
import { getCrew } from '../../store/crewSlice/CrewSlice';

const Crew = () => {
  const dispatch = useDispatch();
  const { data, status, isError, isLoading, errorMsg } = useSelector(
    (state) => state.crew
  );
  const [elementIdx, setElementIdx] = useState(0);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCrew('crew'));
    }
    const interval = setInterval(() => {
      setElementIdx((prevIndex) => (prevIndex + 1) % data.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [data, status, dispatch]);

  return (
    <>
      <CrewPage
        data={data}
        elementIdx={elementIdx}
        setElementIdx={setElementIdx}
      />
    </>
  );
};

export default Crew;
