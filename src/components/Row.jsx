import clsx from "clsx";

const Row = ({ teamName, teamScore, dark }) => {
  return (
    <div className={clsx(dark ? 'text-secondary' : 'text-primary' ,'flex w-full justify-between items-center')}>
      <p>{teamName}</p>
      <p className='inline-block w-12 text-right'>{teamScore}</p>
    </div>
  );
};

export default Row;
