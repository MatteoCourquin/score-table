import clsx from "clsx";

const Row = ({ teamName, teamScore, dark, style }) => {
  return (
    <div className={clsx(dark ? 'text-secondary' : 'text-primary' ,'flex justify-between items-center', style)}>
      <p className={"whitespace-nowrap text-ellipsis" + style}>{teamName}</p>
      <p className={'whitespace-nowrap inline-block text-right' + style}>{teamScore}</p>
    </div>
  );
};

export default Row;
