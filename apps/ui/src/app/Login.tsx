import { useMsal } from '@azure/msal-react';

export const Login = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance
      .loginRedirect()
      .then((response) => {
        // Handle login response
      })
      .catch((error) => {
        // Handle error
      });
  };

  return <button onClick={handleLogin}>Login</button>;
};
