import DestinationsPage from '../../layout/Destinations/DestinationsPage';
import { useEffect, useState } from 'react';
// Redux-Toolkit
import { useDispatch, useSelector } from 'react-redux';
import { getDestinations } from '../../store/destinationsSlice/destinationsSlice';

const Destinations = () => {
  const dispatch = useDispatch();
  const { data, status, isError, isLoading, errorMsg } = useSelector(
    (state) => state.destinations
  );
  const [elementIdx, setElementIdx] = useState(0);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getDestinations('destinations'));
    }
    const interval = setInterval(() => {
      setElementIdx((prevIndex) => (prevIndex + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [data, status, dispatch]);

  return (
    <>
      <DestinationsPage
        data={data}
        elementIdx={elementIdx}
        setElementIdx={setElementIdx}
      />
    </>
  );
};

export default Destinations;
