import clsx from 'clsx';

const ButtonTypes = {
  CLICK: 'click',
  VALIDATE: 'validate',
  CANCEL: 'cancel',
  DELETE: 'delete',
};

const Button = ({ style, value, onClick, type = ButtonTypes.CLICK }) => {
  const buttonClass = clsx(style, 'font-sans font-bold py-1 px-3 rounded', {
    'bg-blue-500 hover:bg-blue-700 !text-white': type === ButtonTypes.CLICK,
    'bg-green-500 hover:bg-green-700 !text-white':
      type === ButtonTypes.VALIDATE,
    'bg-gray-500 hover:bg-gray-700 !text-white': type === ButtonTypes.CANCEL,
    'bg-red-500 hover:bg-red-700 !text-white': type === ButtonTypes.DELETE,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
