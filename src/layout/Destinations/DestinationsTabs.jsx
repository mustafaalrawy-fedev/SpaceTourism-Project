const DestinationsTabs = ({ data, elementIdx, setElementIdx }) => {
  const handleCurrentImg = (idx) => {
    setElementIdx(idx);
  };

  return (
    <>
      <ul className='flex gap-5 lg:gap-12 items-center justify-evenly lg:justify-between w-full lg:w-fit'>
        {data.map((destinationsInfo, idx) => {
          const { name } = destinationsInfo;
          return (
            <li key={idx} className='h-16 w-fit mb-8'>
              <button
                className={`text-md uppercase w-full  h-full flex justify-center items-center relative transition-all duration-300 cursor-pointer after:transition-all after:duration-300 ${
                  elementIdx === idx
                    ? 'after:absolute after:w-full after:h-1 after:bg-(--white) after:bottom-0'
                    : 'after:w-0'
                } hover:after:absolute hover:after:w-full hover:after:h-1 hover:after:bg-(--white) hover:after:bottom-0 hover:after:opacity-50 `}
                onClick={() => handleCurrentImg(idx)}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DestinationsTabs;
