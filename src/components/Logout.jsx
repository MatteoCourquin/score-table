import { useAuth0 } from '@auth0/auth0-react';
import clsx from 'clsx';
import Button from './Button';
import { IconLogout } from './Icons';

const LogoutButton = ({ style }) => {
  const { logout } = useAuth0();

  return (
    <Button
      type='cancel'
      value={<IconLogout />}
      style={clsx('p-0', style)}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    />
  );
};

export default LogoutButton;
