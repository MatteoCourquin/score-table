import clsx from "clsx";

const Line = ({dark}) => {
  return (
    <div className="flex flex-col gap-3 py-2 items-center">
      <div className={clsx(dark ? 'bg-secondary' : 'bg-primary','rounded-full w-[4px] h-[4px]')}></div>
      <div className={clsx(dark ? 'bg-secondary' : 'bg-primary', 'w-[2px] h-full')}></div>
      <div className={clsx(dark ? 'bg-secondary' : 'bg-primary','rounded-full w-[4px] h-[4px]')}></div>
    </div>
  );
}

export default Line