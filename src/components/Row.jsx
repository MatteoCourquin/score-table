const Row = ({ teamName, teamScore, incrementScore, decrementScore }) => {

  return (
    <div className='flex w-full justify-between items-center border-b border-secondary h-[120px]'>
        <p>{teamName}</p>
        <div className="select-none">
          <button className='border border-secondary px-3 outline-none rounded-md' onClick={decrementScore}>-</button>
          <p className='inline-block w-12 text-center'>{teamScore}</p>
          <button className='border border-secondary px-3 outline-none rounded-md' onClick={incrementScore}>+</button>
        </div>
    </div>
  );
};

export default Row;
