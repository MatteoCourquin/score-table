import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button';

const LoginButton = ({ style }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      type='click'
      style={style}
      value='Log In'
      onClick={() => loginWithRedirect()}
    />
  );
};

export default LoginButton;
