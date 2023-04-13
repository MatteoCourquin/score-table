import clsx from 'clsx';

const Line = ({ style, dark }) => {
  return (
    <div className={clsx('flex flex-col items-center gap-3 py-2', style)}>
      <div
        className={clsx(
          dark
            ? 'bg-secondary'
            : 'bg-primary',
          'shrink-0 rounded-full w-[3px] h-[3px]'
        )}
      ></div>
      <div
        className={clsx(
          dark
            ? 'bg-secondary '
            : 'bg-primary',
          'rounded-full w-[2px] h-full'
        )}
      ></div>
      <div
        className={clsx(
          dark
            ? 'bg-secondary'
            : 'bg-primary',
          'shrink-0 rounded-full w-[3px] h-[3px]'
        )}
      ></div>
    </div>
  );
};

export default Line;
