import { useMsal } from '@azure/msal-react';

export const Logout = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};
