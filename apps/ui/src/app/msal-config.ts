import { Configuration, PublicClientApplication } from '@azure/msal-browser';

const msalConfig: Configuration = {
  auth: {
    clientId: '3db32ac8-a13f-4d4a-9f24-a553af37fffa',
    authority:
      'https://login.microsoftonline.com/dd03cb2c-9814-43b1-97eb-1c82137c57ac',
    redirectUri: 'http://localhost:4200/',
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
