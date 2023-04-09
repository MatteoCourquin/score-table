import clsx from "clsx";

const Line = ({dark}) => {
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div className={clsx(dark ? 'bg-secondary shadow-box-secondary' : 'bg-primary shadow-box-primary','shrink-0 rounded-full w-[3px] h-[3px]')}></div>
      <div className={clsx(dark ? 'bg-secondary shadow-box-secondary' : 'bg-primary shadow-box-primary', 'rounded-full w-[2px] h-full')}></div>
      <div className={clsx(dark ? 'bg-secondary shadow-box-secondary' : 'bg-primary shadow-box-primary','shrink-0 rounded-full w-[3px] h-[3px]')}></div>
    </div>
  );
}

export default Line