import { InteractionType } from '@azure/msal-browser';
import {
  MsalAuthenticationTemplate,
  useAccount,
  useMsal,
} from '@azure/msal-react';
import { useQuery } from 'react-query';

export const fetchTemperature = async (accessToken: string) => {
  const response = await fetch('/api/temperature', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const Temperature = () => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});

  const { isLoading, error, data } = useQuery('temperature', async () => {
    if (account) {
      const response = await instance.acquireTokenSilent({
        scopes: [process.env.NX_APP_AZURE_SCOPE ?? ''],
        account: account,
      });

      return fetchTemperature(response.accessToken);
    }
  });

  if (isLoading) return <>'Loading...'</>;

  if (error) return <>`An error has occurred: ${(error as Error).message}`</>;

  return (
    <div>
      <h1>Temperature: {data.temperature}</h1>
    </div>
  );
};

export const ProtectedTemperature = () => {
  const authRequest = {
    scopes: ['api_scope'],
  };

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Popup}
      authenticationRequest={authRequest}
    >
      <Temperature />
    </MsalAuthenticationTemplate>
  );
};
