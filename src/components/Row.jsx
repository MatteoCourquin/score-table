import clsx from 'clsx';

const Row = ({ name, score, dark, style, hasAssos }) => {
  return (
    <div
      className={clsx(
        dark ? 'text-secondary' : 'text-primary',
        'flex justify-between items-center text-xl',
        style
      )}
    >
      <p className='capitalize whitespace-nowrap text-ellipsis'>{name}</p>
      <p
        className={clsx(
          'whitespace-nowrap inline-block text-right font-sans',
          !hasAssos && 'sm:!text-secondary'
        )}
      >
        {score}
      </p>
    </div>
  );
};

export default Row;
