import React from 'react';

const CrewPagination = ({ data, elementIdx, setElementIdx }) => {
  const handleImageIndex = (idx) => {
    setElementIdx(idx);
  };
  return (
    <>
      <ul className='absolute -bottom-20 -translate-x-[50%] left-[50%] lg:translate-x-0 lg:-bottom-32 lg:left-0 z-10 flex gap-8'>
        {data.map((_element, idx) => {
          return (
            <li key={idx} className='w-3.5 h-3.5'>
              <div
                className={`w-full h-full rounded-full transition-all duration-300 hover:bg-(--white) hover:opacity-60 cursor-pointer ${
                  elementIdx === idx
                    ? 'bg-(--white)'
                    : 'bg-(--white) opacity-30'
                }`}
                onClick={() => handleImageIndex(idx)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CrewPagination;
