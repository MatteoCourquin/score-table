import clsx from 'clsx';

const Row = ({ name, score, dark, style }) => {
  return (
    <div
      className={clsx(
        dark ? 'text-secondary' : 'text-primary',
        'flex justify-between items-center',
        style
      )}
    >
      <p className='whitespace-nowrap text-ellipsis'>{name}</p>
      <p className='whitespace-nowrap inline-block text-right font-sans'>
        {score}
      </p>
    </div>
  );
};

export default Row;
